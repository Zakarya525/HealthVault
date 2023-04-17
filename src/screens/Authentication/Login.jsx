import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import Icon from "react-native-vector-icons/FontAwesome5";
import { colors } from "../../utils";

const validationSchema = Yup.object().shape({
  username: Yup.string().required("Username is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
});

export const Login = () => {
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
    <Formik
      initialValues={{ username: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={handleLogin}
    >
      {(formikProps) => (
        <View style={styles.container}>
          <Icon
            name="hand-holding-medical"
            size={130}
            color={colors.primaryColor}
          />
          <Text style={styles.title}>Login to Your Account</Text>
          <View style={styles.inputContainer}>
            <Icon name="user" size={24} color="gray" />
            <TextInput
              style={styles.input}
              placeholder="Username"
              onChangeText={formikProps.handleChange("username")}
              value={formikProps.values.username}
            />
          </View>
          {formikProps.errors.username && formikProps.touched.username && (
            <Text style={styles.error}>{formikProps.errors.username}</Text>
          )}
          <View style={styles.inputContainer}>
            <Icon name="lock" size={24} color="gray" />
            <TextInput
              style={styles.input}
              placeholder="Password"
              onChangeText={formikProps.handleChange("password")}
              value={formikProps.values.password}
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
          {formikProps.errors.password && formikProps.touched.password && (
            <Text style={styles.error}>{formikProps.errors.password}</Text>
          )}
          <TouchableOpacity
            style={styles.button}
            onPress={formikProps.handleSubmit}
          >
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
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontFamily: "Urbanist_700Bold",
    marginVertical: 20,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "80%",
    marginBottom: 20,
    borderRadius: 10,
    backgroundColor: "#f4f4f4",
    paddingHorizontal: 20,
  },
  input: {
    flex: 1,
    height: 50,
    marginLeft: 10,
    borderWidth: 0,
  },
  button: {
    width: "80%",
    height: 50,
    borderRadius: 20,
    backgroundColor: colors.primaryColor,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 30,
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
