import React, { useState, useRef } from "react";
import { View, Text, TouchableOpacity, Modal } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import { styles } from "./style";
import { useNavigation } from "@react-navigation/native";
import { Calendar } from "react-native-calendars";
import { captureRef } from "react-native-view-shot";
import * as MediaLibrary from "expo-media-library";
import AntDesign from "react-native-vector-icons/AntDesign";
import { colors } from "../../utils";

const validationSchema = Yup.object().shape({
  date: Yup.string().required("Date is required"),
  time: Yup.string().required("Time is required"),
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

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const handleTimeSelect = (time, formikProps) => {
    setSelectedTime(time);
    formikProps.setFieldValue("time", time);
  };

  const handleBookAppointment = async (data) => {
    setModalVisible(true);
    console.log(data);
    // setAppointment({ ...data, doctor });
  };

  return (
    <Formik
      initialValues={{ date: "", time: "" }}
      validationSchema={validationSchema}
      onSubmit={handleBookAppointment}
    >
      {(formikProps) => (
        <View style={styles.container}>
          <TouchableOpacity
            style={{ marginLeft: 10, marginBottom: 10 }}
            onPress={() => navigation.goBack()}
          >
            <AntDesign name="arrowleft" size={20} color={colors.primaryColor} />
          </TouchableOpacity>
          <Text style={styles.title}>Book an Appointment</Text>

          <TouchableOpacity
            style={styles.inputContainer}
            onPress={showDatePicker}
          >
            <Calendar
              style={styles.calendar}
              onDayPress={(day) =>
                formikProps.setFieldValue("date", day.dateString)
              }
              markedDates={{
                [formikProps.values.date]: {
                  selected: true,
                  selectedColor: colors.primaryColor,
                },
              }}
              theme={{
                calendarBackground: colors.aliceblue,
                textSectionTitleColor: colors.primaryColor,
                selectedDayBackgroundColor: colors.primaryColor,
                selectedDayTextColor: "#ffffff",
                todayTextColor: "#26a69a",
                arrowColor: "#737373",
                textDayFontSize: 16,
                textMonthFontSize: 16,
                textDayHeaderFontSize: 16,
                textDayFontFamily: "Urbanist_600SemiBold",
                textMonthFontFamily: "Urbanist_600SemiBold",
                textDayHeaderFontFamily: "Urbanist_600SemiBold",
              }}
            />
          </TouchableOpacity>

          <View style={styles.timeContainer}>
            {customHours.map((time) => (
              <TouchableOpacity
                key={time}
                style={[
                  styles.timeButton,
                  formikProps.values.time === time && styles.selectedTimeButton,
                ]}
                onPress={() => handleTimeSelect(time, formikProps)}
              >
                <Text
                  style={[
                    styles.timeButtonText,
                    formikProps.values.time === time &&
                      styles.selectedTimeButtonText,
                  ]}
                >
                  {time}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
          {formikProps.touched.time && formikProps.errors.time && (
            <Text style={styles.error}>{formikProps.errors.time}</Text>
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
                    <Text style={styles.saveButtonText}>Save Image</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Modal>
        </View>
      )}
    </Formik>
  );
};

export default BookAppointment;
