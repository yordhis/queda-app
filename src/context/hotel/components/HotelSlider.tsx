import Hotel from '@/context/hotel/lib/Hotel';
import React from 'react';
import { Dimensions, FlatList, Text, View } from 'react-native';
import { HotelCardSlider } from './HotelCardSlider';

interface Props {
  hotels: Hotel[];
  title: string;
}

export const HotelSlider = ({ hotels, title }: Props) => {

// obtener ancho de pantalla del dispositivo
  const { width } = Dimensions.get('window');

  return (
    <View>
      {title && <Text className="text-xl font-bold text-gray-900 mb-4 px-4">{title}</Text>}
      <FlatList
        data={hotels}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id} // Asegúrate de que cada hotel tenga un ID único
        renderItem={({ item }) => <HotelCardSlider hotel={item} />} // Usar el componente HotelCardSlider
        snapToAlignment="start" // Alinea la tarjeta al inicio
        decelerationRate="fast" // para un efecto de deslizamiento más suave
        snapToInterval={width * 0.75 + 16} // Ancho tarjeta + margen
        contentContainerStyle={{ paddingRight: 20 }}
      />
    </View>
  );
};