import { Button } from "@/context/auth/components/login/Button";
import { RoleOption } from "@/context/auth/components/login/RoleOption";
import { router } from "expo-router";
import { ChevronRight } from "lucide-react-native";
import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";


export default function RoleSelectionScreen() {
  const [role, setRole] = useState<'hotel' | 'user' | null>(null);

  return (
    <View className="flex-1 bg-white">
  

      <View className="flex-1 items-center justify-center px-6">
        <Text className="text-2xl font-bold text-gray-800 mb-12">
          Suscribirse como:
        </Text>

        <View className="flex-row items-center justify-center mb-16 space-x-6">
          <RoleOption
            type="hotel"
            isSelected={role === 'hotel'}
            onSelect={() => setRole('hotel')}
          />

          <Text className="text-amber-600 font-medium text-lg">o</Text>

          <RoleOption
            type="user"
            isSelected={role === 'user'}
            onSelect={() => setRole('user')}
          />
        </View>

        <Button
          title="Siguiente"
          disabled={!role}
          onPress={() => router.push(
            role === 'hotel' ? '/(auth)/registers/HotelRegistrationScreen'
              : '/(auth)/registers/UserRegistrationScreen')}
        />

        <TouchableOpacity className="p-6 mt-4" onPress={() => router.push('/(tabs)/home')}>
          <Text className="text-amber-600 font-medium text-lg">
            Navegar como anónimo
            <ChevronRight color="#F59E0B" />
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}