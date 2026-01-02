// src/components/layout/Header.tsx
import { Text, View } from 'react-native';

export const Header = () => {
  return (
    <View className="bg-amber-500 pt-12 pb-4 items-center justify-center shadow-md">
      <Text className="text-white text-3xl font-extrabold italic">
        ¡Queda!
      </Text>
    </View>
  );
};