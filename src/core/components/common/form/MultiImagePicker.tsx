import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import React, { useState } from 'react';
import {
    Alert,
    FlatList, Image,
    StyleSheet,
    Text, TouchableOpacity,
    View
} from 'react-native';
import { COLORS } from '../../../constants/theme';

interface MultiImagePickerProps {
  label: string;
  onImagesSelected: (uris: string[]) => void;
}

export const MultiImagePicker: React.FC<MultiImagePickerProps> = ({ label, onImagesSelected }) => {
  const [images, setImages] = useState<string[]>([]);

  const pickImages = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    
    if (status !== 'granted') {
      Alert.alert('Permiso denegado', 'Necesitamos acceso para seleccionar las fotos del hotel.');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsMultipleSelection: true, // <--- CLAVE PARA MULTIPLE SELECCIÓN
      selectionLimit: 10, // Puedes limitar la cantidad de fotos
      quality: 0.6,
    });

    if (!result.canceled) {
      // Extraemos las URIs de los assets seleccionados
      const newUris = result.assets.map(asset => asset.uri);
      const updatedImages = [...images, ...newUris];
      
      setImages(updatedImages);
      onImagesSelected(updatedImages);
    }
  };

  const removeImage = (uri: string) => {
    const filteredImages = images.filter(img => img !== uri);
    setImages(filteredImages);
    onImagesSelected(filteredImages);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      
      <View style={styles.row}>
        {/* Botón de Añadir */}
        <TouchableOpacity style={styles.addButton} onPress={pickImages}>
          <Ionicons name="add-circle" size={40} color={COLORS.primary} />
          <Text style={styles.addText}>Añadir</Text>
        </TouchableOpacity>

        {/* Lista Horizontal de Fotos */}
        <FlatList
          data={images}
          horizontal
          keyExtractor={(item) => item}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <View style={styles.imageWrapper}>
              <Image source={{ uri: item }} style={styles.thumbnail} />
              <TouchableOpacity 
                style={styles.deleteBadge} 
                onPress={() => removeImage(item)}
              >
                <Ionicons name="close-circle" size={22} color="red" />
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { marginBottom: 20 },
  label: { color: COLORS.secondary, fontSize: 16, fontWeight: '700', marginBottom: 10 },
  row: { flexDirection: 'row', alignItems: 'center' },
  addButton: {
    width: 80,
    height: 80,
    borderWidth: 2,
    borderColor: COLORS.primary,
    borderStyle: 'dashed',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    backgroundColor: '#FFFBEB'
  },
  addText: { fontSize: 12, color: COLORS.primary, fontWeight: '600' },
  imageWrapper: { position: 'relative', marginRight: 12 },
  thumbnail: { width: 80, height: 80, borderRadius: 15 },
  deleteBadge: {
    position: 'absolute',
    top: -8,
    right: -8,
    backgroundColor: 'white',
    borderRadius: 12,
  }
});