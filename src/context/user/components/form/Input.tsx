import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

interface Props {
  placeholder: string;
  secureTextEntry?: boolean;
}

export const InputCustom = ({ placeholder, secureTextEntry }: Props) => {
  return (
    <View style={styles.container}>
      <TextInput 
        placeholder={placeholder} 
        placeholderTextColor="#C68E17"
        secureTextEntry={secureTextEntry}
        style={styles.input}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF5E1',
    borderRadius: 25,
    paddingHorizontal: 20,
    height: 55,
    justifyContent: 'center',
    marginBottom: 15,
    width: '100%',
  },
  input: {
    color: '#C68E17',
    fontSize: 16,
  },
});