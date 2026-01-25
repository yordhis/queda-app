// src/components/common/Button.tsx
import { Text, TouchableOpacity } from 'react-native';

interface Props {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'outline';
  disabled?: boolean;
}

export const Button = ({ title, onPress, variant = 'primary', disabled = false }: Props) => {
  const containerStyle = variant === 'primary' 
    ? "bg-amber-500 shadow-orange-200" 
    : "bg-orange-50 border border-amber-200";
  
  const textStyle = variant === 'primary' ? "text-white" : "text-amber-600";

  const disabledStyle = disabled ? 'opacity-50' : 'active:opacity-80';

  return (
    <TouchableOpacity 
      onPress={() => { if (!disabled) onPress(); }}
      accessible
      accessibilityRole="button"
      accessibilityState={{ disabled }}
      className={`${containerStyle} py-4 px-12 rounded-full shadow-lg ${disabledStyle}`}
    >
      <Text className={`${textStyle} text-center font-bold text-lg`}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};