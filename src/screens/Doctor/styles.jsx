import { StyleSheet } from "react-native";
import { colors } from "../../utils";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    alignContent: "center",
    marginBottom: 20,
  },
  backButton: {
    marginRight: 20,
  },
  doctorName: {
    fontSize: 24,
    fontFamily: "Urbanist_700Bold",
  },
  profileCard: {
    backgroundColor: colors.white,
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  doctorInfo: {
    flex: 1,
    marginLeft: 20,
  },
  doctorName: {
    fontSize: 20,
    fontFamily: "Urbanist_700Bold",
    marginBottom: 5,
  },
  doctorSpecialty: {
    fontSize: 18,
    fontFamily: "Urbanist_400Regular",
    marginBottom: 5,
  },
  doctorLocation: {
    fontSize: 16,
    fontFamily: "Urbanist_400Regular",
  },
  avatarContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  avatarCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: colors.primaryColor,
  },
  tabContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  tab: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 50,
    width: 60,
    height: 60,
  },
  sectionContainer: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: "Urbanist_700Bold",
    marginBottom: 10,
  },
  sectionContent: {
    fontSize: 16,
    fontFamily: "Urbanist_400Regular",
  },
  workingTimeContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  workingTimeItem: {
    width: "100%",
    marginBottom: 10,
  },
  workingTimeDay: {
    fontFamily: "Urbanist_400Regular",
  },
  workingTimeHours: {
    fontFamily: "Urbanist_400Regular",
    color: colors.primaryColor,
  },
  button: {
    backgroundColor: colors.primaryColor,
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: "center",
  },
  buttonText: {
    color: colors.white,
    fontFamily: "Urbanist_400Regular",
    fontSize: 18,
  },
  text: {
    fontFamily: "Urbanist_400Regular",
    marginTop: 10,
  },
});
