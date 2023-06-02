import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View, TouchableOpacity, Button } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const BookAppointment = () => {
  const navigation = useNavigation();

  return (
    <>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Button title="Go Back"></Button>
      </TouchableOpacity>
      <View>
        <Text>BookAppointment</Text>
      </View>
    </>
  );
};

export default BookAppointment;

const styles = StyleSheet.create({});
