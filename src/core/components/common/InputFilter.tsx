import { Search } from 'lucide-react-native';
import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';


const SearchInput = () => {
  return (
    <View style={styles.container}>
      {/* Icono de búsqueda */}
      <Search size={24} color="#F59E0B" style={styles.icon} />
      
      {/* Campo de entrada de texto */}
      <TextInput
        style={styles.input}
        placeholder="¡Quédate en un sitio!"
        placeholderTextColor="#F59E0B" // Color naranja del placeholder
        selectionColor="#F59E0B" // Color del cursor
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', // Alinea los elementos horizontalmente
    alignItems: 'center', // Centra verticalmente el icono y el texto
    backgroundColor: '#FEF3E2', // Color de fondo beige claro
    borderRadius: 30, // Bordes muy redondeados para el estilo de "píldora"
    paddingHorizontal: 16, // Espacio horizontal interno
    paddingVertical: 12, // Espacio vertical interno
    margin: 16, // Margen externo (opcional)
  },
  icon: {
    marginRight: 12, // Espacio entre el icono y el texto
  },
  input: {
    flex: 1, // Ocupa todo el espacio restante
    fontSize: 16, // Tamaño de fuente
    color: '#F59E0B', // Color del texto escrito
  },
});

export default SearchInput;