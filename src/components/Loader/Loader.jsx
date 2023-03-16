import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  BallIndicator,
  BarIndicator,
  DotIndicator,
  MaterialIndicator,
  PacmanIndicator,
  PulseIndicator,
  SkypeIndicator,
  UIActivityIndicator,
  WaveIndicator,
} from "react-native-indicators";
import { colors } from "../../utils";

const Loader = () => {
  return (
    <View style={styles.container}>
      <SkypeIndicator color={colors.primaryColor} size={70} />
    </View>
  );
};

export default Loader;

const styles = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: "center",
    marginBottom: 30,
  },
});
