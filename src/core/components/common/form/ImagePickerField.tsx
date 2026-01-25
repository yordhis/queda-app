import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import React, { useState } from 'react';
import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { COLORS } from '../../../constants/theme';


interface ImagePickerProps {
  label: string;
  onImageSelected?: (uri: string) => void;
}

export const ImagePickerField: React.FC<ImagePickerProps> = ({ label, onImageSelected }) => {
  const [image, setImage] = useState<string | null>(null);

  const pickImage = async () => {
    // Solicitar permisos
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    
    if (status !== 'granted') {
      Alert.alert('Permiso denegado', 'Necesitamos acceso a tu galería para cargar las fotos del hotel.');
      return;
    }

    // Abrir la galería
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'], // Solo imágenes
      allowsEditing: true,    // Permite recortar
      aspect: [4, 3],         // Proporción
      quality: 0.7,           // Comprimir un poco para no saturar el servidor
    });

    if (!result.canceled) {
      const uri = result.assets[0].uri;
      setImage(uri);
      if (onImageSelected) onImageSelected(uri);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      
      <TouchableOpacity 
        style={[styles.dashedBox, image ? styles.hasImage : null]} 
        onPress={pickImage}
        activeOpacity={0.7}
      >
        {image ? (
          <View style={styles.previewContainer}>
            <Image source={{ uri: image }} style={styles.previewImage} />
            <View style={styles.overlay}>
              <Ionicons name="refresh" size={24} color="white" />
              <Text style={styles.overlayText}>Cambiar foto</Text>
            </View>
          </View>
        ) : (
          <>
            <Ionicons name="camera" size={32} color={COLORS.primary} />
            <Text style={styles.uploadText}>Toca para seleccionar una foto.</Text>
          </>
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { marginBottom: 20 },
  label: { 
    color: COLORS.secondary, 
    fontSize: 16, 
    fontWeight: '700', 
    marginBottom: 8 
  },
  dashedBox: {
    borderWidth: 2,
    borderColor: '#4A4A4A',
    borderStyle: 'dashed',
    borderRadius: 20,
    height: 120,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FCFCFC',
    overflow: 'hidden', // Importante para que la imagen no se salga de los bordes redondeados
  },
  hasImage: { borderStyle: 'solid', borderColor: COLORS.primary },
  uploadText: { 
    color: COLORS.secondary, 
    marginTop: 8, 
    fontSize: 14,
    fontWeight: '500'
  },
  previewContainer: { width: '100%', height: '100%' },
  previewImage: { width: '100%', height: '100%', resizeMode: 'cover' },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlayText: { color: 'white', fontWeight: 'bold', marginTop: 4 }
});