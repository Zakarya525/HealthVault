import React from "react";
import { TextInput, SafeAreaView } from "react-native";
import tw from "twrnc";
const Search = ({ value, searchDocter }) => {
  return (
    <SafeAreaView>
      <TextInput
        style={tw`text-base p-2 border m-1 rounded`}
        placeholder={value}
        onChangeText={(text) => searchDocter(text)}
      />
    </SafeAreaView>
  );
};

export default Search;
