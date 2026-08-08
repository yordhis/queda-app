import { handleBackendLogin } from "@/context/auth/services/handleBackendLogin";
import { TextInput } from "@/core/components/common/form/TextInput";
import { FieldGroup } from "@expo/ui";
import * as Google from "expo-auth-session/providers/google";
import { useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";

type Props = {
  onClose?: () => void;
};

export const LoginForm = ({ onClose }: Props) => {
  const form = useForm();

  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId:
      "1024983273314-cokamsd9v57ijsljis3b6b0fatqek405.apps.googleusercontent.com",
    webClientId:
      "1024983273314-tv9k3og87e7ajf4bnjtsji5ebg6ujd1e.apps.googleusercontent.com",
    // Si usas iOS nativo también agrega iosClientId aquí.
  });

  useEffect(() => {
    console.log(" Respuesta de Google Auth:", response);

    if (response?.type === "success") {
      const { id_token } = response.params;
      console.log(id_token);

      // ENVIAR id_token A TU BACKEND NESTJS
      handleBackendLogin(id_token);
    }
  }, [response]);

  return (
    <FormProvider {...form}>
      <FieldGroup>
        <TextInput name="email" placeholder="Email" />
        <TextInput name="password" placeholder="Contraseña" />
      </FieldGroup>
    </FormProvider>
  );
};

//   return (
//     <View style={[styles.container]}>
// const styles = StyleSheet.create({
//   container: {
//     padding: 30,
//     alignItems: "center",
//     // backgroundColor: COLORS.backgroundSecondary,
//     backgroundColor: "red",
//     borderTopLeftRadius: 30,
//     borderTopRightRadius: 30,
//   },
//   logo: {
//     fontSize: 42,
//     fontWeight: "900",
//     color: COLORS.primary,
//     marginBottom: 40,
//     fontStyle: "italic",
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: "bold",
//     marginBottom: 20,
//     color: COLORS.primary,
//   },
//   btnMain: {
//     backgroundColor: COLORS.primary,
//     width: "100%",
//     height: 55,
//     borderRadius: 25,
//     justifyContent: "center",
//     alignItems: "center",
//     marginTop: 10,
//   },
//   btnText: {
//     color: COLORS.white,
//     fontSize: 18,
//     fontWeight: "bold",
//   },
//   orText: {
//     marginVertical: 20,
//     color: COLORS.primary,
//     fontSize: 16,
//   },
//   btnGoogle: {
//     backgroundColor: COLORS.secondary,
//     width: "100%",
//     height: 55,
//     borderRadius: 25,
//     justifyContent: "center",
//     alignItems: "center",
//     flexDirection: "row",
//     flex: 1,
//   },
//   googleText: {
//     color: COLORS.primary,
//     fontSize: 16,
//     fontWeight: "600",
//     padding: 10,
//   },
//   footer: {
//     flexDirection: "row",
//     marginTop: 30,
//   },
//   footerText: {
//     fontSize: 15,
//     color: COLORS.secondary,
//   },
//   closeBtn: {
//     position: "absolute",
//     right: 16,
//     top: 16,
//     width: 36,
//     height: 36,
//     borderRadius: 18,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: COLORS.white,
//     elevation: 2,
//   },
//   closeText: {
//     fontSize: 18,
//     color: COLORS.text,
//     fontWeight: "600",
//   },
// });
