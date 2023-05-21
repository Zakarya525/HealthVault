import React, { useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { colors } from "../../utils";
import { PrimaryHeader } from "../../components/Headers";
import BlueCircle from "../../components/BlueCirlces";
import { PrimaryButton } from "../../components/Buttons";
import Pagination from "../../components/Pagination";
import { createStyle } from "./sytle";
import Loader from "../../components/Loader/Loader.jsx";

const UserGuide1 = () => {
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();
  const styles = createStyle();

  setTimeout(() => {
    setLoading(false);
  }, 500);

  const onPress = () => {
    navigation.navigate("UserGuide2");
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.header}>
        <BlueCircle />
        {loading ? (
          <Loader />
        ) : (
          <Image style={styles.img} source={require("../../images/dr2.png")} />
        )}
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
