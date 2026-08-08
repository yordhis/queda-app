import {
  TextInput as ExpoTextInput,
  TextInputProps,
  useNativeState,
} from "@expo/ui";
import React, { useCallback } from "react";
import { useController, type UseControllerProps } from "react-hook-form";
import { StyleSheet } from "react-native";
import { COLORS } from "../../../constants/theme";

type FormInputProps = TextInputProps &
  UseControllerProps<any> & {
    multiline?: boolean;
  };

export const TextInput: React.FC<FormInputProps> = ({
  multiline,
  name,
  ...props
}) => {
  const {
    field,
    fieldState: { error },
  } = useController({ name });

  const text = useNativeState("");

  const handleChangeText = useCallback(
    (value: string) => {
      "worklet";
      text.value = value;
    },
    [text],
  );

  return (
    <ExpoTextInput
      placeholderTextColor={COLORS.placeholder}
      value={text}
      multiline={multiline}
      onChangeText={handleChangeText}
      {...props}
    />
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
