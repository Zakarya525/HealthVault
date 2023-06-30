import React from "react";
import { render, fireEvent, act } from "@testing-library/react-native";
import Login from "../../src/screens/Authentication/Login";
import { NavigationContainer } from "@react-navigation/native";
import { AuthProvider } from "@context/Authentication";

describe("Login", () => {
  it("should allow the user to enter their CNIC and password", async () => {
    const { findByPlaceholderText } = render(
      <NavigationContainer>
        <AuthProvider>
          <Login />
        </AuthProvider>
      </NavigationContainer>
    );
    const cnicInput = await findByPlaceholderText("CNIC");
    const passwordInput = await findByPlaceholderText("Password");

    await act(async () => {
      fireEvent.changeText(cnicInput, "12345-1234567-1");
      fireEvent.changeText(passwordInput, "password123");
    });

    expect(cnicInput.props.value).toBe("12345-1234567-1");
    expect(passwordInput.props.value).toBe("password123");
  });
});
