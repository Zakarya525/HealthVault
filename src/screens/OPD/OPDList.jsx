import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { Text, FlatList, StyleSheet, View, Button } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import OPD from "./OPD";
import Search from "../../components/filters/Search";
import { TouchableOpacity } from "react-native";
import { colors } from "../../utils";
import { useOPD } from "../../context/OPD";

export default function OPDList({ navigation }) {
  const { OPDs } = useOPD();
  const [newItems, setNewItems] = useState(OPDs);

  const searchDoctor = (text) => {
    if (text) {
      const newItems = OPDs.filter((item) => {
        const itemData = item.title
          ? item.title.toUpperCase()
          : "".toUpperCase();

        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setNewItems(newItems);
    } else {
      setNewItems(OPDs);
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

      <Search placeHolder="Search OPDs" searchAction={searchDoctor} />
      <FlatList
        data={newItems}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => <OPD opd={item} />}
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
