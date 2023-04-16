import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { Text, FlatList, StyleSheet, View, Button } from "react-native";
import uuid from "react-native-uuid";
import Docter from "../components/Docter";
import Search from "../components/filters/Search";

const docters = [
  {
    id: uuid.v4(),
    title: "Dr Khalid Mehmood",
    price: "$79",
    likes: "332",
  },
  {
    id: uuid.v4(),
    title: "Dr Islam Shah",
    price: "$44",
    likes: "332K",
  },
  {
    id: uuid.v4(),
    title: "Dr Mehmoona",
    price: "$20",
    likes: "33K",
  },
  {
    id: uuid.v4(),
    title: "Dr Afzal Shan",
    price: "$3",
    likes: "3K",
  },
  {
    id: uuid.v4(),
    title: "Dr Waseeq Ahmad",
    price: "$8",
    likes: "32K",
  },
  {
    id: uuid.v4(),
    title: "Dr Noreen",
    price: "$80",
    likes: "52K",
  },
  {
    id: uuid.v4(),
    title: "Dr Safder Shan",
    price: "$80",
    likes: "500K",
  },
  {
    id: uuid.v4(),
    title: "Dr Ahmad",
    price: "$45",
    likes: "3K",
  },
  {
    id: uuid.v4(),
    title: "Dr Wali Akhter",
    price: "$79",
    likes: "7K",
  },
  {
    id: uuid.v4(),
    title: "Dr Yasir Mehmood",
    price: "$79",
    likes: "7K",
  },
];
export default function DocterList() {
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
      <Search value="Search Docters" searchDocter={searchDocter} />
      <FlatList
        data={newItems}
        renderItem={({ item }) => <Docter item={item} />}
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
