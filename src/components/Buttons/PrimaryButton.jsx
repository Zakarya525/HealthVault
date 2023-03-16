import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { colors } from "../../utils";
import { useNavigation } from "@react-navigation/native";

const PrimaryButton = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primaryColor,
    alignItems: "center",
    justifyContent: "center",
    width: 320,
    height: 50,
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 25,
    elevation: 6,
  },
  buttonText: {
    color: "white",
    fontFamily: "Urbanist_600SemiBold",
    fontSize: 16,
  },
});

export default PrimaryButton;
