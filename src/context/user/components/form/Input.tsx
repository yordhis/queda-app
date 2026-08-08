import { StyleSheet, TextInput, View } from "react-native";

interface Props {
  placeholder: string;
  secureTextEntry?: boolean;
}

export const InputCustom = ({ placeholder, secureTextEntry }: Props) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={"#000"}
        secureTextEntry={secureTextEntry}
        style={styles.input}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#D1D5DB",
    borderRadius: 25,
    paddingHorizontal: 20,
    height: 55,
    justifyContent: "center",
    marginBottom: 15,
    width: "100%",
  },
  input: {
    color: "#000000",
    fontSize: 16,
  },
});
