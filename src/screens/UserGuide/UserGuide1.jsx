import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { colors } from "../../utils";
import { PrimaryHeader } from "../../components/Headers";
import BlueCircle from "../../components/BlueCirlces";
import { PrimaryButton } from "../../components/Buttons";
import Pagination from "../../components/Pagination";
import { createStyle } from "./sytle";

const UserGuide1 = () => {
  const navigation = useNavigation();
  const styles = createStyle();
  const onPress = () => {
    navigation.navigate("UserGuide2");
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.header}>
        <BlueCircle />
        <Image style={styles.img} source={require("../../images/dr1.png")} />
      </View>
      <View style={styles.footer}>
        <View style={styles.head}>
          <PrimaryHeader text="Thousands of doctors & experts to help you health!" />
        </View>
        <View style={styles.med}>
          <Pagination count={3} activeIndex={0} />
        </View>
        <View style={styles.foot}>
          <PrimaryButton title="Next" onPress={onPress} />
        </View>
      </View>
    </View>
  );
};

export default UserGuide1;
