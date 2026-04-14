import { COLORS } from '@/core/constants/theme';
import { Search } from 'lucide-react-native';
import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';


const SearchInput = () => {
  return (
    <View style={styles.container}>
      {/* Icono de búsqueda */}
      <Search style={styles.icon} />
      
      {/* Campo de entrada de texto */}
      <TextInput
        style={styles.input}
        placeholder="¡Busca donde quedarte!"
        placeholderTextColor={COLORS.primary} // Color naranja del placeholder
        selectionColor={COLORS.primary} // Color del cursor
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', // Alinea los elementos horizontalmente
    alignItems: 'center', // Centra verticalmente el icono y el texto
    backgroundColor: COLORS.background, // Color de fondo beige claro
    borderRadius: 30, // Bordes muy redondeados para el estilo de "píldora"
    paddingHorizontal: 16, // Espacio horizontal interno
    paddingVertical: 12, // Espacio vertical interno
    margin: 16, // Margen externo (opcional)
  },
  icon: {
    marginRight: 12, // Espacio entre el icono y el texto
    color: COLORS.primary, // Color del icono de búsqueda
  },
  input: {
    flex: 1, // Ocupa todo el espacio restante
    fontSize: 16, // Tamaño de fuente
    color: COLORS.text, // Color del texto escrito
  },
});

export default SearchInput;