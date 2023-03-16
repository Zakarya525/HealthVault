import { StyleSheet, Text } from "react-native";
import { fontSizes } from "../../utils";

import React from "react";

const Header = ({ text }) => {
  return <Text style={styles.text}>{text}</Text>;
};

export default Header;

const styles = StyleSheet.create({
  text: {
    fontFamily: "Urbanist_700Bold",
    fontSize: fontSizes.xxl,
  },
});
