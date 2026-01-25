import { FormInput } from '@/core/components/common/form/FormInput';
import { ImagePickerField } from '@/core/components/common/form/ImagePickerField';
import { COLORS } from '@/core/constants/theme';
import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function UserRegistrationScreen() {
  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      
      {/* Sección 1: Datos Generales */}
      <FormInput label="Datos del Hotel" placeholder="Ej: Hotel Paraíso" />
      <FormInput label="Eslogan del Hotel" placeholder="Tu descanso ideal nos importa" />
      <FormInput 
        label="Descripción" 
        placeholder="Describe los servicios y ambiente del hotel..." 
        multiline 
      />

      <Text style={styles.sectionTitle}>Ubicación y contacto</Text>
      <FormInput label="Dirección del lugar" placeholder="Av. Principal, Ciudad" />
      <FormInput label="Coordenadas de Google Maps" placeholder="Ej: 0212-1234567" />
      <FormInput label="Número de Teléfono Fijo" placeholder="Ej: 0212-1234567" keyboardType="phone-pad" />
      <FormInput label="Número de Teléfono Celular" placeholder="Ej: 0414-1234567" keyboardType="phone-pad" />

      <Text style={styles.sectionTitle}>Información Legal y Operativa</Text>
      <FormInput label="RIF" placeholder="Ej: J-12345678-9" />
      <ImagePickerField label="Foto de RIF" />
      
      <FormInput label="Habitaciones disponibles" placeholder="Ej: 10" keyboardType="numeric" />

      {/* Redes Sociales */}
      <FormInput label="Instagram" placeholder="Ej: @HotelParaiso" />
      <FormInput label="WhatsApp" placeholder="Ej: +58 424-1234567" keyboardType="phone-pad" />

      {/* Botón Siguiente */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Siguiente</Text>
      </TouchableOpacity>
      
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: '#FFF' },
  content: { padding: 20, paddingBottom: 50 },
  sectionTitle: { 
    fontSize: 18, 
    fontWeight: 'bold', 
    color: '#333', 
    marginTop: 20, 
    marginBottom: 15 
  },
  button: {
    backgroundColor: COLORS.primary,
    borderRadius: 25,
    paddingVertical: 15,
    alignItems: 'center',
    marginTop: 30,
    elevation: 3, // Sombra para Android
    shadowColor: '#000', // Sombra para iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
  },
  buttonText: { color: '#FFF', fontSize: 18, fontWeight: 'bold' }
});