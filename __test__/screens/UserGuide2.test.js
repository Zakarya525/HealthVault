import React from "react";
import { render, screen, act, fireEvent } from "@testing-library/react-native";
import { NavigationContainer } from "@react-navigation/native";
import UserGuide2 from "../../src/screens/UserGuide/UserGuide2";

jest.mock("@react-navigation/native", () => ({
  ...jest.requireActual("@react-navigation/native"),
  useNavigation: jest.fn(),
}));

describe("UserGuide2", () => {
  it("navigates to UserGuide3 screen when Next button is pressed", async () => {
    const mockNavigate = jest.fn();

    jest.useFakeTimers();

    jest.requireMock("@react-navigation/native").useNavigation.mockReturnValue({
      navigate: mockNavigate,
    });

    render(
      <NavigationContainer>
        <UserGuide2 />
      </NavigationContainer>
    );

    act(() => {
      jest.advanceTimersByTime(500);
    });

    const nextButton = screen.getByTestId("button");
    act(() => {
      fireEvent.press(nextButton);
    });
    expect(mockNavigate).toHaveBeenCalledWith("UserGuide3");
  });
});
