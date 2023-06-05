import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import Icon from "react-native-vector-icons/FontAwesome";
import { styles } from "./style";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../../context/Authentication";
import { useAppointment } from "../../context/Appointments";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { Calendar } from "react-native-calendars";
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

const BookAppointment = ({ route }) => {
  const navigation = useNavigation();
  const { doctor } = route.params;
  const { setAppointment } = useAppointment();
  const { user } = useAuth();
  const [selectedTime, setSelectedTime] = useState("");

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const handleTimeSelect = (time, formikProps) => {
    setSelectedTime(time);
    formikProps.setFieldValue("time", time);
  };

  const handleBookAppointment = async (data) => {
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
        </View>
      )}
    </Formik>
  );
};

export default BookAppointment;
