import { Stack } from "expo-router";
import "../global.css";

// app/saved-hotels.tsx

export default function RootLayout() {
 // Aquí podrías verificar si el usuario está logueado
  const isAuthenticated = true; 

  return (
    <Stack screenOptions={{ headerShown: false }}>
      {/* Si no está logueado, mostramos el grupo (auth) */}
      {!isAuthenticated && <Stack.Screen name="(auth)" />}

      {/* Si está logueado, mostramos el grupo (tabs) */}
      {isAuthenticated && <Stack.Screen name="(tabs)" />}
    </Stack>
  );
}
