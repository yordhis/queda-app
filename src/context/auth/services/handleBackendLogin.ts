import axios from 'axios';
import { Alert } from 'react-native';

// Define la interfaz de respuesta de tu backend
interface AuthResponse {
  accessToken: string; // El JWT generado por NestJS
  user: {
    id: string;
    email: string;
    name: string;
    roleId: string;
  };
}

export const handleBackendLogin = async (idToken: string) => {
  try {
    // 1. URL de tu servidor (Ojo: usa tu IP local si estás en un dispositivo físico, no localhost)
    const API_URL = 'http://192.168.1.103:3000/auth/googleLogin';
    console.log(API_URL);
    
    const response = await axios.post<AuthResponse>(API_URL, {
      token: idToken, // Enviamos el ID Token obtenido de Expo Google Auth
    });

    console.log('Respuesta del backend:', response.data);
    const { accessToken, user } = response.data;

    // 2. Guardar el token de tu backend (puedes usar expo-secure-store)
    console.log('Login exitoso, bienvenido:', user.name);
    
    // Aquí podrías navegar a la pantalla principal
    // navigation.replace('Home');

  } catch (error: any) {
    console.error('Error en el login con el backend:', error.response?.data || error.message);
    
    Alert.alert(
      'Error de Autenticación',
      'No se pudo validar la cuenta con el servidor.'
    );
  }
};