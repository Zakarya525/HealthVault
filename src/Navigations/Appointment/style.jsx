import { colors } from "../../utils";
import { StyleSheet, Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#fbfcf8",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontFamily: "Urbanist_700Bold",
    paddingVertical: 0.09 * screenWidth,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    flex: 3,
    borderRadius: 20,
    paddingHorizontal: 0.09 * screenWidth,
    paddingVertical: 0.04 * screenWidth,
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
    paddingHorizontal: 10,
  },
  timeButton: {
    borderRadius: 15,
    paddingHorizontal: 0.04 * screenWidth,
    paddingVertical: 0.02 * screenWidth,
    marginVertical: 0.02 * screenWidth,
    backgroundColor: "#ffffff",
    elevation: 2,
    width: 0.3 * screenWidth,
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
    elevation: 4,
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

  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "#ffffff",
    padding: 20,
    borderRadius: 8,
    alignItems: "center",
  },
  modalText: {
    fontSize: 18,
    fontFamily: "Urbanist_500Medium",
    marginBottom: 10,
    textAlign: "center",
  },
  modalButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 20,
  },
  modalButtonText: {
    fontSize: 16,
    fontFamily: "Urbanist_500Medium",
    marginLeft: 5,
  },
  saveButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 20,
    marginLeft: 10,
  },
  modalButtonsContainer: {
    flexDirection: "row",
  },
});
