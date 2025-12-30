import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Alert, KeyboardAvoidingView, Platform, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const re = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    if (!re.test(email)) {
      Alert.alert('Email inválido', 'Introduce un correo electrónico válido.');
      return false;
    }
    if (password.length < 6) {
      Alert.alert('Contraseña', 'La contraseña debe tener al menos 6 caracteres.');
      return false;
    }
    return true;
  };

  const onSubmit = () => {
    if (!validate()) return;
    setLoading(true);
    // Mock auth: simulate server delay
    setTimeout(() => {
      setLoading(false);
      // Here you would call your backend. For now we accept any valid creds.
      router.replace('/');
    }, 800);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={styles.container}
    >
      <View style={styles.card}>
        <Text style={styles.title}>Bienvenido</Text>
        <Text style={styles.subtitle}>Inicia sesión para continuar</Text>

        <TextInput
          style={styles.input}
          placeholder="Correo electrónico"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
          accessible
          accessibilityLabel="Correo electrónico"
          placeholderTextColor="#999"
        />

        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          accessible
          accessibilityLabel="Contraseña"
          placeholderTextColor="#999"
        />

        <Pressable
          onPress={onSubmit}
          style={[styles.button, loading ? styles.buttonDisabled : null]}
          accessibilityRole="button"
        >
          <Text style={styles.buttonText}>{loading ? 'Ingresando...' : 'Ingresar'}</Text>
        </Pressable>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f6f7fb',
    padding: 24,
  },
  card: {
    width: '100%',
    maxWidth: 420,
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.06,
    shadowRadius: 12,
    elevation: 6,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 16,
  },
  input: {
    height: 48,
    borderWidth: 1,
    borderColor: '#e6e6ef',
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 12,
    fontSize: 16,
    color: '#111',
    backgroundColor: '#fff',
  },
  button: {
    height: 48,
    borderRadius: 8,
    backgroundColor: '#0a84ff',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
  },
  buttonDisabled: {
    opacity: 0.7,
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 16,
  },
});
