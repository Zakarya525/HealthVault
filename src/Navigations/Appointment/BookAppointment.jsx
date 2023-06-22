import React, { useState, useRef } from "react";
import { View, Text, TouchableOpacity, Modal, ScrollView } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import { styles } from "./style";
import { useNavigation, useRoute } from "@react-navigation/native";
import { captureRef } from "react-native-view-shot";
import * as MediaLibrary from "expo-media-library";
import AntDesign from "react-native-vector-icons/AntDesign";
import { useAppointment } from "@context/Appointments";
import { useAuth } from "@context/Authentication";

const validationSchema = Yup.object().shape({
  fromTime: Yup.string().required("From time is required"),
  toTime: Yup.string().required("To time is required"),
});

const customHours = [
  "09:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "01:00 PM",
  "02:00 PM",
  "03:00 PM",
  "04:00 PM",
  "05:00 PM",
];

const BookAppointment = () => {
  const navigation = useNavigation();
  const [selectedTime, setSelectedTime] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const { setAppointment, appointment } = useAppointment();
  const { user } = useAuth();
  const { firstName, lastName, mobile, email, cnic } = user;
  const { status, tokenNumber } = appointment;

  const route = useRoute();
  const { opdId } = route.params;
  const viewRef = useRef(null);

  const saveModalImage = async () => {
    try {
      const { status } = await MediaLibrary.requestPermissionsAsync();

      if (status === "granted") {
        const uri = await captureRef(viewRef, {
          format: "jpg",
          quality: 1,
        });
        await MediaLibrary.saveToLibraryAsync(uri);
        console.log("Image saved to gallery");
      } else {
        console.log("Permission denied to access media library");
      }
    } catch (error) {
      console.log("Error saving image:", error);
    }
  };

  const handleTimeSelect = (time, formikProps) => {
    setSelectedTime(time);
    formikProps.setFieldValue("fromTime", time);
  };

  const handleBookAppointment = async (data, formikProps) => {
    setModalVisible(true);

    setAppointment(data, opdId);

    formikProps.resetForm();
  };

  return (
    <Formik
      initialValues={{ fromTime: "", toTime: "" }}
      validationSchema={validationSchema}
      onSubmit={handleBookAppointment}
    >
      {(formikProps) => (
        <ScrollView contentContainerStyle={styles.container}>
          <Text style={styles.title}>Book an Appointment</Text>

          <Text style={styles.headingMedium}>From</Text>
          <View style={styles.timeContainer}>
            {customHours.map((time) => (
              <TouchableOpacity
                key={time}
                style={[
                  styles.timeButton,
                  formikProps.values.fromTime === time &&
                    styles.selectedTimeButton,
                ]}
                onPress={() => handleTimeSelect(time, formikProps)}
              >
                <Text
                  style={[
                    styles.timeButtonText,
                    formikProps.values.fromTime === time &&
                      styles.selectedTimeButtonText,
                  ]}
                >
                  {time}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
          {formikProps.touched.fromTime && formikProps.errors.fromTime && (
            <Text style={styles.error}>{formikProps.errors.fromTime}</Text>
          )}

          <Text style={styles.headingMedium}>To</Text>
          <View style={styles.timeContainer}>
            {customHours.map((time) => (
              <TouchableOpacity
                key={time}
                style={[
                  styles.timeButton,
                  formikProps.values.toTime === time &&
                    styles.selectedTimeButton,
                ]}
                onPress={() => formikProps.setFieldValue("toTime", time)}
              >
                <Text
                  style={[
                    styles.timeButtonText,
                    formikProps.values.toTime === time &&
                      styles.selectedTimeButtonText,
                  ]}
                >
                  {time}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
          {formikProps.touched.toTime && formikProps.errors.toTime && (
            <Text style={styles.error}>{formikProps.errors.toTime}</Text>
          )}

          <TouchableOpacity
            style={styles.button}
            onPress={formikProps.handleSubmit}
          >
            <Text style={styles.buttonText}>Book Appointment</Text>
          </TouchableOpacity>

          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              setModalVisible(false);
            }}
          >
            <View style={styles.modalContainer}>
              <View ref={viewRef} style={styles.modalContent}>
                <Text style={styles.modalText}>Appointment Booked!</Text>
                <Text style={styles.modalText}>
                  Your appointment has been successfully booked.
                </Text>
                <Text
                  style={styles.modalText}
                >{`Patient Name: ${firstName} ${lastName}`}</Text>
                <Text style={styles.modalText}>Mobile: {mobile}</Text>
                <Text style={styles.modalText}>Email: {email}</Text>
                <Text style={styles.modalText}>CNIC: {cnic}</Text>
                <Text style={styles.modalText}>Status: {status}</Text>
                <Text style={styles.modalText}>
                  Token Number: {tokenNumber}
                </Text>
                <View style={styles.modalButtonsContainer}>
                  <TouchableOpacity
                    style={styles.modalButton}
                    onPress={() => setModalVisible(false)}
                  >
                    <Text style={styles.modalButtonText}>OK</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={saveModalImage}
                    style={styles.saveButton}
                  >
                    <AntDesign name="save" size={24} color="black" />
                    <Text>Save Image</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Modal>
        </ScrollView>
      )}
    </Formik>
  );
};

export default BookAppointment;
