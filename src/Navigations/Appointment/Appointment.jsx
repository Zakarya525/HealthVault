import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { Text, FlatList, StyleSheet, View, Button } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Search from "../../components/filters/Search";
import { TouchableOpacity } from "react-native";
import Doctor from "../../components/Doctor";
import { colors } from "../../utils";
import { useDoctor } from "../../context/Doctors";

export default function DoctorList({ navigation }) {
  const { doctors } = useDoctor();
  const [filteredDoctors, setFilteredDoctors] = useState([]);

  const searchDoctor = (text) => {
    if (text) {
      const newItems = doctors.filter((item) => {
        const itemData =
          `${item.fullName} ${item.speciality} ${item.address}`.toUpperCase();
        const searchData = text.toUpperCase();
        return itemData.indexOf(searchData) > -1;
      });
      setFilteredDoctors(newItems);
    } else {
      setFilteredDoctors(doctors);
    }
  };

  useEffect(() => {
    setFilteredDoctors(doctors);
  }, [doctors]);

  const keyExtractor = (item) => {
    if (item && item._id) {
      return item._id.toString();
    }
    return "";
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{ marginLeft: 10, marginBottom: 10 }}
        onPress={() => navigation.goBack()}
      >
        <Icon name="arrow-left" size={20} color={colors.primaryColor} />
      </TouchableOpacity>

      <Search placeholder="Search Doctors" searchAction={searchDoctor} />
      <FlatList
        data={filteredDoctors}
        renderItem={({ item }) => <Doctor doctor={item} />}
        keyExtractor={keyExtractor}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f4f4f4",
    paddingTop: 50,
    flex: 1,
  },
});
