import React, { useState } from "react";
import { View, StyleSheet, Animated } from "react-native";
import { colors } from "../utils";

const Pagination = ({ count, activeIndex }) => {
  const [activeDotPosition, setActiveDotPosition] = useState(
    new Animated.Value(activeIndex)
  );

  const handleActiveDotPosition = () => {
    Animated.timing(activeDotPosition, {
      toValue: activeIndex,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  handleActiveDotPosition();

  const dots = [];

  for (let i = 0; i < count; i++) {
    dots.push(
      <View
        key={i}
        style={[
          styles.dot,
          i === activeIndex ? styles.activeDot : styles.inactiveDot,
          {
            transform: [
              {
                scale: activeDotPosition
                  .interpolate({
                    inputRange: [i - 1, i, i + 1],
                    outputRange: [1, 1.5, 1],
                    extrapolate: "clamp",
                  })
                  .__getValue(),
              },
            ],
          },
        ]}
      />
    );
  }

  return <View style={styles.container}>{dots}</View>;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 6,
  },
  activeDot: {
    backgroundColor: colors.primaryColor,
  },
  inactiveDot: {
    backgroundColor: colors.lightBlue,
  },
});

export default Pagination;
