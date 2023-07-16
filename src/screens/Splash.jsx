import { StyleSheet, View } from "react-native";
import { Header } from "../components/Headers";
import Loader from "../components/Loader/Loader";
import Icon from "react-native-vector-icons/FontAwesome5";
import { useNavigation } from "@react-navigation/native";

const Splash = () => {
  const navigation = useNavigation();

  // setTimeout(() => {
  //   navigation.navigate("Welcome");
  // }, 3000);

  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <Icon
          style={styles.icon}
          name="hand-holding-medical"
          size={35}
          color="#fff"
          testID="icon"
        />
        <Header text="HealthVault" />
      </View>
      <Loader />
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  container: {
    flex: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  icon: {
    verticalAlign: "middle",
    paddingHorizontal: 15,
    width: 70,
    height: 70,
    marginRight: 15,
    borderRadius: 50,
    backgroundColor: "#246BFD",
  },
});
