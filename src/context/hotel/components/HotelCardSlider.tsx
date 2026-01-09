// src/components/hotels/HotelCardSlider.tsx

import Hotel from '@/context/hotel/lib/Hotel';
import { Bookmark, Star } from 'lucide-react-native';
import React from 'react';
import { Dimensions, Image, Text, TouchableOpacity, View } from 'react-native';

const { width } = Dimensions.get('window');
const CARD_WIDTH = width * 0.75; // La tarjeta ocupa el 75% del ancho para que se vea la siguiente

export const HotelCardSlider = ({ hotel }: { hotel: Hotel }) => {
  return (
    <View 
      style={{ width: CARD_WIDTH }} 
      className="bg-white rounded-3xl shadow-lg ml-4 mb-6 overflow-hidden border border-gray-100"
    >
      {/* Imagen con botón de Guardar */}
      <View className="relative h-48">
        <Image 
          source={{ uri: hotel.imageUrl[0] }} 
          className="w-full h-full"
          resizeMode="cover"
        />
        <TouchableOpacity className="absolute top-3 left-3 bg-black/20 p-2 rounded-lg">
          <Bookmark color="white" size={20} />
        </TouchableOpacity>
      </View>

      {/* Contenido */}
      <View className="p-4">

        <Text className="text-xl font-bold text-gray-900 mb-1" numberOfLines={1}>
          {hotel.name}
        </Text>
        <View className="flex-row items-center mb-1">
          <Text className="text-yellow-400 font-bold mr-2">
            <Star size={12} color={'orange'} />
            {hotel.rating}</Text>
          <Text className="text-gray-400">{hotel.reviewsCount} Visitas </Text>
        </View>

        <Text className="text-gray-500 text-sm mb-4" numberOfLines={2}>
          {hotel.description}
        </Text>

        <Text className="text-gray-500 text-sm mb-4" numberOfLines={2}>
          {hotel.address}
        </Text>

        {/* Indicador de Disponibilidad */}
        <View className="flex-row items-center">
          <View 
            className={`w-3 h-3 rounded-full ${hotel.isAvailable ? 'bg-lime-500' : 'bg-red-500'}`} 
          />
          <Text className="ml-2 text-gray-800 font-medium">
            {hotel.isAvailable ? 'Disponible' : 'No disponible'}
          </Text>
        </View>
      </View>
    </View>
  );
};