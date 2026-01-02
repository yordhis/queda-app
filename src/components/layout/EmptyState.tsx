// src/components/common/EmptyState.tsx
import { Text, View } from 'react-native';

export const EmptyState = () => {
  return (
    <View className="flex-1 items-center mt-10 px-10">
      <Text className="text-gray-700 text-center font-semibold text-base">
        Por ahora no tienes hoteles guardados
      </Text>
    </View>
  );
};