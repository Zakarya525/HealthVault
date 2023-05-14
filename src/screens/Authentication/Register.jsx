import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import Icon from "react-native-vector-icons/FontAwesome5";
import { styles } from "./style";
import { colors } from "../../utils";
import { useNavigation } from "@react-navigation/native";

const validationSchema = Yup.object().shape({
  username: Yup.string().required("Username is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
});

export const Register = () => {
  const navigation = useNavigation();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleRegister = (data) => {
    console.log(data);
    console.log(data.username);
    navigation.navigate("BottomNavigation", {
      screen: "Home",
      params: { user: data },
    });
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
      onSubmit={handleRegister}
    >
      {(formikProps) => {
        return (
          <View style={styles.container}>
            <Icon
              name="hand-holding-medical"
              size={100}
              color={colors.primaryColor}
            />
            <Text style={styles.title}>Create New Account</Text>
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
              <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.forgotPassword}
              onPress={handleForgotPassword}
            >
              <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <Text style={styles.orContinueWith}>
                Don't have an account?
                <Text style={styles.forgotPasswordText}> Sign In</Text>
              </Text>
            </TouchableOpacity>
          </View>
        );
      }}
    </Formik>
  );
};
