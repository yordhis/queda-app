// src/components/layout/SubHeader.tsx
import { Text, View } from 'react-native';
import InputFilter from '../common/InputFilter';

interface SubHeaderProps {
  title: string;
}

export const SubHeader = ({ title }: SubHeaderProps) => {
  return (
    <View className="flex-col items-center px-4 py-6">
      <Text className="text-2xl font-semibold text-gray-900">
        { title } 
      </Text>
      <InputFilter />
    </View>
  );
};


