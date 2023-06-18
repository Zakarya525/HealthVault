import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Splash from "../screens/Splash";
import Welcome from "../screens/Welcome";
import DoctorList from "../screens/Doctor/DoctorList";
import DoctorProfile from "../screens/Doctor/DoctorProfile";
import { UserGuide1, UserGuide2, UserGuide3 } from "../screens/UserGuide";
import BottomNavigation from "./BottomNavigation";
import { Login } from "../screens/Authentication";
import { Register } from "../screens/Authentication/Register";
import BookAppointment from "./Appointment/BookAppointment";
import Loader from "../components/Loader/Loader";
import { useAuth } from "../context/Authentication";
import Appointment from "./Appointment/Appointment";

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  const { isLoading, isLoggedIn } = useAuth();
  console.log(isLoggedIn);
  if (isLoading) return <Loader />;
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {isLoggedIn ? (
        <Stack.Group>
          <Stack.Screen name="BottomNavigation" component={BottomNavigation} />
          <Stack.Screen name="BookAppointment" component={BookAppointment} />
          <Stack.Screen name="AppointmentScreen" component={Appointment} />
          <Stack.Screen name="DoctorProfile" component={DoctorProfile} />
          <Stack.Screen name="DoctorList" component={DoctorList} />
        </Stack.Group>
      ) : (
        <Stack.Group>
          <Stack.Screen name="Splash" component={Splash} />
          <Stack.Screen name="Welcome" component={Welcome} />
          <Stack.Screen name="UserGuide1" component={UserGuide1} />
          <Stack.Screen name="UserGuide2" component={UserGuide2} />
          <Stack.Screen name="UserGuide3" component={UserGuide3} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
        </Stack.Group>
      )}
    </Stack.Navigator>
  );
};

export default StackNavigation;
