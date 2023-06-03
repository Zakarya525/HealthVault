import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import React from "react";

import { colors } from "../utils";
import MIcon from "react-native-vector-icons/FontAwesome5";
import { useAuth } from "../context/Authentication";
import { useNavigation } from "@react-navigation/native";

const Profile = () => {
  const { logOut } = useAuth();
  const navigation = useNavigation();

  const handleLogout = () => {
    logOut();
    navigation.navigate("Login");
  };
  return (
    <View>
      <View style={styles.container}>
        <MIcon
          name="hand-holding-medical"
          size={35}
          color={colors.primaryColor}
        />
        <Text style={styles.headingLarge}>Profile</Text>
      </View>

      <View style={styles.profileHeader}>
        <Image
          style={styles.displayPic}
          source={require("../images/dr4.jpg")}
        />
        <Text style={styles.mealTypeText}>John Deo</Text>
        <Text style={styles.mealTypeText}>+92 348 9206631</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleLogout}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  headingLarge: {
    fontSize: 25,
    fontFamily: "Urbanist_700Bold",
    marginTop: 30,
    marginBottom: 20,
    marginStart: 10,
  },

  headingMedium: {
    fontSize: 20,
    fontFamily: "Urbanist_700Bold",
    marginTop: 10,
    marginStart: 10,
    marginBottom: 5,
  },

  card: {
    backgroundColor: "#fff",
    width: 270,
    height: 100,
    marginTop: -80,
    marginStart: 43,
    marginEnd: 30,
    borderRadius: 15,
  },

  innerTextStyle: {
    fontFamily: "Urbanist_700Bold",
    fontSize: 20,
    textAlign: "center",
    marginTop: 30,
  },
  mealTypeView: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 50,
    width: 60,
    height: 60,
  },
  mealTypeText: {
    fontFamily: "Urbanist_700Bold",
    marginTop: 10,
  },
  container: {
    marginTop: 20,
    marginLeft: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  button: {
    width: "80%",
    height: 50,
    borderRadius: 20,
    backgroundColor: colors.primaryColor,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 30,
  },
  buttonText: {
    fontFamily: "Urbanist_600SemiBold",
    color: "white",
    fontSize: 18,
  },
  scrollView: {
    height: 500,
  },
  profileHeader: {
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },

  displayPic: {
    width: 100,
    height: 100,
    borderRadius: 100,
  },
});

export default Profile;
