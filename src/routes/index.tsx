import { NavigationContainer } from "@react-navigation/native";
import { AppRoutes } from "./app.routes";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { View } from "react-native";
import { useTheme } from "styled-components/native";

export const Routes = () => {
  const theme = useTheme();
  return (
    <View style={{ flex: 1, backgroundColor: theme.colors.gray_600 }}>
      <SafeAreaProvider>
        <NavigationContainer>
          <AppRoutes />
        </NavigationContainer>
      </SafeAreaProvider>
    </View>
  );
};
