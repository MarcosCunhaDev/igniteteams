import { View, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Players } from "@screens/Players";
import { Groups } from "@screens/Groups";
import { NewGroup } from "@screens/NewGroup";

const Stack = createNativeStackNavigator();

export const DefaultStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Players" component={Players} />
      <Stack.Screen name="Groups" component={Groups} />
      <Stack.Screen name="NewGroup" component={NewGroup} />
    </Stack.Navigator>
  );
};
