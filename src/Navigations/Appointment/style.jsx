import { colors } from "../../utils";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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
    width: "90%",
    marginBottom: 20,
    borderRadius: 10,
    backgroundColor: "#fbfcf8",
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
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#ddd",
    padding: 15,
  },
  socialButtonIcon: {
    width: 40,
    height: 40,
  },
});
