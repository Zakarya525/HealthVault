import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import tw from "twrnc";
import Icon from "react-native-vector-icons/FontAwesome";
import uuid from "react-native-uuid";
import { colors } from "../utils";
import MIcon from "react-native-vector-icons/FontAwesome5";
import { useNavigation } from "@react-navigation/native";
import Article from "../components/Article";
import { FlatList } from "react-native";

const articles = [
  {
    id: uuid.v4(),
    title:
      "COVID-19 was a Top Cause of Death in 2020 and 2021. Even for Young People",
    description:
      "Adding salt to your food too much may affect your health badly...",
    likes: "332",
  },
  {
    id: uuid.v4(),
    title: "Study Finds Being 'Hungaryy' for is a Real thing",
    description: "Keep your blood pressure in check...",
    likes: "332K",
  },
  {
    id: uuid.v4(),
    title: "Why Childhood obesity Rates are Rising and What are that",
    description: "Control your cholesterol...",
    likes: "33K",
  },
  {
    id: uuid.v4(),
    title: "To Know Something is Best To Spend Something, Do you Know",
    description: "Reduce your blood sugar...",
    likes: "3K",
  },
  {
    id: uuid.v4(),
    title: "Its Going to be Crazy forrrrrr Being Nothing in the Last Time",
    description: "Stay within a healthy weight.",
    likes: "32K",
  },
  {
    id: uuid.v4(),
    title: "Why you are Now Rockinggg With the Best",
    description:
      "Adding salt to your food too much may affect your health badly...",
    likes: "52K",
  },
  {
    id: uuid.v4(),
    title: "Dr Safder Shan",
    description:
      "Adding salt to your food too much may affect your health badly...",
    likes: "500K",
  },
];

const Profile = () => {
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

      <View></View>
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
