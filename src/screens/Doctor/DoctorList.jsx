import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {
  Text,
  FlatList,
  StyleSheet,
  View,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Avatar from "react-native-vector-icons/FontAwesome5";
import Search from "../../components/filters/Search";
import { colors, fonts } from "../../utils";
import Doctor from "../../components/Doctor";

export default function AppointmentList({ navigation }) {
  const { doctors } = { doctors: [] };
  const [filteredDoctors, setFilteredAppointment] = useState([]);

  const searchAppointment = (text) => {
    if (text) {
      const newItems = doctors.filter((item) => {
        const itemData =
          `${item.fullName} ${item.speciality} ${item.address}`.toUpperCase();
        const searchData = text.toUpperCase();
        return itemData.indexOf(searchData) > -1;
      });
      setFilteredAppointment(newItems);
    } else {
      setFilteredAppointment(doctors);
    }
  };

  useEffect(() => {
    setFilteredAppointment(doctors);
  }, [doctors]);

  const keyExtractor = (item) => {
    if (item && item._id) {
      return item._id.toString();
    }
    return "";
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={{ marginRight: 15 }}
          onPress={() => navigation.goBack()}
        >
          <Icon name="arrow-left" size={20} color={colors.primaryColor} />
        </TouchableOpacity>

        <Avatar
          name="hand-holding-medical"
          size={35}
          color={colors.primaryColor}
        />
        <Text style={styles.headingLarge}>Top Doctors</Text>
      </View>

      <Search placeHolder="Search Doctor" searchAction={searchAppointment} />
      {doctors && doctors.length ? (
        <FlatList
          data={filteredDoctors}
          renderItem={({ item }) => <Doctor doctor={item} />}
          keyExtractor={keyExtractor}
        />
      ) : (
        <View style={styles.noAppointmentsContainer}>
          <Text style={styles.noAppointmentsText}>No doctors found.</Text>
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
