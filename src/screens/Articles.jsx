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
import Docter from "../components/Docter";
import MIcon from "react-native-vector-icons/FontAwesome5";
import { useNavigation } from "@react-navigation/native";
import Article from "../components/Article";
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

const Articles = () => {
  const navigation = useNavigation();
  return (
    <View>
      <View style={styles.container}>
        <MIcon
          name="hand-holding-medical"
          size={35}
          color={colors.primaryColor}
        />
        <Text style={styles.headingLarge}>Articles</Text>
      </View>
      <View style={tw`flex-row justify-between`}>
        <Text style={styles.headingMedium}>Trending</Text>
        <TouchableOpacity onPress={() => navigation.navigate("DocterList")}>
          <Text
            style={{
              color: colors.primaryColor,
              marginTop: 10,
              marginEnd: 10,
              fontFamily: "Urbanist_700Bold",
            }}
          >
            See All
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {articles.map((article) => {
          return (
            <View key={article.id}>
              <Image
                style={tw`w-80 h-48 m-5 rounded-xl`}
                source={require("../images/salt.jpg")}
              />
              <Text style={styles.mealTypeText}>{article.description}</Text>
            </View>
          );
        })}
      </ScrollView>

      <View style={tw`flex-row justify-between`}>
        <Text style={styles.headingMedium}>Articles</Text>
        <TouchableOpacity onPress={() => navigation.navigate("DocterList")}>
          <Text
            style={{
              color: colors.primaryColor,
              marginTop: 10,
              marginEnd: 10,
              fontFamily: "Urbanist_700Bold",
            }}
          >
            See All
          </Text>
        </TouchableOpacity>
      </View>

      <View>
        <ScrollView style={styles.scrollView}>
          {articles.map((docter) => {
            return <Article key={docter.id} docter={docter} />;
          })}
        </ScrollView>
      </View>
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
    marginLeft: 20,
    width: 350,
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
});

export default Articles;
