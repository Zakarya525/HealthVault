import React, { useEffect } from "react";
import { Text, TouchableOpacity, View, Image } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation, useRoute } from "@react-navigation/native";
import { styles } from "../Doctor/styles";
import { useAuth } from "../../context/Authentication";

const AppointmentProfile = () => {
  const navigation = useNavigation();
  const { user } = useAuth();
  const route = useRoute();
  const { appointment } = route.params;
  const date = new Date(appointment.time);
  const options = {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  };
  const formattedDate = date.toLocaleDateString("en-US", options);
  const { firstName, lastName, mobile, email, cnic } = user;
  const handleClick = () => {
    //contact hospital
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Icon name="arrow-left" size={20} color="black" />
        </TouchableOpacity>
        <Text style={styles.doctorName}>My Appointment</Text>
      </View>

      <View style={styles.profileCard}>
        <View style={styles.avatarContainer}>
          <Image
            style={styles.avatarCircle}
            source={require("../../images/article2.jpg")}
          />
        </View>
        <View style={styles.doctorInfo}>
          <Text style={styles.doctorName}>
            Federal Government PolyClinic, Islamabad
          </Text>

          <Text style={styles.doctorLocation}>
            44 Luqman Hakeem Rd, G-6/2 G 6/2 G-6, Islamabad, Islamabad Capital
            Territory
          </Text>
        </View>
      </View>

      <View style={styles.sectionContainer}>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Schedule Appointment</Text>
          <View style={styles.workingTimeContainer}>
            <View style={styles.workingTimeItem}>
              <Text style={styles.workingTimeHours}>{formattedDate}</Text>
            </View>
          </View>
        </View>
        <Text style={styles.sectionTitle}>Patient Information</Text>
        <View style={styles.row}>
          <Text style={styles.label}>Full Name:</Text>
          <Text style={styles.value}>{`${firstName} ${lastName}`}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>CNIC:</Text>
          <Text style={styles.value}>{cnic}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Email:</Text>
          <Text style={styles.value}>{email}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Mobile:</Text>
          <Text style={styles.value}>{mobile}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Problem:</Text>
          <Text style={styles.value}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </Text>
        </View>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleClick}>
        <Text style={styles.buttonText}>Contact Us</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AppointmentProfile;
