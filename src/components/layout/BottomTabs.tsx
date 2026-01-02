// src/components/layout/BottomTabs.tsx
import { Bookmark, Search } from 'lucide-react-native';
import { Image, Text, TouchableOpacity, View } from 'react-native';

export const BottomTabs = () => {
  return (
    <View className="flex-row border-t border-gray-200 bg-gray-50 pb-8 pt-2 justify-around items-center">
      <TouchableOpacity className="items-center">
        <Search color="#4B5563" size={24} />
        <Text className="text-gray-600 text-xs mt-1">Buscar</Text>
      </TouchableOpacity>

      <TouchableOpacity className="items-center">
        <Bookmark color="#F59E0B" size={24} fill="#F59E0B" />
        <Text className="text-amber-500 text-xs mt-1 font-bold">Guardar</Text>
      </TouchableOpacity>

      <TouchableOpacity className="items-center">
        <View className="w-7 h-7 rounded-full overflow-hidden border border-gray-300">
            <Image 
              source={{ uri: 'https://avatar.iran.liara.run/public/30' }} 
              className="w-full h-full"
            />
        </View>
        <Text className="text-gray-600 text-xs mt-1">Cuenta</Text>
      </TouchableOpacity>
    </View>
  );
};