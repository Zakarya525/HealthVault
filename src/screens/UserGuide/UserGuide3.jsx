import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import BlueCircle from "../../components/BlueCirlces";
import { PrimaryHeader } from "../../components/Headers";
import { PrimaryButton } from "../../components/Buttons";
import { useNavigation } from "@react-navigation/native";
import Pagination from "../../components/Pagination";
import { createStyle } from "./sytle";

const UserGuide3 = () => {
  const navigation = useNavigation();
  const styles = createStyle();
  const onPress = () => {};
  return (
    <View style={styles.mainContainer}>
      <View style={styles.header}>
        <BlueCircle />
        <Image style={styles.img} source={require("../../images/dr2.png")} />
      </View>
      <View style={styles.footer}>
        <PrimaryHeader text="Let's start living healthy and well with us right now!" />
        <Pagination count={3} activeIndex={2} />
        <PrimaryButton title="Get Started" onPress={onPress} />
      </View>
    </View>
  );
};

export default UserGuide3;
