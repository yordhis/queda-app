import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

type SelectionScreenProps = {
  onSelect?: (type: 'individual' | 'hotel') => void;
};

const SelectionScreen: React.FC<SelectionScreenProps> = ({ onSelect }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register as</Text>
      <TouchableOpacity
        style={styles.optionButton}
        onPress={() => onSelect?.('individual')}
      >
        <Text style={styles.optionText}>Individual</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.optionButton}
        onPress={() => onSelect?.('hotel')}
      >
        <Text style={styles.optionText}>Hotel</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 32,
  },
  optionButton: {
    width: '100%',
    paddingVertical: 16,
    paddingHorizontal: 20,
    marginBottom: 16,
    borderRadius: 10,
    backgroundColor: '#007AFF',
    alignItems: 'center',
  },
  optionText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default SelectionScreen;
