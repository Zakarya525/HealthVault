import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { colors } from "../../utils";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleLogin = () => {
    // handle login logic here
  };

  const handleForgotPassword = () => {
    // handle forgot password logic here
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <View style={styles.container}>
      <Icon name="heart-plus" size={170} color={colors.primaryColor} />
      <Text style={styles.title}>Login to Your Account</Text>
      <View style={styles.inputContainer}>
        <Icon name="account" size={24} color="gray" />
        <TextInput
          style={styles.input}
          placeholder="Username"
          onChangeText={(text) => setUsername(text)}
          value={username}
        />
      </View>
      <View style={styles.inputContainer}>
        <Icon name="lock" size={24} color="gray" />
        <TextInput
          style={styles.input}
          placeholder="Password"
          onChangeText={(text) => setPassword(text)}
          value={password}
          secureTextEntry={!isPasswordVisible}
        />
        <TouchableOpacity onPress={togglePasswordVisibility}>
          <Icon
            name={isPasswordVisible ? "eye-off" : "eye"}
            size={24}
            color="gray"
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.forgotPassword}
        onPress={handleForgotPassword}
      >
        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
      </TouchableOpacity>
      <View style={styles.divider}>
        <Text style={styles.orContinueWith}>or continue with</Text>
      </View>
      <View style={styles.socialLogin}>
        <TouchableOpacity style={styles.socialButton}>
          <Image
            source={require("../../../assets/facebook-logo.png")}
            style={styles.socialButtonIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Image
            source={require("../../../assets/google-logo.png")}
            style={styles.socialButtonIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Image
            source={require("../../../assets/apple-logo.png")}
            style={styles.socialButtonIcon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontFamily: "Urbanist_600SemiBold",
    marginVertical: 20,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "80%",
    marginBottom: 20,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: "gray",
    paddingHorizontal: 20,
  },
  input: {
    flex: 1,
    height: 50,
    marginLeft: 10,
  },
  button: {
    width: "80%",
    height: 50,
    borderRadius: 25,
    backgroundColor: colors.primaryColor,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontFamily: "Urbanist_600SemiBold",
    color: "white",
    fontSize: 18,
  },
  forgotPassword: {
    marginRight: 10,
    marginBottom: 20,
  },
  forgotPasswordText: {
    fontFamily: "Urbanist_500Medium",
    color: colors.primaryColor,
  },
  divider: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
  },
  orContinueWith: {
    color: "gray",
    fontSize: 16,
    marginHorizontal: 10,
  },
  socialLogin: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
  },
  socialButton: {
    marginHorizontal: 10,
  },
  socialButtonIcon: {
    width: 40,
    height: 40,
  },
});
