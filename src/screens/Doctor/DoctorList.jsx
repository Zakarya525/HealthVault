import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { Text, FlatList, StyleSheet, View, Button } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Doctor from "../../components/Doctor";
import Search from "../../components/filters/Search";
import { TouchableOpacity } from "react-native";
import { colors } from "../../utils";
import { useDoctor } from "../../context/Doctors";

export default function DoctorList({ navigation }) {
  const { doctors } = useDoctor();
  const [newItems, setNewItems] = useState(doctors);

  const searchDoctor = (text) => {
    if (text) {
      const newItems = doctors.filter((item) => {
        const itemData = item.title
          ? item.title.toUpperCase()
          : "".toUpperCase();

        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setNewItems(newItems);
    } else {
      setNewItems(doctors);
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

      <Search placeHolder="Search Doctors" searchAction={searchDoctor} />
      <FlatList
        data={newItems}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => <Doctor doctor={item} />}
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
