import { useMaterialColors } from "@expo/ui/jetpack-compose";

const useColors = () => {
  const colors = useMaterialColors({
    seedColor: "#e30000",
  });

  return colors;
};

export default useColors;
