import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { Text, FlatList, StyleSheet, View, Button } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Doctor from "../../components/Doctor";
import Search from "../../components/filters/Search";
import { TouchableOpacity } from "react-native";
import { colors } from "../../utils";
import { useDoctor } from "../../context/Doctors";

const docters = [
  {
    id: Math.random(),
    doctorName: "Dr Khalid Mehmood",
    workingDays: "Mon - Fri",
    speciality: "Cardiology",
    rating: 4.5,
    reviews: 332,
    patients: "1K+",
    yearExperience: 10,
  },
  {
    id: Math.random(),
    doctorName: "Dr Islam Shah",
    workingDays: "Tue - Sat",
    speciality: "Dermatology",
    rating: 4.2,
    reviews: 248,
    patients: "800+",
    yearExperience: 8,
  },
  {
    id: Math.random(),
    doctorName: "Dr Mehmoona",
    workingDays: "Mon - Thu",
    speciality: "Pediatrics",
    rating: 4.7,
    reviews: 405,
    patients: "1.2K+",
    yearExperience: 12,
  },
  {
    id: Math.random(),
    doctorName: "Dr Afzal Shan",
    workingDays: "Mon - Fri",
    speciality: "Orthopedics",
    rating: 4.8,
    reviews: 512,
    patients: "1.5K+",
    yearExperience: 15,
  },
  {
    id: Math.random(),
    doctorName: "Dr Waseeq Ahmad",
    workingDays: "Tue - Sat",
    speciality: "Gastroenterology",
    rating: 4.6,
    reviews: 376,
    patients: "1.1K+",
    yearExperience: 11,
  },
  {
    id: Math.random(),
    doctorName: "Dr Noreen",
    workingDays: "Mon - Thu",
    speciality: "Ophthalmology",
    rating: 4.3,
    reviews: 289,
    patients: "900+",
    yearExperience: 9,
  },
];

export default function DoctorList({ navigation }) {
  const { doctors } = useDoctor();
  const [newItems, setNewItems] = useState(docters);

  console.log("These are the doctors: ", doctors);

  const searchDocter = (text) => {
    if (text) {
      const newItems = docters.filter((item) => {
        const itemData = item.title
          ? item.title.toUpperCase()
          : "".toUpperCase();

        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setNewItems(newItems);
    } else {
      setNewItems(docters);
    }
  };

  return (
    <View style={style.container}>
      <TouchableOpacity
        style={{ marginLeft: 10, marginBottom: 10 }}
        onPress={() => navigation.goBack()}
      >
        <Icon name="arrow-left" size={20} color={colors.primaryColor} />
      </TouchableOpacity>

      <Search value="Search Docters" searchDocter={searchDocter} />
      <FlatList
        data={newItems}
        renderItem={({ item }) => <Doctor docter={item} />}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    backgroundColor: "#f4f4f4",
    paddingTop: 50,
  },
});
