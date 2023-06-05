import { colors } from "../../utils";
import { StyleSheet, Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fbfcf8",
  },
  title: {
    fontSize: 24,
    fontFamily: "Urbanist_700Bold",
    marginVertical: 0.09 * screenWidth,
  },
  inputContainer: {
    flex: 3,
    borderRadius: 20,
    paddingHorizontal: 0.09 * screenWidth,
    marginVertical: 0.04 * screenWidth,
    backgroundColor: colors.aliceblue,
  },
  calendar: {
    backgroundColor: colors.aliceblue,
    height: 0.4 * screenWidth,
  },
  timeContainer: {
    flex: 2,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    marginBottom: 0.04 * screenWidth,
  },
  timeButton: {
    borderRadius: 15,
    paddingHorizontal: 0.04 * screenWidth,
    paddingVertical: 0.02 * screenWidth,
    marginVertical: 0.02 * screenWidth,
    backgroundColor: "#ffffff",
    elevation: 2,
    width: 0.3 * screenWidth, // Adjust the width based on the desired number of buttons per row
  },

  selectedTimeButton: {
    backgroundColor: colors.primaryColor,
  },
  timeButtonText: {
    fontSize: 0.04 * screenWidth,
    color: colors.primaryColor,
    fontFamily: "Urbanist_600SemiBold",
  },
  selectedTimeButtonText: {
    color: "#ffffff",
  },
  error: {
    color: "red",
    marginBottom: 0.02 * screenWidth,
    fontFamily: "Urbanist_500Medium",
    fontSize: 0.04 * screenWidth,
  },
  button: {
    width: "80%",
    height: 0.12 * screenWidth,
    borderRadius: 0.05 * screenWidth,
    backgroundColor: colors.primaryColor,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 0.06 * screenWidth,
  },
  buttonText: {
    fontFamily: "Urbanist_600SemiBold",
    color: "white",
    fontSize: 0.045 * screenWidth,
  },
});
