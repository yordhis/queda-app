import { useRouter } from 'expo-router';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function NotFound() {
	const router = useRouter();

	return (
		<View style={styles.container}>
			<Text accessibilityRole="header" style={styles.title}>Página no encontrada</Text>
			<Text style={styles.subtitle}>La ruta a la que intentaste acceder no existe.</Text>

			<Pressable
				onPress={() => router.replace('/')}
				accessibilityRole="button"
				accessibilityLabel="Volver al inicio"
				style={({ pressed }) => [styles.button, pressed ? styles.buttonPressed : null]}
			>
				<Text style={styles.buttonText}>Volver al inicio</Text>
			</Pressable>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		padding: 24,
		backgroundColor: '#fff'
	},
	title: {
		fontSize: 24,
		fontWeight: '700',
		marginBottom: 8,
		color: '#111'
	},
	subtitle: {
		fontSize: 16,
		color: '#666',
		marginBottom: 24,
		textAlign: 'center'
	},
	button: {
		backgroundColor: '#0a84ff',
		paddingVertical: 12,
		paddingHorizontal: 20,
		borderRadius: 8,
	},
	buttonPressed: {
		opacity: 0.85
	},
	buttonText: {
		color: '#fff',
		fontWeight: '600',
		fontSize: 16
	}
});

