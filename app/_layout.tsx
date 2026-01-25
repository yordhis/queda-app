import { Stack } from "expo-router";
import { useState } from "react";
import "../global.css";

// app/saved-hotels.tsx

export default function RootLayout() {
  // Aquí podrías verificar si el usuario está logueado
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Cambia esto según tu lógica de autenticación

  return (
    <Stack screenOptions={{
      headerShown: false,
      headerStyle: { backgroundColor: '#FFAC00' }, 
      headerTintColor: '#fff', 
      headerTitleStyle: { fontWeight: 'bold' }
    }}>
      {/* Si no está logueado, mostramos el grupo (auth) */}
      {!isAuthenticated && <Stack.Screen name="(auth)" />}

      {/* Si está logueado, mostramos el grupo (tabs) */}
      {isAuthenticated && <Stack.Screen name="(tabs)" />}
    </Stack>
  );
}
