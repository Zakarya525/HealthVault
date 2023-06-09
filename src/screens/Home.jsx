import { Text, View, Image, ScrollView, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import tw from "twrnc";
import Icon from "react-native-vector-icons/FontAwesome";
import uuid from "react-native-uuid";
import { colors } from "../utils";
import Doctor from "../components/Doctor";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../context/Authentication";
import Loader from "../components/Loader/Loader";
import { useDoctor } from "../context/Doctors";

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

const Home = () => {
  const navigation = useNavigation();
  const { user, isLoading } = useAuth();
  const { doctors, isAlert } = useDoctor();
  if (isLoading) return <Loader />;

  return (
    <View>
      <Text style={styles.headingLarge}>Greeting {user.firstName}</Text>

      <Image
        style={tw`w-80 h-48 ml-10 rounded-xl`}
        source={require("../images/banner.jpg")}
      />

      <Text style={styles.headingMedium}>Doctor Speciality</Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {docterSpeciality.map((meal) => {
          return (
            <View
              key={meal.id}
              style={tw`justify-center items-center m-2 shadow-md`}
            >
              <View style={styles.mealTypeView}>
                <Icon name={meal.icon} size={30} color={colors.primaryColor} />
              </View>
              <Text style={styles.mealTypeText}>{meal.name}</Text>
            </View>
          );
        })}
      </ScrollView>

      <View style={tw`flex-row justify-between`}>
        <Text style={styles.headingMedium}>Top Doctors</Text>
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
          {doctors.map((doctor) => {
            return <Doctor key={doctor._id} doctor={doctor} />;
          })}
        </ScrollView>
      </View>
      <StatusBar style="auto" />
    </View>
  );
};

export default Home;
