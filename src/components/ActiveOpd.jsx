import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useOPD } from "../context/OPD";

const ActiveOpd = () => {
  const { activeOPD, OPDS } = useOPD();

  return (
    <View>
      <Text>Display OPD here</Text>
    </View>
  );
};

export default ActiveOpd;

const styles = StyleSheet.create({});
