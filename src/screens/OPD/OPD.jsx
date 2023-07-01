import { useNavigation } from "@react-navigation/native";
import React from "react";
import { useOPD } from "@context/OPD";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

function OPD({ opd }) {
  const navigation = useNavigation();
  const { getOpdById } = useOPD();
  const date = new Date(opd.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  });

  const nextOPDTime = new Date(opd.expectedTimeToNext).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    }
  );
  const handleClick = () => {
    getOpdById(opd._id);
    navigation.navigate("OPDProfile");
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handleClick}>
      <View style={styles.contentContainer}>
        <Text style={styles.nameText}>{date}</Text>

        <Text style={styles.specialityText}>Next OPD: {nextOPDTime}</Text>

        <Text style={styles.specialityText}>Last Token: {opd.lastToken}</Text>
        <Text style={styles.specialityText}>Status: {opd.status}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default OPD;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    height: 120,
    marginBottom: 12,
    marginRight: 12,
    marginLeft: 12,
    borderRadius: 8,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  contentContainer: {
    justifyContent: "center",
    padding: 12,
  },
  nameText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  specialityText: {
    fontSize: 16,
    color: "#666666",
  },
});
