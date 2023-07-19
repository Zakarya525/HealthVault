import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Splash from "../screens/Splash";
import Welcome from "../screens/Welcome";
import DoctorList from "../screens/Doctor/DoctorList";
import DoctorProfile from "../screens/Doctor/DoctorProfile";
import { UserGuide1, UserGuide2, UserGuide3 } from "../screens/UserGuide";
import BottomNavigation from "./BottomNavigation";
import Login from "../screens/Authentication/Login";
import {
  BookAppointment,
  Appointment,
  AppointmentProfile,
} from "../screens/Appointment";
import Loader from "../components/Loader/Loader";
import { OPDList } from "../screens/OPD";
import OPDProfile from "../screens/OPD/OPDProfile";
import ArticleProfile from "../screens/Articles/ArticleProfile";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useGetUserQuery } from "../services/userApi";
import { setUser } from "../store/authSlice";
import { getAuthToken } from "../storage/SecureStore";

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  const { isLoggedIn } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  useEffect(() => {
    console.log("IsLoggedIn Changed to ");
    console.log(isLoggedIn);
  }, [isLoggedIn]);

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {isLoggedIn ? (
        <Stack.Group>
          <Stack.Screen name="BottomNavigation" component={BottomNavigation} />
          <Stack.Screen name="AppointmentScreen" component={Appointment} />
          <Stack.Screen
            name="AppointmentProfile"
            component={AppointmentProfile}
          />
          <Stack.Screen name="DoctorProfile" component={DoctorProfile} />
          <Stack.Screen name="BookAppointment" component={BookAppointment} />
          <Stack.Screen name="DoctorList" component={DoctorList} />
          <Stack.Screen name="OPDList" component={OPDList} />
          <Stack.Screen name="OPDProfile" component={OPDProfile} />
          <Stack.Screen name="ArticleProfile" component={ArticleProfile} />
        </Stack.Group>
      ) : (
        <Stack.Group>
          <Stack.Screen name="Splash" component={Splash} />
          {/* <Stack.Screen name="Welcome" component={Welcome} /> */}
          <Stack.Screen name="Login" component={Login} />
          {/* <Stack.Screen name="UserGuide1" component={UserGuide1} />
          <Stack.Screen name="UserGuide2" component={UserGuide2} />
          <Stack.Screen name="UserGuide3" component={UserGuide3} /> */}
        </Stack.Group>
      )}
    </Stack.Navigator>
  );
};

export default StackNavigation;
