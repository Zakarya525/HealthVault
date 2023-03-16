import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Splash from "../screens/Splash";
import Welcome from "../screens/Welcome";
import { UserGuide1, UserGuide2, UserGuide3 } from "../screens/UserGuide";

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="Slash">
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="UserGuide1"
        component={UserGuide1}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="UserGuide2"
        component={UserGuide2}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="UserGuide3"
        component={UserGuide3}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigation;
