import {
  Button,
  Column,
  FieldGroup,
  Host,
  Row,
  Text,
  TextInput,
} from "@expo/ui";
import { Link } from "expo-router";
import { useState } from "react";

const SignUp = () => {
  console.log("SignUp");

  const [isPresented, setIsPresented] = useState(false);
  return (
    <Host style={{ flex: 1 }}>
      <Column spacing={8} alignment="center">
        <FieldGroup>
          <FieldGroup.Section title="Crea tu cuenta">
            <TextInput
              placeholder="Email"
              onChangeText={(value) => console.log(value)}
            />
            <TextInput
              placeholder="Contraseña"
              onChangeText={(value) => console.log(value)}
            />
            <TextInput
              placeholder="Confirma tu contraseña"
              onChangeText={(value) => console.log(value)}
            />
          </FieldGroup.Section>
        </FieldGroup>
        <Button label="Iniciar sesión" />
        <Text>o inicia con</Text>
        <Button label="Continuar con Google" variant="text" />
        <Row>
          <Text>¿Tienes una cuenta?</Text>
          <Link href="/(tabs)/home">Inicia sesión</Link>
        </Row>
      </Column>
    </Host>
  );
};

export default SignUp;
