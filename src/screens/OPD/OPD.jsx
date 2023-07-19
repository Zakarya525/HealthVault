import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import { setSelectedOpd } from "../../store/opdSlice";

function OPD({ opd }) {
  const navigation = useNavigation();

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setSelectedOpd(opd));
    navigation.navigate("OPDProfile");
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handleClick}>
      <View style={styles.contentContainer}>
        <Text style={styles.nameText}>{opd}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default OPD;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    height: 100,
    marginBottom: 12,
    marginRight: 12,
    marginLeft: 12,
    borderRadius: 8,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  contentContainer: {
    justifyContent: "center",
    padding: 12,
  },
  nameText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  specialityText: {
    fontSize: 16,
    color: "#666666",
  },
});
