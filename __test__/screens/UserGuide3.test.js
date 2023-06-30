import React from "react";
import { render, screen, act, fireEvent } from "@testing-library/react-native";
import { NavigationContainer } from "@react-navigation/native";
import UserGuide3 from "../../src/screens/UserGuide/UserGuide3";

jest.mock("@react-navigation/native", () => ({
  ...jest.requireActual("@react-navigation/native"),
  useNavigation: jest.fn(),
}));

describe("UserGuide3", () => {
  it("navigates to Login screen when Next button is pressed", async () => {
    const mockNavigate = jest.fn();

    jest.useFakeTimers();

    jest.requireMock("@react-navigation/native").useNavigation.mockReturnValue({
      navigate: mockNavigate,
    });

    render(
      <NavigationContainer>
        <UserGuide3 />
      </NavigationContainer>
    );

    act(() => {
      jest.advanceTimersByTime(500);
    });

    const nextButton = screen.getByTestId("button");
    act(() => {
      fireEvent.press(nextButton);
    });
    expect(mockNavigate).toHaveBeenCalledWith("Login");
  });
});
