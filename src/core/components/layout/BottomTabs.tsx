// src/components/layout/BottomTabs.tsx
import { router } from 'expo-router';
import { Bookmark, Search, User } from 'lucide-react-native';
import { useState } from 'react';
import { Image, Modal, Text, TouchableOpacity, View } from 'react-native';

export const BottomTabs = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View className="flex-row border-t border-gray-200 bg-gray-50 pb-8 pt-2 justify-around items-center">
      <TouchableOpacity className="items-center">
        <Search color="#4B5563" size={16} />
        <Text className="text-gray-600 text-xs mt-1">Buscar</Text>
      </TouchableOpacity>

      <TouchableOpacity className="items-center">
        <Bookmark size={16} />
        <Text className="text-xs mt-1 font-bold">Guardar</Text>
      </TouchableOpacity>

      <TouchableOpacity className="items-center" onPress={() => setModalVisible(true)}>
        <View className="w-7 h-7 rounded-full overflow-hidden border border-gray-300">
          <Image
            source={{ uri: 'https://avatar.iran.liara.run/public/30' }}
            className="w-full h-full"
          />
        </View>
        <Text className="text-gray-600 text-xs mt-1">Cuenta</Text>

        {/* modal para ver si se va a registrar o iniciar sesion */}
        <Modal animationType="slide" visible={modalVisible}>
          <View className="flex-1 justify-end bg-black bg-opacity-50">
            <View className="bg-white p-4 rounded-t-lg">
              {/* btn salir del modal */}
              <TouchableOpacity
                className="absolute top-1 right-5 bg-white rounded-full p-2 shadow"
                onPress={() => setModalVisible(false)}
              >
                <Text className="text-xl font-bold">X</Text>
              </TouchableOpacity>

              <Text className="text-lg font-bold mb-4">Sesion</Text>

              <TouchableOpacity className="bg-blue-500 p-3 rounded-lg mb-2">
                <Text className="text-white text-center">
                  <User color={'white'} size={16} />
                  Iniciar Sesión
                </Text>
              </TouchableOpacity>

              {/* redireccionar la vista de registro */}
              <TouchableOpacity className="bg-green-500 p-3 rounded-lg" onPress={() => router.push('/(auth)/Selecione un rol')}>
                <Text className="text-white text-center">Registrarse</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

      </TouchableOpacity>
    </View>

  );
};