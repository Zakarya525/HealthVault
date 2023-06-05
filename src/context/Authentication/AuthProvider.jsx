import { useEffect, useReducer } from "react";

import AuthContext from "./authContext";
import AuthReducer from "./authReducer";

import {
  deleteAuthToken,
  saveAuthToken,
  getAuthToken,
} from "../../storage/SecureStore";
import { getUserMe, loginUser } from "../../services/user/api";

export const AuthProvider = ({ children }) => {
  const initialState = {
    user: {},
    isLoading: false,
    token: "",
  };
  const [state, dispatch] = useReducer(AuthReducer, initialState);

  const setLoading = () => dispatch({ type: "SET_LOADING" });

  // Get user token
  const signIn = async (values) => {
    setLoading();
    const res = await loginUser(values);
    if (res?.code === "authenticated") {
      saveAuthToken(res.jwt);
      dispatch({
        type: "LOGIN_USER_AND_GET_TOKEN",
        token: res.jwt,
      });
    } else {
      console.log("User not found");
      dispatch({
        type: "SET_LOADING_FALSE",
      });
    }
  };

  // Get user data
  useEffect(() => {
    setLoading();
    getAuthToken().then((token) => {
      console.log("This is token", token);
      getUserMe(token).then((res) => {
        if (res?.code === "authenticated") {
          dispatch({
            type: "GET_USER",
            payload: res.items,
            token: token,
          });
        }
      });
    });
  }, [state.token]);

  // Log out user
  const logOut = async () => {
    try {
      await deleteAuthToken();
      dispatch({ type: "LOGOUT" });
      console.log(
        "Logged Out! and the token is: ",
        getAuthToken(),
        state.isLoading
      );
    } catch (error) {
      console.log("Logout failed:", error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        ...state,
        signIn,
        logOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
