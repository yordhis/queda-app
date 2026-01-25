// src/components/auth/RoleOption.tsx
import { Building2, User } from 'lucide-react-native';
import { Text, TouchableOpacity, View } from 'react-native';

interface Props {
  type: 'hotel' | 'user';
  isSelected: boolean;
  onSelect: () => void;
}

export const RoleOption = ({ type, isSelected, onSelect }: Props) => {
  const Icon = type === 'hotel' ? Building2 : User;
  const label = type === 'hotel' ? 'Hotel' : 'Usuario';

  return (
    <TouchableOpacity 
      onPress={onSelect}
      className="items-center justify-center mx-4"
    >
      <View className={`p-6 rounded-3xl border-2 mb-2 ${
        isSelected ? 'bg-orange-100 border-amber-500' : 'bg-orange-50 border-transparent'
      }`}>
        <Icon size={48} color="#F59E0B" strokeWidth={1.5} />
      </View>
      <View className="bg-orange-50 px-6 py-2 rounded-full border border-orange-100">
        <Text className="text-amber-700 font-semibold text-base">{label}</Text>
      </View>
    </TouchableOpacity>
  );
};