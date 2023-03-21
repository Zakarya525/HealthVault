import { StyleSheet, Text, View, Image } from "react-native";
import React, { useState } from "react";
import BlueCircle from "../../components/BlueCirlces";
import { useNavigation } from "@react-navigation/native";
import { PrimaryHeader } from "../../components/Headers";
import { PrimaryButton } from "../../components/Buttons";
import Pagination from "../../components/Pagination";
import { createStyle } from "./sytle";
import Loader from "../../components/Loader/Loader";

const UserGuide2 = () => {
  const navigation = useNavigation();
  const styles = createStyle();
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 1000);
  const onPress = () => {
    navigation.navigate("UserGuide3");
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
          <PrimaryHeader text="Health checks & consultation easily anywhere anytime! " />
        </View>
        <View style={styles.med}>
          <Pagination count={3} activeIndex={1} />
        </View>
        <View style={styles.foot}>
          <PrimaryButton title="Next" onPress={onPress} />
        </View>
      </View>
    </View>
  );
};

export default UserGuide2;
