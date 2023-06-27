import React from "react";
import {
  render,
  screen,
  fireEvent,
  waitFor,
} from "@testing-library/react-native";
import { Login } from "./Login";

describe("Login Component", () => {
  test("renders correctly", () => {
    render(<Login />);

    // Find input fields by placeholder text
    const cnicInput = screen.getByPlaceholderText("CNIC");
    const passwordInput = screen.getByPlaceholderText("Password");

    // Find buttons by text
    const signInButton = screen.getByText("Sign In");
    const forgotPasswordButton = screen.getByText("Forgot Password?");
    const signUpButton = screen.getByText("Don't have an account? Sign Up");

    // Ensure all the necessary UI elements are rendered
    expect(cnicInput).toBeDefined();
    expect(passwordInput).toBeDefined();
    expect(signInButton).toBeDefined();
    expect(forgotPasswordButton).toBeDefined();
    expect(signUpButton).toBeDefined();
  });

  test("validates CNIC field", async () => {
    render(<Login />);

    // Find input fields by placeholder text
    const cnicInput = screen.getByPlaceholderText("CNIC");
    const passwordInput = screen.getByPlaceholderText("Password");
    const signInButton = screen.getByText("Sign In");

    // Enter invalid CNIC value
    fireEvent.changeText(cnicInput, "1234");
    fireEvent.press(signInButton);

    await waitFor(() => {
      // Expect error message to be displayed
      const cnicError = screen.getByText("Email is required");
      expect(cnicError).toBeDefined();
    });

    // Clear CNIC field
    fireEvent.changeText(cnicInput, "");

    // Enter valid CNIC value
    fireEvent.changeText(cnicInput, "1234567890123");
    fireEvent.press(signInButton);

    await waitFor(() => {
      // Expect error message to be cleared
      const cnicError = screen.queryByText("Email is required");
      expect(cnicError).toBeNull();
    });
  });

  test("validates password field", async () => {
    render(<Login />);

    // Find input fields by placeholder text
    const passwordInput = screen.getByPlaceholderText("Password");
    const signInButton = screen.getByText("Sign In");

    // Enter invalid password value
    fireEvent.changeText(passwordInput, "123");
    fireEvent.press(signInButton);

    await waitFor(() => {
      // Expect error message to be displayed
      const passwordError = screen.getByText(
        "Password must be at least 8 characters"
      );
      expect(passwordError).toBeDefined();
    });

    // Clear password field
    fireEvent.changeText(passwordInput, "");

    // Enter valid password value
    fireEvent.changeText(passwordInput, "password123");
    fireEvent.press(signInButton);

    await waitFor(() => {
      // Expect error message to be cleared
      const passwordError = screen.queryByText(
        "Password must be at least 8 characters"
      );
      expect(passwordError).toBeNull();
    });
  });

  test("triggers the signIn function", async () => {
    const signInMock = jest.fn();
    render(<Login signIn={signInMock} />);

    // Find input fields by placeholder text
    const cnicInput = screen.getByPlaceholderText("CNIC");
    const passwordInput = screen.getByPlaceholderText("Password");
    const signInButton = screen.getByText("Sign In");

    // Enter valid values and trigger signIn
    fireEvent.changeText(cnicInput, "1234567890123");
    fireEvent.changeText(passwordInput, "password123");
    fireEvent.press(signInButton);

    await waitFor(() => {
      // Expect the signIn function to be called with the correct values
      expect(signInMock).toHaveBeenCalledWith({
        cnic: "1234567890123",
        password: "password123",
      });
    });
  });
});
