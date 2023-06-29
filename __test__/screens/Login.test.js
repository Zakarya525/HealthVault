import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { NavigationContainer } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import Login from "../../src/screens/Authentication/Login";
import * as AuthContext from "../../src/context/Authentication";

jest.mock("../../src/context/Authentication");

// Mock the useNavigation hook
jest.mock("@react-navigation/native", () => {
  const actualNav = jest.requireActual("@react-navigation/native");
  return {
    ...actualNav,
    useNavigation: jest.fn(),
  };
});

describe("Login", () => {
  it("should handle login when form is submitted", () => {
    const signInMock = jest.fn(); // Create a mock function
    AuthContext.useAuth.mockReturnValue({
      isLoading: false,
      signIn: signInMock,
    });

    // Mock the navigation object
    useNavigation.mockReturnValue({ navigate: jest.fn() });

    const { getByPlaceholderText, getByText } = render(
      <NavigationContainer>
        <Login />
      </NavigationContainer>
    );

    const cnicInput = getByPlaceholderText("CNIC");
    const passwordInput = getByPlaceholderText("Password");
    const signInButton = getByText("Sign In");

    // Simulate user input
    fireEvent.changeText(cnicInput, "123456789");
    fireEvent.changeText(passwordInput, "password123");

    // Simulate form submission
    fireEvent.press(signInButton);

    // Assert that signIn function was called with the correct values
    expect(signInMock).toHaveBeenCalledWith({
      cnic: "123456789",
      password: "password123",
    });
  });
});
