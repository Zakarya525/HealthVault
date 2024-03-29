import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigation from "./src/Navigations/StackNavigation.jsx";
import { useFonts } from "expo-font";
import {
  Urbanist_400Regular,
  Urbanist_500Medium,
  Urbanist_600SemiBold,
  Urbanist_700Bold,
} from "@expo-google-fonts/urbanist";
import * as SplashScreen from "expo-splash-screen";
import { AuthProvider } from "./src/context/Authentication";
import { AppProvider } from "./src/context/Appointments";
import { DoctorProvider } from "./src/context/Doctors/DoctorProvider.jsx";
import { OpdProvider } from "./src/context/OPD/OpdProvider.jsx";

export default function App() {
  let [fontsLoaded] = useFonts({
    Urbanist_400Regular,
    Urbanist_500Medium,
    Urbanist_600SemiBold,
    Urbanist_700Bold,
  });

  useEffect(() => {
    async function prapare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prapare();
  }, []);

  if (!fontsLoaded) return undefined;

  SplashScreen.hideAsync();

  return (
    <AuthProvider>
      <AppProvider>
        <DoctorProvider>
          <OpdProvider>
            <NavigationContainer>
              <StackNavigation />
            </NavigationContainer>
          </OpdProvider>
        </DoctorProvider>
      </AppProvider>
    </AuthProvider>
  );
}
