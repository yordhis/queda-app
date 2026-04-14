// pagina de inicio mostrando el slider de hoteles

import { useAuth } from '@/context/auth/AuthProvider';
import { HotelSlider } from '@/context/hotel/components/HotelSlider';
import { HotelImages } from '@/context/hotel/constants/hotel-images';
import Hotel from '@/context/hotel/lib/Hotel';
import { LoginForm } from '@/context/user/components/form/LoginForm';
import SearchInput from '@/core/components/common/SearchInput';
import { useEffect, useRef, useState } from "react";
import { Dimensions, ScrollView, StyleSheet, View } from 'react-native';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming
} from 'react-native-reanimated';

const { height } = Dimensions.get('window');

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
  
  const [mostrarHoteles, setMostrarHoteles] = useState(false);
  const scrollRef = useRef<ScrollView | null>(null);

  // El valor comienza en la altura total de la pantalla (fuera de vista abajo)
  const translateY = useSharedValue(height);

  const { isAuthenticated, showLogin, setShowLogin } = useAuth();

  // Mostrar u ocultar el sheet según auth y la bandera de login
  useEffect(() => {
    if (!isAuthenticated && showLogin) {
      translateY.value = withTiming(0, {
        duration: 800,
        easing: Easing.out(Easing.exp),
      });
    } else {
      translateY.value = withTiming(height, {
        duration: 600,
        easing: Easing.in(Easing.exp),
      });
    }
  }, [isAuthenticated, showLogin]);

  // Cuando se muestren los hoteles, hacer scroll hacia abajo
  useEffect(() => {
    if (mostrarHoteles) {
      const t = setTimeout(() => {
        scrollRef.current?.scrollTo({ y: 0, animated: true });
      }, 120);
      return () => clearTimeout(t);
    }
  }, [mostrarHoteles]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
  }));

  return (
    <View style={{ flex: 1 }}>
      <ScrollView ref={scrollRef} contentContainerStyle={{ flexGrow: 1 }} className="bg-white">

        <SearchInput/>

        <View className={mostrarHoteles ? '' : 'hidden'} > {/* Espacio entre el form y el slider */}
          <HotelSlider hotels={hotelsData} title="Hoteles más cercanos" />
        </View>
        <View className={mostrarHoteles ? '' : 'hidden'} > {/* Espacio entre el form y el slider */}
          <HotelSlider hotels={hotelsData} title="Hoteles destacados" />
        </View>
        <View className={mostrarHoteles ? '' : 'hidden'} > {/* Espacio entre el form y el slider */}
          <HotelSlider hotels={hotelsData} title="Hoteles con piscina" />
        </View>
        <View className={mostrarHoteles ? '' : 'hidden'} > {/* Espacio entre el form y el slider */}
          <HotelSlider hotels={hotelsData} title="Hoteles familiares" />
        </View>
        <View className={mostrarHoteles ? '' : 'hidden'} > {/* Espacio entre el form y el slider */}
          <HotelSlider hotels={hotelsData} title="Hoteles 5 star" />
        </View>

        {/* Aquí puedes agregar el componente HotelSlider u otros componentes de la página de inicio */}
      </ScrollView>

      <Animated.View pointerEvents={showLogin ? 'auto' : 'none'} style={[styles.sheet, animatedStyle]}>
        <LoginForm onClose={() => {
          translateY.value = withTiming(height, { duration: 600, easing: Easing.in(Easing.exp) });
          setTimeout(() => {
            setMostrarHoteles(true);
            setShowLogin(false);
          }, 600);
        }} />
      </Animated.View>
    </View>

  );
}

const styles = StyleSheet.create({
  sheet: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'white',
    height: '90%', // Ocupa casi toda la pantalla
    width: '100%',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    zIndex: 10,
  },
});