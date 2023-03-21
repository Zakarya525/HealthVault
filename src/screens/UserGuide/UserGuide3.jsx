import { StyleSheet, Text, View, Image } from "react-native";
import React, { useState } from "react";
import BlueCircle from "../../components/BlueCirlces";
import { PrimaryHeader } from "../../components/Headers";
import { PrimaryButton } from "../../components/Buttons";
import { useNavigation } from "@react-navigation/native";
import Pagination from "../../components/Pagination";
import { createStyle } from "./sytle";
import Loader from "../../components/Loader/Loader";

const UserGuide3 = () => {
  const navigation = useNavigation();
  const styles = createStyle();
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 1000);
  const onPress = () => {};
  return (
    <View style={styles.mainContainer}>
      <View style={styles.header}>
        <BlueCircle />
        {loading ? (
          <Loader />
        ) : (
          <Image style={styles.img2} source={require("../../images/dr3.png")} />
        )}
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
