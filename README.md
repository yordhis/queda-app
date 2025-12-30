# Queda! 👋
Esta aplicación se hace con el fin de dar solución a los viajero y persona que se reúnen en hoteles con “X” fin y la problemática a solucionar es que los clientes no pierdan el tiempo al ir al lugar y al llegar enterarse de que no hay habitaciones disponibles por eso la app garantizará que el cliente tengan de primera mano la información del hotel si cuenta con habitaciones disponibles.

**Requerimientos de la APP:**

- **Usuario Cliente:**
    - Debe poder buscar hoteles por ubicación y  nombre.
    - Debe permitir filtrar hoteles por los mas cercanos, por categorías (Tipo) y por disponibilidad
    - **Debe permitir Ver el estado de disponibilidad del hotel (verde/rojo) en la tarjeta del hotel.**
    - Debe permitir entrar a la app sin iniciar sesión
    - Debe permitir al usuario calificar el hotel
    - Debe permitir agregar a una lista de favoritos
    - Toda la información de las actividades del usuario en la app deben ser privados y que para ver esas actividades y favoritos deba pasar por una autenticación de huella o clave privada
- **Usuario Hotel:**
    - Debe permitir registrase como hotel
    - Debe permitir cambiar el estatus del hotel
    - Debe permitir subir nuevas imágenes del hotel o actualizarlas
    - Debe permitir editar toda la información del hotel
    - Debe permitir agregar servicios con sus respectivos iconos y descripción breve
    - Debe permitir contactar a servicio al cliente por cual quier incidencia en comentario y calificación
- **Funcionalidad principal:** Mostrar si el hotel está disponible o no.

### Entidades a tomar en cuenta

- Cliente
    - Email - Login
    - Password - Login
    - Nombre
    - Apellidos
    - Teléfono
    - Dirección
    - DNI (Cédula o rif)
    - foto de la cédula (opcional)
    - token_google
- Hoteles
    - Nombre de hotel
    - Dirección de lugar
    - Coordenadas de Google map
    - Rif
    - Numero de teléfono fijo
    - Numero de teléfono celular
    - Cantidad habitación - opcional
    - Estatus de Disponibilidad - Dato interno manejado por el hotel y es obligatorio
    - Eslogan del hotel - esto va en la interfaz
    - Descripción
    - servicios que ofrece el hotel
    - Redes sociales ( Instagram y WhatsApp)

## Tecnologías a usar

### Backend

- Base de datos: MongoDB o Mysql
- Node.js  + fastify u otra tecnología de alta velocidad

### Frontend

React native (Recomendado) o cualquier otra tecnología que permita ejecutarse en iphone y android



# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.
