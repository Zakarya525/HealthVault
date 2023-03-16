import React from "react";
import { View, StyleSheet } from "react-native";
import { colors } from "../utils";

const BlueCircle = () => {
  return (
    <View style={styles.container}>
      <View style={styles.circle}>
        {Array.from({ length: 6 }).map((_, i) => (
          <View
            key={i}
            style={[
              styles.dot,
              {
                transform: [{ rotate: `${130 * i}deg` }, { translateX: 180 }],
              },
            ]}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    alignItems: "center",
  },
  circle: {
    width: 250,
    height: 250,
    borderRadius: 250,
    backgroundColor: colors.primaryColor,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    opacity: 0.7,
  },
  dot: {
    width: 60,
    height: 60,
    borderRadius: 60,
    backgroundColor: colors.lightBlue,
    position: "absolute",
    opacity: 0.5,
  },
});

export default BlueCircle;
