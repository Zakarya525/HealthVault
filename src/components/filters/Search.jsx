import React from "react";
import { TextInput, View, StyleSheet } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import { colors } from "../../utils";

const Search = ({ value, searchDocter }) => {
  return (
    <View style={styles.container}>
      <AntDesign
        name="search1"
        size={20}
        color={colors.gray}
        style={styles.icon}
      />
      <TextInput
        style={styles.input}
        placeholder={value}
        placeholderTextColor={colors.gray}
        onChangeText={(text) => searchDocter(text)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.lightGray,
    borderRadius: 10,
    paddingHorizontal: 10,
    margin: 12,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: colors.black,
    paddingVertical: 10,
  },
});

export default Search;
