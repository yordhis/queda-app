// pagina de inicio mostrando el slider de hoteles

import { HotelSlider } from '@/context/hotel/components/HotelSlider';
import { HotelImages } from '@/context/hotel/constants/hotel-images';
import Hotel from '@/context/hotel/lib/Hotel';
import { View } from 'react-native';

export default function home() {
  const hotelImages = new HotelImages();
  const hotelsData: Hotel[] = [
    {
      id: '1',
      name: 'Hotel Paraíso',
      description: 'Un lugar perfecto para relajarse y disfrutar de la naturaleza.',
      imageUrl: [hotelImages.img_01],
      rating: 4.5,
      reviewsCount: 120,
      isAvailable: true,
      address: 'BARINAS, VENEZUELA',
      amenities: [],
      pricePerNight: 0,
      isFavorite: false
    },
    {
      id: '2',
      name: 'Resort Playa Azul',
      description: 'Disfruta de las mejores vistas al mar y servicios de lujo.',
      imageUrl: [hotelImages.img_02],
      rating: 4.8,
      reviewsCount: 200,
      isAvailable: false,
      address: 'BARQUISIMETO, VENEZUELA',
      amenities: [],
      pricePerNight: 0,
      isFavorite: false
    },
    {
      id: '3',
      name: 'Ciudad Hotel Central',
      description: 'Ubicado en el corazón de la ciudad, ideal para viajeros de negocios.',
      imageUrl: [hotelImages.img_03],
      rating: 4.2,
      reviewsCount: 80,
      isAvailable: true,
      address: 'CARACAS, VENEZUELA',
      amenities: [],
      pricePerNight: 0,
      isFavorite: false
    },
  ];

  return (
    <View className="flex-1 bg-white">
      {/* Aquí puedes agregar el componente HotelSlider u otros componentes de la página de inicio */}
      <HotelSlider hotels={hotelsData} title="Hoteles más cercanos" />
    </View>
  );
}