import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import Icon from "react-native-vector-icons/FontAwesome5";
import { styles } from "./style";
import { colors } from "../../utils";
import { useNavigation } from "@react-navigation/native";
import Loader from "@components/Loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { useLoginMutation } from "../../services/loginApi";
import { setUser } from "../../store/authSlice";
import { getAuthToken, saveAuthToken } from "../../storage/SecureStore";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Enter a valid email")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
});

export default function Login() {
  const { user } = useSelector((state) => state.auth);

  const [login, responseInfo] = useLoginMutation();

  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleLogin = async (values) => {
    const response = await login(values).unwrap();
    dispatch(setUser(response));
    saveAuthToken(response.token);
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  if (responseInfo.isLoading) {
    return <Loader />;
  }

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={handleLogin}
    >
      {(formikProps) => (
        <View style={styles.container}>
          <Icon
            name="hand-holding-medical"
            size={100}
            color={colors.primaryColor}
          />
          <Text style={styles.title}>Login to Your Account</Text>
          <View style={styles.inputContainer}>
            <Icon name="user" size={21} color="gray" />
            <TextInput
              style={styles.input}
              placeholder="Email"
              onChangeText={formikProps.handleChange("email")}
              value={formikProps.values.email}
            />
          </View>
          {formikProps.errors.email && formikProps.touched.email && (
            <Text style={styles.error}>{formikProps.errors.email}</Text>
          )}
          <View style={styles.inputContainer}>
            <Icon name="lock" size={21} color="gray" />
            <TextInput
              style={styles.input}
              placeholder="Password"
              onChangeText={formikProps.handleChange("password")}
              value={formikProps.values.password}
              secureTextEntry={!isPasswordVisible}
            />
            <TouchableOpacity onPress={togglePasswordVisibility}>
              <Icon
                name={isPasswordVisible ? "eye-slash" : "eye"}
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
          <TouchableOpacity style={styles.forgotPassword}>
            <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>
      )}
    </Formik>
  );
}
