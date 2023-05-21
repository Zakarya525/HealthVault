import { StyleSheet } from "react-native";
import { colors } from "../../utils";

export const createStyle = () => {
  return (styles = StyleSheet.create({
    mainContainer: {
      flex: 1,
    },
    header: {
      flex: 1.2,
      alignItems: "center",
    },
    footer: {
      flex: 1,
      alignItems: "center",
      backgroundColor: colors.white,
      borderTopEndRadius: 50,
      borderTopStartRadius: 50,
    },
    img: {
      marginTop: 50,
      width: 700,
      height: 700,
      resizeMode: "contain",
      position: "absolute",
      zIndex: 1,
    },
    img2: {
      marginTop: 20,
      width: 400,
      height: 1000,
      resizeMode: "contain",
      position: "absolute",
      zIndex: 1,
    },

    head: {
      flex: 3,
    },
    med: {
      flex: 0.5,
    },
    foot: {
      flex: 2,
    },
  }));
};
