import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { Text, FlatList, StyleSheet, View, Button } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import OPD from "./OPD";
import Search from "../../components/filters/Search";
import { TouchableOpacity } from "react-native";
import { colors } from "../../utils";
import { useGetActiveOpdsQuery } from "../../services/opdApi";

export default function OPDList({ navigation }) {
  const { data, isSuccess, isLoading } = useGetActiveOpdsQuery();
  const [newItems, setNewItems] = useState(data);

  const searchOPD = (text) => {
    if (text) {
      const newItems = data.filter((item) => {
        const itemData = item ? item.toUpperCase() : "".toUpperCase();

        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setNewItems(newItems);
    } else {
      setNewItems(data);
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

      <Search placeHolder="Search OPDs" searchAction={searchOPD} />
      <FlatList
        data={newItems}
        keyExtractor={(item) => item}
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
