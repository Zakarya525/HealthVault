import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const BookAppointment = () => {
  return (
    <View>
      <TouchableOpacity style={styles} onPress={() => navigation.goBack()}>
        <Icon name="arrow-left" size={20} color="black" />
      </TouchableOpacity>
      <Text>BookAppointment</Text>
    </View>
  );
};

export default BookAppointment;

const styles = StyleSheet.create({});
