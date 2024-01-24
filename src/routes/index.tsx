import { NavigationContainer } from "@react-navigation/native";
import { AppRoutes } from "./app.routes";
import { SafeAreaProvider } from "react-native-safe-area-context";

export const Routes = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};
