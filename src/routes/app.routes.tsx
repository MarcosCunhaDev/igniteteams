import { View, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Players } from "@screens/Players";
import { Groups } from "@screens/Groups";
import { NewGroup } from "@screens/NewGroup";

const { Navigator, Screen } = createNativeStackNavigator();

export const AppRoutes = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="groups" component={Groups} />
      <Screen name="new" component={NewGroup} />
      <Screen name="players" component={Players} />
    </Navigator>
  );
};
