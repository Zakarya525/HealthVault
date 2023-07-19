import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Modal,
  TextInput,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import MIcon from "react-native-vector-icons/FontAwesome5";
import { useNavigation } from "@react-navigation/native";
import { colors } from "@utils";
import * as ImagePicker from "expo-image-picker";
import placeholderImageUri from "../images/placeholder-image.png";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../store/authSlice";

const Profile = () => {
  const { user } = useSelector((state) => state.auth);
  const navigation = useNavigation();
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editedName, setEditedName] = useState(user.name);
  const [imageUri, setImageUri] = useState(placeholderImageUri);

  const handleImageSelection = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      alert("Sorry, we need camera roll permissions to choose an image.");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setImageUri(result.assets[0].uri);
    }
  };

  const dispatch = useDispatch();

  const handleLogout = () => {
    // navigation.navigate("Login");
    navigation.navigate("Home");
    dispatch(logOut());
  };

  const handleEditProfile = () => {
    setIsEditModalOpen(true);
  };

  const handleSaveChanges = () => {
    // Save the image URI to the user object or database
    // Implement your save changes logic here
    // For example, update the user's name
    setEditedName(editedName);
    setIsEditModalOpen(false);
  };

  const renderUserData = () => {
    const userData = [
      { label: "Address", icon: "home", value: user.address },
      { label: "City", icon: "map-marker-alt", value: user.city },
      { label: "CNIC", icon: "id-card", value: user.cnic },
      { label: "Email", icon: "envelope", value: user.email },
      { label: "Mobile", icon: "phone", value: user.contact_no },
    ];

    return userData.map((item, index) => (
      <View style={styles.userDataContainer} key={index}>
        <MIcon name={item.icon} size={20} color={colors.primaryColor} />
        <View style={styles.userDataTextContainer}>
          <Text style={styles.userDataLabel}>{item.label}</Text>
          <Text style={styles.userDataValue}>{item.value}</Text>
        </View>
      </View>
    ));
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <MIcon
          name="hand-holding-medical"
          size={35}
          color={colors.primaryColor}
        />
        <Text style={styles.headingLarge}>Profile</Text>
      </View>

      <View style={styles.profileHeader}>
        {imageUri !== placeholderImageUri ? (
          <Image style={styles.displayPic} source={{ uri: imageUri }} />
        ) : (
          <Image style={styles.displayPic} source={placeholderImageUri} />
        )}
        <TouchableOpacity
          style={styles.editProfileButton}
          onPress={handleImageSelection}
        >
          <MIcon name="user-edit" size={20} color="black" />
          <Text style={styles.userDataTextContainer}>Edit Profile Picture</Text>
        </TouchableOpacity>
        <Text style={styles.nameText}>{`${user.firstname}`}</Text>
      </View>

      {renderUserData()}

      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <MIcon name="sign-out-alt" size={20} color="red" />
        <Text style={styles.logoutButtonText}>Logout</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
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
  nameText: {
    fontFamily: "Urbanist_700Bold",
    fontSize: 20,
    margin: 10,
  },
  userDataContainer: {
    flexDirection: "row",
    alignItems: "center",
    alignContent: "center",
    marginVertical: 10,
    marginHorizontal: 50,
  },
  userDataTextContainer: {
    marginLeft: 10,
  },
  userDataLabel: {
    fontFamily: "Urbanist_700Bold",
    fontSize: 16,
  },
  userDataValue: {
    fontFamily: "Urbanist_400Regular",
    fontSize: 14,
  },
  container: {
    marginTop: 20,
    marginLeft: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  logoutButton: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    marginStart: 55,
  },
  logoutButtonText: {
    fontFamily: "Urbanist_400Regular",
    color: "red",
    fontSize: 16,
    marginLeft: 10,
  },
  profileHeader: {
    alignItems: "center",
    marginBottom: 20,
    marginHorizontal: 20,
  },

  displayPic: {
    width: 100,
    height: 100,
    borderRadius: 100,
  },
  editProfileButton: {
    flexDirection: "row",
    marginTop: 10,
  },
});

export default Profile;
