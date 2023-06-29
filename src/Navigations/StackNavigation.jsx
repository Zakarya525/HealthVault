import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Splash from "../screens/Splash";
import Welcome from "../screens/Welcome";
import DoctorList from "../screens/Doctor/DoctorList";
import DoctorProfile from "../screens/Doctor/DoctorProfile";
import { UserGuide1, UserGuide2, UserGuide3 } from "../screens/UserGuide";
import BottomNavigation from "./BottomNavigation";
import { Login } from "../screens/Authentication";
import { BookAppointment, Appointment } from "../screens/Appointment";
import Loader from "../components/Loader/Loader";
import { useAuth } from "../context/Authentication";
import { OPDList } from "../screens/OPD";
import OPDProfile from "../screens/OPD/OPDProfile";
import ArticleProfile from "../screens/Articles/ArticleProfile";

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  const { isLoading, isLoggedIn } = useAuth();

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
          <Stack.Screen name="OPDList" component={OPDList} />
          <Stack.Screen name="OPDProfile" component={OPDProfile} />
          <Stack.Screen name="ArticleProfile" component={ArticleProfile} />
        </Stack.Group>
      ) : (
        <Stack.Group>
          <Stack.Screen name="Splash" component={Splash} />
          <Stack.Screen name="Welcome" component={Welcome} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="UserGuide1" component={UserGuide1} />
          <Stack.Screen name="UserGuide2" component={UserGuide2} />
          <Stack.Screen name="UserGuide3" component={UserGuide3} />
        </Stack.Group>
      )}
    </Stack.Navigator>
  );
};

export default StackNavigation;
