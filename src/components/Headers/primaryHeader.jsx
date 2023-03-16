import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors, fontSizes, spacing } from "../../utils";

const PrimaryHeader = ({ text }) => {
  return (
    <View>
      <Text style={styles.primaryHeader}>{text}</Text>
    </View>
  );
};
export default PrimaryHeader;

const styles = StyleSheet.create({
  primaryHeader: {
    fontSize: fontSizes.xl,
    fontFamily: "Urbanist_700Bold",
    color: colors.primaryColor,
    textAlign: "center",
    marginTop: spacing.xxl,
    paddingHorizontal: spacing.lg,
  },
});
