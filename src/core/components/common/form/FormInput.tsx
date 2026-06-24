import React from "react";
import { useController, type UseControllerProps } from "react-hook-form";
import {
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
} from "react-native";
import { COLORS } from "../../../constants/theme";

type FormInputProps = TextInputProps &
  UseControllerProps<any> & {
    label: string;
    multiline?: boolean;
  };

export const FormInput: React.FC<FormInputProps> = ({
  label,
  multiline,
  name,
  ...props
}) => {
  const {
    field,
    fieldState: { error },
  } = useController({ name });
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={[styles.input, multiline && styles.textArea]}
        placeholderTextColor={COLORS.placeholder}
        multiline={multiline}
        onChangeText={field.onChange}
        onBlur={field.onBlur}
        value={field.value}
        ref={field.ref}
        {...props}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { marginBottom: 15 },
  label: {
    color: COLORS.secondary,
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 5,
  },
  input: {
    backgroundColor: COLORS.background,
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 12,
    fontSize: 14,
    color: COLORS.text,
  },
  textArea: { height: 100, textAlignVertical: "top", borderRadius: 15 },
});
