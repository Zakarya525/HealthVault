import { useEffect, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createNavigationContainerRef } from "@react-navigation/native";
import Splash from "../screens/Splash";
import Welcome from "../screens/Welcome";
import DocterList from "../screens/DocterList";
import { UserGuide1, UserGuide2, UserGuide3 } from "../screens/UserGuide";
import BottomNavigation from "./BottomNavigation";
import { Login } from "../screens/Authentication";
import { Register } from "../screens/Authentication/Register";
import { useQueryClient, useQuery } from "react-query";
import storage from "../storage";

const navigationRef = createNavigationContainerRef();
const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  const [token, setToken] = useState("");
  const queryClient = useQueryClient();

  useEffect(() => {
    const getToken = async () => {
      const token = await storage.get("token");
      if (token) {
        setToken(token);
        queryClient.setQueryData("token", token);
      }
    };

    getToken();
  }, [queryClient]);

  const {
    data: user,
    isLoading,
    error,
  } = useQuery(
    "user",
    async () => {
      const response = await fetch(
        "https://polyclinic-server.chainspair.com/auth/currentuser",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await response.json();
      return data.user;
    },
    {
      enabled: !!token,
    }
  );

  if (isLoading) {
    return <Splash />;
  }

  return (
    <Stack.Navigator
      initialRouteName={token ? "BottomNavigation" : "Splash"}
      screenOptions={{ headerShown: false }}
    >
      {!token ? (
        <>
          <Stack.Screen name="Welcome" component={Welcome} />
          <Stack.Screen name="Splash" component={Splash} />
          <Stack.Screen name="UserGuide1" component={UserGuide1} />
          <Stack.Screen name="UserGuide2" component={UserGuide2} />
          <Stack.Screen name="UserGuide3" component={UserGuide3} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
        </>
      ) : (
        <>
          <Stack.Screen name="BottomNavigation" component={BottomNavigation} />
          <Stack.Screen name="DocterList" component={DocterList} />
        </>
      )}
    </Stack.Navigator>
  );
};

export default StackNavigation;
