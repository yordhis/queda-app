import { Host as ExpoHost, UniversalHostProps } from "@expo/ui";

const Host = ({ children, ...props }: UniversalHostProps) => {
  return (
    <ExpoHost seedColor="#323dd3" {...props}>
      {children}
    </ExpoHost>
  );
};

export default Host;
