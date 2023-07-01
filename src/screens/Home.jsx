import {
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import tw from "twrnc";
import Icon from "react-native-vector-icons/FontAwesome";
import uuid from "react-native-uuid";
import { colors } from "@utils";
import Doctor from "@components/Doctor";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "@context/Authentication";
import Loader from "@components/Loader/Loader";
import { useDoctor } from "@context/Doctors";
import { useOPD } from "../context/OPD";
import { OPD } from "./OPD";

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
  const { doctors } = useDoctor();
  const { activeOPD } = useOPD();

  if (isLoading) return <Loader />;
  console.log("The length of OPDS ", activeOPD);
  console.log("The length of Doctors ", doctors.length);

  const renderOPDItem = ({ item }) => <OPD key={item._id} opd={item} />;
  const renderDoctorItem = ({ item }) => (
    <Doctor key={item._id} doctor={item} />
  );

  return (
    <FlatList
      style={tw`flex-1`}
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={
        <>
          <Text style={styles.headingLarge}>Greeting {user.firstName}</Text>
          <View>
            <Image
              source={require("../images/banner.jpg")}
              style={tw`w-80 h-48 ml-10 rounded-xl`}
            />
          </View>

          <Text style={styles.headingMedium}>Doctor's Speciality</Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {docterSpeciality.map((meal) => {
              return (
                <View
                  key={meal.id}
                  style={tw`justify-center items-center m-2 shadow-md`}
                >
                  <View style={styles.mealTypeView}>
                    <Icon
                      name={meal.icon}
                      size={30}
                      color={colors.primaryColor}
                    />
                  </View>
                  <Text style={styles.mealTypeText}>{meal.name}</Text>
                </View>
              );
            })}
          </ScrollView>

          <View>
            <View style={tw`flex-row justify-between`}>
              <Text style={styles.headingMedium}>Active OPDs</Text>
              <TouchableOpacity onPress={() => navigation.navigate("OPDList")}>
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
            {activeOPD.length > 0 ? (
              <FlatList
                data={activeOPD}
                renderItem={renderOPDItem}
                keyExtractor={(item) => item._id}
                showsVerticalScrollIndicator={false}
              />
            ) : (
              <Text>No active OPDs available</Text>
            )}
          </View>

          <View style={tw`flex-row justify-between`}>
            <Text style={styles.headingMedium}>Top Doctors</Text>
            <TouchableOpacity onPress={() => navigation.navigate("DoctorList")}>
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
        </>
      }
      data={doctors.slice(0, 2)}
      renderItem={renderDoctorItem}
      keyExtractor={(item) => item._id}
      ListFooterComponent={<StatusBar style="auto" />}
    />
  );
};

export default Home;
