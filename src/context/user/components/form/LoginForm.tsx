import { handleBackendLogin } from '@/context/auth/services/handleBackendLogin';
import * as Google from 'expo-auth-session/providers/google';
import React, { useEffect } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { COLORS } from '../../../../core/constants/theme';
import { InputCustom } from './Input';

type Props = {
  onClose?: () => void;
};

export const LoginForm = ({ onClose }: Props) => {
  // Dentro de tu componente LoginForm:
  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId: "1024983273314-cokamsd9v57ijsljis3b6b0fatqek405.apps.googleusercontent.com",
    webClientId: "1024983273314-tv9k3og87e7ajf4bnjtsji5ebg6ujd1e.apps.googleusercontent.com",
    // Si usas iOS nativo también agrega iosClientId aquí.
  });

  useEffect(() => {
    console.log(" Respuesta de Google Auth:", response); 
    
    if (response?.type === 'success') {
      const { id_token } = response.params;
      console.log(id_token);
      
      // ENVIAR id_token A TU BACKEND NESTJS
      handleBackendLogin(id_token);
    }
  }, [response]);

  return (
    <View style={[styles.container]}>
      <TouchableOpacity style={styles.closeBtn} onPress={onClose} accessibilityLabel="Cerrar formulario">
        <Text style={styles.closeText}>✕</Text>
      </TouchableOpacity>

      <Text style={[styles.logo]}>¡Bienvenido!</Text>
      <Text style={styles.title}>Inicia sesión</Text>

      <InputCustom placeholder="Email" />
      <InputCustom placeholder="Contraseña" secureTextEntry />

      <TouchableOpacity style={styles.btnMain}>
        <Text style={styles.btnText}>Sign in</Text>
      </TouchableOpacity>

      <Text style={styles.orText}>o inicia con</Text>

      <TouchableOpacity style={styles.btnGoogle} onPress={() => promptAsync()}>
        {/* icono */}
        <Image source={require('assets/images/google-icon.png')} style={{ width: 24, height: 24, marginRight: 10 }} />
        <Text style={[styles.googleText]}>Continuar con Google</Text>
      </TouchableOpacity>

      <View style={styles.footer}>
        <Text style={styles.footerText}>¿No tienes cuenta? </Text>
        <TouchableOpacity onPress={() => console.log('Navigate to register')}>
          <Text style={[styles.footerText, { color: COLORS.primary, fontWeight: '600' }]}>
            Regístrate
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 30,
    alignItems: 'center',
    backgroundColor: COLORS.backgroundSecondary,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  logo: {
    fontSize: 42,
    fontWeight: '900',
    color: COLORS.primary,
    marginBottom: 40,
    fontStyle: 'italic',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: COLORS.primary,
  },
  btnMain: {
    backgroundColor: COLORS.primary,
    width: '100%',
    height: 55,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  btnText: {
    color: COLORS.white,
    fontSize: 18,
    fontWeight: 'bold',
  },
  orText: {
    marginVertical: 20,
    color: COLORS.primary,
    fontSize: 16,
  },
  btnGoogle: {
    backgroundColor: COLORS.secondary,
    width: '100%',
    height: 55,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1,
  },
  googleText: {
    color: COLORS.primary,
    fontSize: 16,
    fontWeight: '600',
    padding: 10,
  },
  footer: {
    flexDirection: 'row',
    marginTop: 30,
  },
  footerText: {
    fontSize: 15,
    color: COLORS.secondary,
  },
  closeBtn: {
    position: 'absolute',
    right: 16,
    top: 16,
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    elevation: 2,
  },
  closeText: {
    fontSize: 18,
    color: COLORS.text,
    fontWeight: '600',
  },
});