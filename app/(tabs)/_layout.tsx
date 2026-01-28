import { useAuth } from '@/context/auth/AuthProvider';
import { COLORS } from "@/core/constants/theme";
import { Tabs } from "expo-router";
import { Bookmark, Home, UserRound } from "lucide-react-native";
import { Image } from 'react-native';


export default function TabsLayout() {
    const { showLogin } = useAuth();

    const visibleTabBarStyle = { backgroundColor: COLORS.white, marginTop: 0, height: 60 } as const;
    const hiddenTabBarStyle = { display: 'none' } as const;

    return (

        <Tabs
            screenOptions={{
                tabBarActiveTintColor: COLORS.primary, // Color del icono seleccionado
                tabBarInactiveTintColor: COLORS.text, // Color del icono no seleccionado
                tabBarStyle: showLogin ? hiddenTabBarStyle : visibleTabBarStyle,
                headerTitle: () => (
                    <Image source={require('../../assets/images/logo-blanco.png')} style={{ width: 120, height: 34, resizeMode: 'contain', alignSelf: 'center' }} />
                ),
                headerTitleAlign: 'center',
                headerShown: true, // Muestra el título de la pestaña arriba
                headerStyle: { backgroundColor: COLORS.primary },
                headerTintColor: COLORS.text,
                headerTitleStyle: { fontWeight: 'bold' },
                headerShadowVisible: true, // Quita la línea divisoria
            }}
        >
        
            <Tabs.Screen
                name="home"
                options={{
                    title: 'Inicio',
                    tabBarIcon: ({ color, size }) => (
                        <Home color={color} size={size} />
                    ),
                }}
            />
            <Tabs.Screen
                name="saved"
                options={{
                    title: 'Guardados',
                    tabBarIcon: ({ color, size }) => (
                        <Bookmark color={color} size={size} />
                    ),
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    title: 'Perfil',
                    tabBarIcon: ({ color, size }) => (
                        <UserRound color={color} size={size} />
                    ),
                }}
            />
    
         
        </Tabs>

    );
}

