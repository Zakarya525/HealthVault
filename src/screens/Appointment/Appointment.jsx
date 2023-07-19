import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { fonts } from "../../utils";

function convertTo12HourFormat(timeString) {
  let [hours, minutes] = timeString.split(":");

  hours = parseInt(hours);
  minutes = parseInt(minutes);

  let period = "am";

  if (hours >= 12) {
    period = "pm";
    if (hours > 12) {
      hours -= 12;
    }
  }

  if (hours === 0) {
    hours = 12;
  }

  return `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")} ${period}`;
}

function Appointment({ appointment }) {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.nameText}>OPD: {appointment.opd_dep}</Text>
        <View style={styles.likesContainer}>
          <Text style={styles.specialityText}>
            Status: {appointment.status}
          </Text>
          <Text style={styles.dateText}>
            Time: {convertTo12HourFormat(appointment.appointmentTime)}
          </Text>
          <Text style={styles.dateText}>
            Expiray Time:{" "}
            {convertTo12HourFormat(appointment.appointmentExpiryTime)}
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
    height: 100,
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
    fontFamily: fonts.regular,
  },
  specialityText: {
    fontFamily: fonts.regular,
    color: "#666666",
  },
  dateText: {
    fontFamily: fonts.regular,
    color: "#999999",
  },
});
