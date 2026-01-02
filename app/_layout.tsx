import "../global.css";

// app/saved-hotels.tsx
import { BottomTabs } from '@/components/layout/BottomTabs';
import { EmptyState } from '@/components/layout/EmptyState';
import { Header } from '@/components/layout/Header';
import { SubHeader } from '@/components/layout/SubHeader';
import { Slot } from "expo-router";
import { View } from 'react-native';
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function SavedHotelsScreen() {
  return (
    <View className="flex-1 bg-white">
      {/* Parte Superior */}
      <Header />
      
      <SafeAreaProvider className="flex-1">
        <SubHeader title="Tus hoteles guardados" />

        {/* Contenido Principal */}
        <Slot />
        
        <EmptyState />
      </SafeAreaProvider>

      {/* Parte Inferior */}
      <BottomTabs />
    </View>
  );
}
