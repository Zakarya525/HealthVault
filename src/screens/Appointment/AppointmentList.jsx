import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { Text, FlatList, StyleSheet, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import Search from "../../components/filters/Search";
import { colors, fonts } from "@utils";
import Appointment from "./Appointment";

export default function AppointmentList({ navigation }) {
  const appointments = [];

  const [filteredAppointment, setFilteredAppointment] = useState([]);

  const searchAppointment = (text) => {
    if (text) {
      const newItems = appointments.filter((item) => {
        const itemData =
          `${item.fullName} ${item.speciality} ${item.address}`.toUpperCase();
        const searchData = text.toUpperCase();
        return itemData.indexOf(searchData) > -1;
      });
      setFilteredAppointment(newItems);
    } else {
      setFilteredAppointment(appointments);
    }
  };

  useEffect(() => {
    setFilteredAppointment(appointments);
  }, [appointments]);

  const keyExtractor = (item) => {
    if (item && item._id) {
      return item._id.toString();
    }
    return "";
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon
          name="hand-holding-medical"
          size={35}
          color={colors.primaryColor}
        />
        <Text style={styles.headingLarge}>Appointments</Text>
      </View>

      <Search
        placeHolder="Search Appointment"
        searchAction={searchAppointment}
      />
      {appointments && appointments.length > 0 ? (
        <FlatList
          data={filteredAppointment}
          renderItem={({ item }) => <Appointment appointment={item} />}
          keyExtractor={keyExtractor}
        />
      ) : (
        <View style={styles.noAppointmentsContainer}>
          <Text style={styles.noAppointmentsText}>No appointments found.</Text>
        </View>
      )}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f4f4f4",
    justifyContent: "center",
    alignContent: "center",
  },
  headingLarge: {
    fontSize: 25,
    fontFamily: "Urbanist_700Bold",
    marginTop: 30,
    marginBottom: 20,
    marginStart: 10,
    marginLeft: 10,
  },
  header: {
    marginTop: 20,
    marginLeft: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  noAppointmentsContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  noAppointmentsText: {
    fontSize: 18,
    color: colors.primaryColor,
    fontFamily: fonts.medium,
  },
});
