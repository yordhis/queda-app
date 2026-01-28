import { AuthProvider } from '@/context/auth/AuthProvider';
import * as NavigationBar from 'expo-navigation-bar';
import { Stack } from "expo-router";
import React, { useEffect } from 'react';
import { Platform } from 'react-native';
import "../global.css";


export default function RootLayout() {
  useEffect(() => {
    if (Platform.OS === 'android') {
      // Oculta la barra de navegación completamente
      NavigationBar.setVisibilityAsync("hidden");
      NavigationBar.setBehaviorAsync("inset-touch");
    }
  }, []);
  return (
    <AuthProvider>
      <Stack screenOptions={{
        headerShown: false,
        headerStyle: { backgroundColor: '#FFAC00' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' }
      }}>

        {/* Group (tabs) */}
        {<Stack.Screen name="(tabs)" />}
      </Stack>
    </AuthProvider>
  );
}

