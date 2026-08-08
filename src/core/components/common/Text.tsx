import { Text as ExpoText, TextProps } from "@expo/ui";

const Text = ({ children, ...props }: TextProps) => {
  return <ExpoText {...props}>{children}</ExpoText>;
};

export default Text;
