import React from "react";
import { render, act } from "@testing-library/react-native";
import { NavigationContainer } from "@react-navigation/native";
import Welcome from "../../src/screens/Welcome";

jest.mock("@react-navigation/native", () => ({
  ...jest.requireActual("@react-navigation/native"),
  useNavigation: jest.fn(),
}));

describe("Welcome", () => {
  it("navigates to UserGuide1 screen after 3 seconds", async () => {
    const mockReplace = jest.fn();

    jest.useFakeTimers();

    jest.requireMock("@react-navigation/native").useNavigation.mockReturnValue({
      replace: mockReplace,
    });

    render(
      <NavigationContainer>
        <Welcome />
      </NavigationContainer>
    );

    act(() => {
      jest.advanceTimersByTime(3000);
    });

    expect(mockReplace).toHaveBeenCalledWith("UserGuide1");
  });
});
