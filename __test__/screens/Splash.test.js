import React from "react";
import { render } from "@testing-library/react-native";
import Splash from "../../src/screens/Splash";
import { NavigationContainer, useNavigation } from "@react-navigation/native";

jest.useFakeTimers();

jest.mock("@react-navigation/native", () => ({
  ...jest.requireActual("@react-navigation/native"),
  useNavigation: jest.fn(),
}));

jest.mock("react-native-vector-icons/FontAwesome5", () => "Icon");

describe("Splash", () => {
  it("renders correctly", () => {
    useNavigation.mockReturnValue({
      navigate: jest.fn(),
    });

    const { getByTestId } = render(
      <NavigationContainer>
        <Splash />
      </NavigationContainer>
    );

    expect(getByTestId("icon")).toBeTruthy();
    expect(getByTestId("header")).toBeTruthy();

    jest.runAllTimers();
  });
});
