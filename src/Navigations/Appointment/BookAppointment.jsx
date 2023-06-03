import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import Icon from "react-native-vector-icons/FontAwesome";
import { styles } from "./style";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../../context/Authentication";
import { FIRESTORE_DB } from "../../../firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import { useAppointment } from "../../context/Appointments";
const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  date: Yup.string().required("Date is required"),
  time: Yup.string().required("Time is required"),
});

const BookAppointment = ({ route }) => {
  const navigation = useNavigation();
  const { doctor } = route.params;
  const { setAppointment } = useAppointment();
  const { user } = useAuth();

  const handleBookAppointment = async (data) => {
    console.log(data);
    setAppointment({ ...data, doctor });
  };

  return (
    <Formik
      initialValues={{ name: "", date: "", time: "" }}
      validationSchema={validationSchema}
      onSubmit={handleBookAppointment}
    >
      {(formikProps) => (
        <View style={styles.container}>
          <Text style={styles.title}>Book an Appointment</Text>
          <View style={styles.inputContainer}>
            <Icon name="user" size={21} color="gray" />
            <TextInput
              style={styles.input}
              placeholder="Name"
              onChangeText={formikProps.handleChange("name")}
              value={formikProps.values.name}
            />
          </View>
          {formikProps.errors.name && formikProps.touched.name && (
            <Text style={styles.error}>{formikProps.errors.name}</Text>
          )}
          <View style={styles.inputContainer}>
            <Icon name="calendar" size={21} color="gray" />
            <TextInput
              style={styles.input}
              placeholder="Date"
              onChangeText={formikProps.handleChange("date")}
              value={formikProps.values.date}
            />
          </View>
          {formikProps.errors.date && formikProps.touched.date && (
            <Text style={styles.error}>{formikProps.errors.date}</Text>
          )}
          <View style={styles.inputContainer}>
            <Icon name="clock-o" size={21} color="gray" />
            <TextInput
              style={styles.input}
              placeholder="Time"
              onChangeText={formikProps.handleChange("time")}
              value={formikProps.values.time}
            />
          </View>
          {formikProps.errors.time && formikProps.touched.time && (
            <Text style={styles.error}>{formikProps.errors.time}</Text>
          )}
          <TouchableOpacity
            style={styles.button}
            onPress={formikProps.handleSubmit}
          >
            <Text style={styles.buttonText}>Book Appointment</Text>
          </TouchableOpacity>
        </View>
      )}
    </Formik>
  );
};

export default BookAppointment;
