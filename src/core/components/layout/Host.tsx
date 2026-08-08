import { Host as ExpoHost, UniversalHostProps } from "@expo/ui";

export default function Layout({ children, ...props }: UniversalHostProps) {
  return (
    <ExpoHost seedColor="#e30000" {...props}>
      {children}
    </ExpoHost>
  );
}
