import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import React from "react";

import { colors } from "../utils";
import MIcon from "react-native-vector-icons/FontAwesome5";
import { useAuth } from "../context/Authentication";
import { useNavigation } from "@react-navigation/native";

const Profile = () => {
  const { logOut, user } = useAuth();
  const navigation = useNavigation();

  const handleLogout = () => {
    logOut();
    navigation.navigate("Login");
  };

  const renderUserData = () => {
    const userData = [
      { label: "Address", icon: "home", value: user.address },
      { label: "City", icon: "map-marker-alt", value: user.city },
      { label: "CNIC", icon: "id-card", value: user.cnic },
      { label: "Email", icon: "envelope", value: user.email },
      { label: "Mobile", icon: "phone", value: user.mobile },
    ];

    return userData.map((item, index) => (
      <View style={styles.userDataContainer} key={index}>
        <MIcon name={item.icon} size={20} color={colors.primaryColor} />
        <View style={styles.userDataTextContainer}>
          <Text style={styles.userDataLabel}>{item.label}</Text>
          <Text style={styles.userDataValue}>{item.value}</Text>
        </View>
      </View>
    ));
  };

  return (
    <View styles={styles.mainContainer}>
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
        <Text
          style={styles.nameText}
        >{`${user.firstName} ${user.lastName}`}</Text>
      </View>

      {renderUserData()}

      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <MIcon name="sign-out-alt" size={20} color="red" />
        <Text style={styles.logoutButtonText}>Logout</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  headingLarge: {
    fontSize: 25,
    fontFamily: "Urbanist_700Bold",
    marginTop: 30,
    marginBottom: 20,
    marginStart: 10,
    marginLeft: 10,
  },
  nameText: {
    fontFamily: "Urbanist_700Bold",
    fontSize: 20,
    margin: 10,
  },
  userDataContainer: {
    flexDirection: "row",
    alignItems: "center",
    alignContent: "center",
    marginVertical: 10,
    marginHorizontal: 20,
  },
  userDataTextContainer: {
    marginLeft: 10,
  },
  userDataLabel: {
    fontFamily: "Urbanist_700Bold",
    fontSize: 16,
  },
  userDataValue: {
    fontFamily: "Urbanist_400Regular",
    fontSize: 14,
  },
  container: {
    marginTop: 20,
    marginLeft: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  logoutButton: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    marginStart: 20,
  },
  logoutButtonText: {
    fontFamily: "Urbanist_400Regular",
    color: "red",
    fontSize: 16,
    marginLeft: 10,
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
