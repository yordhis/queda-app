
import { COLORS } from '@/core/constants/theme';
import { Stack } from 'expo-router';

export default function AuthLayout() {
  return (
    <Stack
      screenOptions={{
        // Estilo global para las pantallas de login/registro
        headerStyle: { backgroundColor: COLORS.primary },
        headerTintColor: COLORS.secondary,
        headerTitleStyle: { fontWeight: 'bold' },
      }}
    >
    </Stack>
  );
}
