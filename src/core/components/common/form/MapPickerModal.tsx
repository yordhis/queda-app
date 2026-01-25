import * as Location from 'expo-location'; // <--- Importamos Location
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Alert, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import MapView, { Marker, Region } from 'react-native-maps';
import { COLORS } from '../../../constants/theme';

interface MapPickerProps {
  isVisible: boolean;
  onClose: () => void;
  onLocationSelected: (coords: { latitude: number; longitude: number }) => void;
}

export const MapPickerModal: React.FC<MapPickerProps> = ({ isVisible, onClose, onLocationSelected }) => {
  const [loading, setLoading] = useState(true);
  const [region, setRegion] = useState<Region | null>(null);
  const [selectedCoords, setSelectedCoords] = useState<{ latitude: number; longitude: number } | null>(null);

  useEffect(() => {
    if (isVisible) {
      getUserLocation();
    }
  }, [isVisible]);

  const getUserLocation = async () => {
    setLoading(true);
    try {
      // 1. Pedir permisos
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permiso denegado', 'QUEDA necesita acceso a tu ubicación para centrar el mapa.');
        // Si no hay permiso, ponemos una ubicación por defecto (Ej. Caracas o tu ciudad)
        setDefaultRegion();
        return;
      }

      // 2. Obtener posición actual
      let location = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.Balanced,
      });

      const currentRegion = {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      };

      setRegion(currentRegion);
      setSelectedCoords({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });
    } catch (error) {
      setDefaultRegion();
    } finally {
      setLoading(false);
    }
  };

  const setDefaultRegion = () => {
    const defaultLoc = {
      latitude: 10.4806, // Coordenadas por defecto
      longitude: -66.9036,
      latitudeDelta: 0.05,
      longitudeDelta: 0.05,
    };
    setRegion(defaultLoc);
    setSelectedCoords({ latitude: defaultLoc.latitude, longitude: defaultLoc.longitude });
    setLoading(false);
  };

  const handleConfirm = () => {
    if (selectedCoords) {
      onLocationSelected(selectedCoords);
      onClose();
    }
  };

  return (
    <Modal visible={isVisible} animationType="slide">
      <View style={styles.container}>
        {loading ? (
          <View style={styles.loaderContainer}>
            <ActivityIndicator size="large" color={COLORS.primary} />
            <Text style={{ marginTop: 10 }}>Localizando tu posición...</Text>
          </View>
        ) : (
          <>
            <MapView
              style={styles.map}
              initialRegion={region!}
              onPress={(e) => setSelectedCoords(e.nativeEvent.coordinate)}
            >
              {selectedCoords && (
                <Marker 
                  coordinate={selectedCoords} 
                  draggable // Permite que el usuario arrastre el pin
                  onDragEnd={(e) => setSelectedCoords(e.nativeEvent.coordinate)}
                  pinColor={COLORS.primary} 
                />
              )}
            </MapView>

            <View style={styles.footer}>
              <Text style={styles.hint}>Mueve el pin o toca el mapa para ubicar el hotel</Text>
              <View style={styles.buttonRow}>
                <TouchableOpacity style={[styles.btn, styles.cancelBtn]} onPress={onClose}>
                  <Text style={styles.btnTextDark}>Cancelar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.btn, styles.confirmBtn]} onPress={handleConfirm}>
                  <Text style={styles.btnText}>Confirmar</Text>
                </TouchableOpacity>
              </View>
            </View>
          </>
        )}
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  loaderContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  map: { flex: 1 },
  footer: {
    backgroundColor: 'white',
    padding: 20,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    marginTop: -20, // Efecto de superposición sobre el mapa
  },
  hint: { textAlign: 'center', marginBottom: 15, color: '#666', fontSize: 13 },
  buttonRow: { flexDirection: 'row', justifyContent: 'space-between' },
  btn: { padding: 15, borderRadius: 15, width: '48%', alignItems: 'center' },
  confirmBtn: { backgroundColor: COLORS.primary },
  cancelBtn: { backgroundColor: '#F0F0F0' },
  btnText: { color: 'white', fontWeight: 'bold' },
  btnTextDark: { color: '#333', fontWeight: 'bold' }
});