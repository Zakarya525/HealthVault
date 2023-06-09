import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { Text, FlatList, StyleSheet, View, Button } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Docter from "../../components/Docter";
import Search from "../../components/filters/Search";
import { TouchableOpacity } from "react-native";
import { colors } from "../../utils";

const docters = [
  {
    id: Math.random(),
    title: "Dr Khalid Mehmood",
    price: "$79",
    likes: "332",
  },
  {
    id: Math.random(),
    title: "Dr Islam Shah",
    price: "$44",
    likes: "332K",
  },
  {
    id: Math.random(),
    title: "Dr Mehmoona",
    price: "$20",
    likes: "33K",
  },
  {
    id: Math.random(),
    title: "Dr Afzal Shan",
    price: "$3",
    likes: "3K",
  },
  {
    id: Math.random(),
    title: "Dr Waseeq Ahmad",
    price: "$8",
    likes: "32K",
  },
  {
    id: Math.random(),
    title: "Dr Noreen",
    price: "$80",
    likes: "52K",
  },
  {
    id: Math.random(),
    title: "Dr Safder Shan",
    price: "$80",
    likes: "500K",
  },
  {
    id: Math.random(),
    title: "Dr Ahmad",
    price: "$45",
    likes: "3K",
  },
  {
    id: Math.random(),
    title: "Dr Wali Akhter",
    price: "$79",
    likes: "7K",
  },
  {
    id: Math.random(),
    title: "Dr Yasir Mehmood",
    price: "$79",
    likes: "7K",
  },
];
export default function DocterList({ navigation }) {
  const [newItems, setNewItems] = useState(docters);

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
        renderItem={({ item }) => <Docter docter={item} />}
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
