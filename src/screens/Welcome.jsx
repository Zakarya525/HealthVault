import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { PrimaryHeader } from "../components/Headers";
import { colors, fontSizes, spacing } from "../utils";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";

const Welcome = () => {
  const navigation = useNavigation();

  setTimeout(() => {
    navigation.replace("UserGuide1");
  }, 3000);

  return (
    <View style={styles.container}>
      <Image
        testID="img"
        style={styles.img}
        source={require("../images/wcScreen.png")}
      />
      <PrimaryHeader text="Welcome to HealthVault!"></PrimaryHeader>
      <Text testID="welcome" style={styles.text}>
        The best online doctor appointment & consultation app of the century for
        your health and medical needs!
      </Text>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },

  text: {
    fontFamily: "Urbanist_400Regular",
    textAlign: "center",
    fontSize: fontSizes.md,
    margin: spacing.lg,
  },
});
