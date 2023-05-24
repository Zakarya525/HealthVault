import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import Icon from "react-native-vector-icons/FontAwesome5";
import { styles } from "./style";
import { colors } from "../../utils";
import { useNavigation } from "@react-navigation/native";
import { useQueryClient, useMutation } from "react-query";
import { loginUser } from "../../services/user/api";

const validationSchema = Yup.object().shape({
  CNIC: Yup.string().required("CNIC is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
});

export const Login = () => {
  const navigation = useNavigation();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const queryClient = useQueryClient();

  const handleLogin = async (values) => {
    navigation.navigate("BottomNavigation", {
      screen: "Home",
    });
    // const response = await loginUser({
    //   cnic: values.CNIC,
    //   password: values.password,
    // });
    // const data = await response.json();
    // console.log("This is the data from Server: ", data);
    // queryClient.invalidateQueries("user");
  };

  const formatCNIC = (cnic) => {
    const digitsOnly = cnic.replace(/\D/g, "");
    const formattedCNIC = digitsOnly.replace(
      /^(\d{5})(\d{7})(\d{1})$/,
      "$1-$2-$3"
    );

    return formattedCNIC;
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const mutation = useMutation(handleLogin, {
    onSuccess: () => {
      queryClient.invalidateQueries("user");
    },
  });

  return (
    <Formik
      initialValues={{ CNIC: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={mutation.mutate}
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
                formikProps.setFieldValue("CNIC", formatCNIC(cnic))
              }
              value={formikProps.values.CNIC}
            />
          </View>
          {formikProps.errors.CNIC && formikProps.touched.CNIC && (
            <Text style={styles.error}>{formikProps.errors.CNIC}</Text>
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
