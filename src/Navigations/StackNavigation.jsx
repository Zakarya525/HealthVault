import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Splash from "../screens/Splash";
import Welcome from "../screens/Welcome";
import DocterList from "../screens/DocterList";
import { UserGuide1, UserGuide2, UserGuide3 } from "../screens/UserGuide";
import BottomNavigation from "./BottomNavigation";
import { Login } from "../screens/Authentication";

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="Slash"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="UserGuide1" component={UserGuide1} />
      <Stack.Screen name="UserGuide2" component={UserGuide2} />
      <Stack.Screen name="UserGuide3" component={UserGuide3} />
      <Stack.Screen name="DocterList" component={DocterList} />
      <Stack.Screen name="Login" component={Login} />

      <Stack.Screen name="Home" component={BottomNavigation} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
