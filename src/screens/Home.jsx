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
import { useRoute } from "@react-navigation/native";
const docters = [
  {
    id: uuid.v4(),
    title: "Dr Khalid Mehmood",
    likes: "332",
  },
  {
    id: uuid.v4(),
    title: "Dr Islam Shah",
    likes: "332K",
  },
  {
    id: uuid.v4(),
    title: "Dr Mehmoona",
    likes: "33K",
  },
  {
    id: uuid.v4(),
    title: "Dr Afzal Shan",
    likes: "3K",
  },
  {
    id: uuid.v4(),
    title: "Dr Waseeq Ahmad",
    likes: "32K",
  },
  {
    id: uuid.v4(),
    title: "Dr Noreen",
    likes: "52K",
  },
  {
    id: uuid.v4(),
    title: "Dr Safder Shan",
    likes: "500K",
  },
  {
    id: uuid.v4(),
    title: "Dr Ahmad",
    likes: "3K",
  },
  {
    id: uuid.v4(),
    title: "Dr Wali Akhter",
    likes: "7K",
  },
  {
    id: uuid.v4(),
    title: "Dr Yasir Mehmood",
    likes: "7K",
  },
];

const docterSpeciality = [
  {
    id: uuid.v4(),
    name: "General",
    icon: "users",
  },
  {
    id: uuid.v4(),
    name: "Dentist",
    icon: "tachometer",
  },
  {
    id: uuid.v4(),
    name: "Opthalatical",
    icon: "eye",
  },
  {
    id: uuid.v4(),
    name: "Nutrition",
    icon: "coffee",
  },
  {
    id: uuid.v4(),
    name: "Padiatric",
    icon: "empire",
  },
  {
    id: uuid.v4(),
    name: "Rodoilogical",
    icon: "birthday-cake",
  },
  {
    id: uuid.v4(),
    name: "Cardiologists",
    icon: "life-bouy",
  },
  {
    id: uuid.v4(),
    name: "Dermatologist",
    icon: "life-bouy",
  },
];

const Home = ({ route, navigation }) => {
  const user = route?.params?.user || "Guest";
  return (
    <View>
      <Text style={styles.headingLarge}>Greeting {user.username}</Text>

      <Image
        style={tw`w-80 h-48 ml-10 rounded-xl`}
        source={require("../images/banner.jpg")}
      />

      <Text style={styles.headingMedium}>Docter Speciality</Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {docterSpeciality.map((meal) => {
          return (
            <View style={tw`justify-center items-center m-2 shadow-md`}>
              <View key={meal.icon} style={styles.mealTypeView}>
                <Icon name={meal.icon} size={30} color={colors.primaryColor} />
              </View>
              <Text style={styles.mealTypeText}>{meal.name}</Text>
            </View>
          );
        })}
      </ScrollView>

      <View style={tw`flex-row justify-between`}>
        <Text style={styles.headingMedium}>Top Docters</Text>
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
        <ScrollView style={tw`h-64`}>
          {docters.map((docter) => {
            return <Docter key={docter.title} docter={docter} />;
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
    marginTop: 10,
  },
});

export default Home;
