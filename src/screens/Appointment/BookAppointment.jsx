import React, { useState, useRef } from "react";
import { View, Text, TouchableOpacity, Modal, ScrollView } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import { styles } from "./style";
import { useNavigation, useRoute } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";
import { captureRef } from "react-native-view-shot";
import * as MediaLibrary from "expo-media-library";
import AntDesign from "react-native-vector-icons/AntDesign";
import { useDispatch, useSelector } from "react-redux";
import { useAddAppointmentMutation } from "../../services/appointmentApi";
import { setAddAppointment } from "../../store/appointmentSlice";
import Loader from "../../components/Loader/Loader";
import Success from "../../components/Loader/Success";

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
  "06:00 PM",
  "07:00 PM",
  "08:00 PM",
  "09:00 PM",
  "10:00 PM",
  "11:00 PM",
];

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
const BookAppointment = () => {
  const navigation = useNavigation();
  const [selectedTime, setSelectedTime] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const { user } = useSelector((state) => state.auth);
  const viewRef = useRef(null);

  // Function download the image to local storage of the mobile
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

  const dispatch = useDispatch();
  const [addAppointment, responseInfo] = useAddAppointmentMutation();
  const handleTimeSelect = (time, formikProps) => {
    setSelectedTime(time);
    formikProps.setFieldValue("fromTime", time);
  };

  function convertTo24HourFormat(timeString) {
    const [time, period] = timeString.split(" ");
    let [hours, minutes] = time.split(":");

    hours = parseInt(hours);
    minutes = parseInt(minutes);

    if (period.toLowerCase() === "pm" && hours !== 12) {
      hours += 12;
    } else if (period.toLowerCase() === "am" && hours === 12) {
      hours = 0;
    }

    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}`;
  }

  // useAddAppointmentMutation();
  const opd = useSelector((state) => state.opd.selectedOpd);
  const handleBookAppointment = async (data, formikProps) => {
    // setModalVisible(true);
    // setAppointment(data, OPD);
    // formikProps.resetForm();

    const parts = opd.split("-");
    const opd_dep = parts[0];
    const opd_sub_dep = parts[1] + "-" + parts[2];
    // const appointmentTime = selectedTime.split(" ")[0];
    const appointmentTime24 = convertTo24HourFormat(selectedTime);

    const appointmentObject = {
      opd_dep: opd_dep,
      opd_sub_dep: opd_sub_dep,
      appointmentTime: appointmentTime24,
    };

    console.log(appointmentObject);
    const response = await addAppointment(appointmentObject);
    dispatch(setAddAppointment());
    console.log(response);
    // navigation.goBack();
  };

  const gotoHome = () => {
    navigation.navigate("Home");
  };
  if (responseInfo.isLoading) {
    return <Loader />;
  }

  if (responseInfo.isSuccess) {
    return <Success onClose={gotoHome} />;
  }
  return (
    // <Formik
    //   initialValues={{ fromTime: "" }}
    //   validationSchema={validationSchema}
    //   onSubmit={handleBookAppointment}
    // >
    //   {(formikProps) => (
    //     <ScrollView contentContainerStyle={styles.container}>
    //       <TouchableOpacity
    //         style={styles.backButton}
    //         onPress={() => navigation.goBack()}
    //       >
    //         <Icon name="arrow-left" size={20} color="black" />
    //       </TouchableOpacity>

    //       <Text style={styles.title}>Book an Appointment</Text>

    //       <Text style={styles.headingMedium}>
    //         Choose time for your appointment
    //       </Text>
    //       <View style={styles.timeContainer}>
    //         {customHours.map((time) => (
    //           <TouchableOpacity
    //             key={time}
    //             style={[
    //               styles.timeButton,
    //               formikProps.values.fromTime === time &&
    //                 styles.selectedTimeButton,
    //             ]}
    //             onPress={() => handleTimeSelect(time, formikProps)}
    //           >
    //             <Text
    //               style={[
    //                 styles.timeButtonText,
    //                 formikProps.values.fromTime === time &&
    //                   styles.selectedTimeButtonText,
    //               ]}
    //             >
    //               {time}
    //             </Text>
    //           </TouchableOpacity>
    //         ))}
    //       </View>
    //       {formikProps.touched.fromTime && formikProps.errors.fromTime && (
    //         <Text style={styles.error}>{formikProps.errors.fromTime}</Text>
    //       )}

    //       {/* <Text style={styles.headingMedium}>To</Text> */}
    //       <View style={styles.timeContainer}>
    //         {customHours.map((time) => (
    //           <TouchableOpacity
    //             key={time}
    //             style={[
    //               styles.timeButton,
    //               formikProps.values.toTime === time &&
    //                 styles.selectedTimeButton,
    //             ]}
    //             onPress={() => formikProps.setFieldValue("toTime", time)}
    //           >
    //             <Text
    //               style={[
    //                 styles.timeButtonText,
    //                 formikProps.values.toTime === time &&
    //                   styles.selectedTimeButtonText,
    //               ]}
    //             >
    //               {time}
    //             </Text>
    //           </TouchableOpacity>
    //         ))}
    //       </View>
    //       {/* {formikProps.touched.toTime && formikProps.errors.toTime && (
    //         <Text style={styles.error}>{formikProps.errors.toTime}</Text>
    //       )} */}

    //       <TouchableOpacity
    //         style={styles.button}
    //         onPress={formikProps.handleSubmit}
    //       >
    //         <Text style={styles.buttonText}>Book Appointment</Text>
    //       </TouchableOpacity>

    //       {/* <Modal
    //         animationType="slide"
    //         transparent={true}
    //         visible={modalVisible}
    //         onRequestClose={() => {
    //           setModalVisible(false);
    //         }}
    //       >
    //         <View style={styles.modalContainer}>
    //           <View ref={viewRef} style={styles.modalContent}>
    //             <Text style={styles.modalText}>Appointment Booked!</Text>
    //             <Text style={styles.modalText}>
    //               Your appointment has been successfully booked.
    //             </Text>
    //             <Text
    //               style={styles.modalText}
    //             >{`Patient Name: ${firstName} ${lastName}`}</Text>
    //             <Text style={styles.modalText}>Mobile: {mobile}</Text>
    //             <Text style={styles.modalText}>Email: {email}</Text>
    //             <Text style={styles.modalText}>CNIC: {cnic}</Text>
    //             <Text style={styles.modalText}>Status: {status}</Text>
    //             <Text style={styles.modalText}>
    //               Token Number: {tokenNumber}
    //             </Text>
    //             <View style={styles.modalButtonsContainer}>
    //               <TouchableOpacity
    //                 style={styles.modalButton}
    //                 onPress={() => setModalVisible(false)}
    //               >
    //                 <Text style={styles.modalButtonText}>OK</Text>
    //               </TouchableOpacity>
    //               <TouchableOpacity
    //                 onPress={saveModalImage}
    //                 style={styles.saveButton}
    //               >
    //                 <AntDesign name="save" size={24} color="black" />
    //                 <Text>Save Image</Text>
    //               </TouchableOpacity>
    //             </View>
    //           </View>
    //         </View>
    //       </Modal> */}
    //     </ScrollView>
    //   )}
    // </Formik>

    <Formik
      initialValues={{ fromTime: "" }}
      validationSchema={validationSchema}
      onSubmit={handleBookAppointment}
    >
      {(formikProps) => (
        <ScrollView contentContainerStyle={styles.container}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Icon name="arrow-left" size={20} color="black" />
          </TouchableOpacity>

          <Text style={styles.title}>Book an Appointment</Text>

          <Text style={styles.headingMedium}>
            Choose time for your appointment
          </Text>
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

          {/* Commented out the second date selector */}
          {/* <Text style={styles.headingMedium}>To</Text> */}
          {/* <View style={styles.timeContainer}>
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
      </View> */}

          <TouchableOpacity
            style={styles.button}
            onPress={(e) => handleBookAppointment()}
          >
            <Text style={styles.buttonText}>Book Appointment</Text>
          </TouchableOpacity>

          {/* Remaining code commented out for brevity */}
        </ScrollView>
      )}
    </Formik>
  );
};

export default BookAppointment;
