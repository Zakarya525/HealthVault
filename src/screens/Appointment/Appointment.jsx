import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useDoctor } from "@context/Doctors";

function Appointment({ appointment }) {
  const navigation = useNavigation();
  const handleClick = () => {
    navigation.navigate("AppointmentProfile", { appointment: appointment });
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handleClick}>
      <View style={styles.contentContainer}>
        <Text style={styles.nameText}>Patient ID: {appointment.patientId}</Text>
        <View style={styles.likesContainer}>
          <Text style={styles.specialityText}>
            Status: {appointment.status}
          </Text>
          <Text style={styles.dateText}>
            From: {new Date(appointment.fromTime).toLocaleString()}
          </Text>
          <Text style={styles.dateText}>
            To: {new Date(appointment.toTime).toLocaleString()}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default Appointment;

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
  image: {
    width: 120,
    height: 120,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    marginRight: 8,
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
  dateText: {
    fontSize: 14,
    color: "#999999",
  },
});
