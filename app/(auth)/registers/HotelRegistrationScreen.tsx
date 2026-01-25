import { FormInput } from '@/core/components/common/form/FormInput';
import { MultiImagePicker } from '@/core/components/common/form/MultiImagePicker';
import { COLORS } from '@/core/constants/theme';
import React, { useState } from 'react';
import { KeyboardAvoidingView, ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function HotelRegistrationScreen() {
  const [hotelPhotos, setHotelPhotos] = useState<string[]>([]);

  return (
    <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
      <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
        <Text style={styles.sectionTitle}>Datos del Hotel</Text>
        {/* Sección 1: Datos Generales */}
        <FormInput label="Nombre" placeholder="Ej: Hotel Paraíso" />
        <FormInput label="Eslogan del Hotel" placeholder="Tu descanso ideal nos importa" />
        <FormInput
          label="Descripción"
          placeholder="Describe los servicios y ambiente del hotel..."
          multiline
        />

        <Text style={styles.sectionTitle}>Ubicación y contacto</Text>
        <FormInput label="Dirección del lugar" placeholder="Av. Principal, Ciudad" multiline />
        <FormInput label="Coordenadas de Google Maps" placeholder="Ej: 8.609061284938045, -70.23094839858399" multiline />
        <FormInput label="Número de Teléfono Fijo" placeholder="Ej: 0212-1234567" keyboardType="phone-pad" />
        <FormInput label="Número de Teléfono Celular" placeholder="Ej: 0414-1234567" keyboardType="phone-pad" />

        <Text style={styles.sectionTitle}>Información Legal y Operativa</Text>
        <FormInput label="RIF" placeholder="Ej: J-12345678-9" />

        <MultiImagePicker
          label="Fotos del Hotel (Máx. 10)"
          onImagesSelected={(uris) => setHotelPhotos(uris)}
        />

        <FormInput label="Habitaciones disponibles" placeholder="Ej: 10" keyboardType="numeric" />

        {/* Redes Sociales */}
        <FormInput label="Instagram" placeholder="Ej: @HotelParaiso" />
        <FormInput label="WhatsApp" placeholder="Ej: +58 424-1234567" keyboardType="phone-pad" />

        {/* Botón Siguiente */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Siguiente</Text>
        </TouchableOpacity>

      </ScrollView>
    </KeyboardAvoidingView>
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