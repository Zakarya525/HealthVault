import React from "react";
import { render, fireEvent, waitFor, act } from "@testing-library/react-native";
import Login from "../../src/screens/Authentication/Login";
import { AuthProvider } from "@context/Authentication";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as userApi from "@services/user/api";

const Stack = createNativeStackNavigator();

const MockHomeScreen = () => <></>;

describe("Login and AuthProvider integration", () => {
  it("should navigate to the Home screen after a successful login", async () => {
    jest.spyOn(userApi, "loginUser").mockResolvedValue({
      code: "authenticated",
      jwt: "fake-jwt-token",
      items: {},
    });

    const { findByPlaceholderText, findByText } = render(
      <NavigationContainer>
        <AuthProvider>
          <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Home" component={MockHomeScreen} />
          </Stack.Navigator>
        </AuthProvider>
      </NavigationContainer>
    );

    const cnicInput = await findByPlaceholderText("CNIC");
    const passwordInput = await findByPlaceholderText("Password");
    const signInButton = await findByText("Sign In");

    await act(async () => {
      fireEvent.changeText(cnicInput, "12345-1234567-1");
      fireEvent.changeText(passwordInput, "1234abcd");
      fireEvent.press(signInButton);
      await waitFor(() => expect(findByText("Home")).toBeTruthy());
    });
  });
});
