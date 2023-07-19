import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { Text, FlatList, StyleSheet, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import Search from "../../components/filters/Search";
import { colors, fonts } from "@utils";
import Appointment from "./Appointment";
import Loader from "../../components/Loader/Loader";
import { useGetAppointmentsQuery } from "../../services/appointmentApi";
import axios from "axios";
import { getAuthToken } from "../../storage/SecureStore";
import { useSelector } from "react-redux";
import { isLoading } from "expo-font";

export default function AppointmentList({ navigation }) {
  // const { data, isSuccess, isLoading } = useGetAppointmentsQuery();
  const appointments = useGetAppointmentsQuery();
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

  const auth = useSelector((state) => state.auth);

  const addAppointment = useSelector(
    (state) => state.appointment.addAppointment
  );

  useEffect(() => {
    if (addAppointment) {
      appointments.refetch();
      // console.log("Refetching appointment");
      // console.log("Add appointment value ", addAppointment);
      // console.log(
      //   "=============================Data========================\n\n"
      // );
      // console.log(appointments.data);
    }
  }, [addAppointment]);

  useEffect(() => {}, []);

  if (appointments.isLoading) {
    return <Loader />;
  }
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
      {appointments.data && appointments.data.length > 0 ? (
        <FlatList
          data={appointments?.data}
          renderItem={({ item }) => <Appointment appointment={item} />}
          keyExtractor={(item) => item.appointment_id.toString()}
          // style={{ paddingBottom: 130 }}
          contentContainerStyle={{ paddingBottom: 130, marginBottom: 80 }}
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

  appointmentCard: {
    padding: "32px",
  },

  pb50: {
    paddingBottom: "32px",
  },
});
