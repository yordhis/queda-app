// src/components/layout/SubHeader.tsx
import { ChevronLeft } from 'lucide-react-native';
import { Text, TouchableOpacity, View } from 'react-native';

interface SubHeaderProps {
  title: string;
}

export const SubHeader = ({ title }: SubHeaderProps) => {
  return (
    <View className="flex-row items-center px-4 py-6">
      <TouchableOpacity className="p-2">
        <ChevronLeft color="#F59E0B" size={28} />
      </TouchableOpacity>
      <View className="flex-1 items-center mr-10"> 
        <Text className="text-gray-800 text-lg font-bold">
          {title}
        </Text>
      </View>
    </View>
  );
};