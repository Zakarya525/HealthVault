import React, { useState } from "react";
import { Text, TextInput, SafeAreaView, StyleSheet } from "react-native";
import tw from "twrnc";
import Icon from "react-native-vector-icons/FontAwesome";
const Search = ({ value, searchFood }) => {
  return (
    <SafeAreaView>
      <TextInput
        style={tw`text-base p-2 border m-1 rounded`}
        placeholder={value}
        onChangeText={(text) => searchFood(text)}
      />
    </SafeAreaView>
  );
};

export default Search;
