import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/navigation";

const Stack = createNativeStackNavigator<RootStackParamList>();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
    </NavigationContainer>

      //<Stack.Navigator initialRouteName="Home">
        // <Stack.Screen name="Home" component={Home} />
        // <Stack.Screen name="About" component={AboutScreen} />
      //</Stack.Navigator>

  );
};

export default Routes;
