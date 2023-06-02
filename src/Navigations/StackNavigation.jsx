import { useEffect, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createNavigationContainerRef } from "@react-navigation/native";
import Splash from "../screens/Splash";
import Welcome from "../screens/Welcome";
import DocterList from "../screens/Docter/DocterList";
import DocterProfile from "../screens/Docter/DocterProfile";
import { UserGuide1, UserGuide2, UserGuide3 } from "../screens/UserGuide";
import BottomNavigation from "./BottomNavigation";
import { Login } from "../screens/Authentication";
import { Register } from "../screens/Authentication/Register";
import BookAppointment from "./Appointment/BookAppointment";

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="DocterProfile" component={DocterProfile} />
      <Stack.Screen name="BookAppointment" component={BookAppointment} />
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="UserGuide1" component={UserGuide1} />
      <Stack.Screen name="UserGuide2" component={UserGuide2} />
      <Stack.Screen name="UserGuide3" component={UserGuide3} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />

      <Stack.Screen name="BottomNavigation" component={BottomNavigation} />
      <Stack.Screen name="DocterList" component={DocterList} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
