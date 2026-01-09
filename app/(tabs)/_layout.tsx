import { Tabs } from "expo-router";
import { Home, User } from "lucide-react-native";

export default function TabsLayout() {
    return (
        
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: '#FFAC00', // Color del icono seleccionado
                tabBarInactiveTintColor: '#000',
                headerShown: true, // Muestra el título de la pestaña arriba
                headerStyle: { backgroundColor: '#FFAC00' },
                headerTintColor: '#fff',
                headerTitleStyle: { fontWeight: 'bold' },
                headerShadowVisible: true, // Quita la línea divisoria
            }}
        >
      
            <Tabs.Screen
                name="home"
                options={{
                    title: 'Inicio',
                    tabBarIcon: () => (
                        <Home />
                    ),
                }}
            />
            <Tabs.Screen
                name="Perfil"
                options={{
                    title: 'Mi Perfil',
                    tabBarIcon: () => (
                        <User />
                    ),
                }}
            />
        </Tabs>
    );
}
