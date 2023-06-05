import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import Icon from "react-native-vector-icons/FontAwesome5";
import { styles } from "./style";
import { colors } from "../../utils";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../../context/Authentication";
import Loader from "../../components/Loader/Loader";

const validationSchema = Yup.object().shape({
  cnic: Yup.string().required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
});

export const Login = () => {
  const navigation = useNavigation();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const { isLoading, signIn } = useAuth();

  // if (isLoading) return <Loader />;

  const formatCNIC = (cnic) => {
    const digitsOnly = cnic.replace(/\D/g, "");
    const formattedCNIC = digitsOnly.replace(
      /^(\d{5})(\d{7})(\d{1})$/,
      "$1-$2-$3"
    );

    return formattedCNIC;
  };

  const handleLogin = async (values) => {
    console.log(values);
    signIn(values);
    navigation.navigate("BottomNavigation", {
      screen: "Home",
    });
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <Formik
      initialValues={{ cnic: "", password: "" }}
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
              placeholder="CNIC"
              onChangeText={(cnic) =>
                formikProps.setFieldValue("cnic", formatCNIC(cnic))
              }
              value={formikProps.values.cnic}
            />
          </View>
          {formikProps.errors.cnic && formikProps.touched.cnic && (
            <Text style={styles.error}>{formikProps.errors.cnic}</Text>
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

          <TouchableOpacity onPress={() => navigation.navigate("Register")}>
            <Text style={styles.orContinueWith}>
              Don't have an account?
              <Text style={styles.forgotPasswordText}> Sign Up</Text>
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </Formik>
  );
};
