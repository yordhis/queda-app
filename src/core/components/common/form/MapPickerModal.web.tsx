import React from 'react';
import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { COLORS } from '../../../constants/theme';

interface MapPickerProps {
  isVisible: boolean;
  onClose: () => void;
  onLocationSelected: (coords: { latitude: number; longitude: number }) => void;
}

export const MapPickerModal: React.FC<MapPickerProps> = ({ isVisible, onClose }) => {
  return (
    <Modal visible={isVisible} animationType="slide">
      <View style={styles.container}>
        <View style={styles.messageBox}>
          <Text style={styles.title}>Mapa no disponible en web</Text>
          <Text style={styles.description}>
            La selección de ubicación solo está soportada en dispositivos nativos. Por favor usa la aplicación en iOS o Android.
          </Text>
          <TouchableOpacity style={styles.button} onPress={onClose}>
            <Text style={styles.buttonText}>Cerrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.4)',
    padding: 20,
  },
  messageBox: {
    width: '100%',
    backgroundColor: '#fff',
    padding: 24,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
    color: COLORS.primary,
  },
  description: {
    fontSize: 15,
    color: '#444',
    marginBottom: 24,
    lineHeight: 22,
  },
  button: {
    backgroundColor: COLORS.primary,
    borderRadius: 16,
    paddingVertical: 14,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
  },
});
