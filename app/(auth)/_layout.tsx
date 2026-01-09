
import { Stack } from 'expo-router';

export default function AuthLayout() {
  return (
    <Stack
      screenOptions={{
        // Estilo global para las pantallas de login/registro
        headerStyle: { backgroundColor: '#121212' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' },
        headerShadowVisible: false, // Quita la línea divisoria
      }}
    >
      <Stack.Screen 
        name="login" 
        options={{ title: 'Iniciar Sesión' }} 
      />
      <Stack.Screen 
        name="register" 
        options={{ title: 'Crear Cuenta' }} 
      />
    </Stack>
  );
}
