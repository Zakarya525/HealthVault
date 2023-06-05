import { useEffect, useReducer } from "react";

import AuthContext from "./authContext";
import AuthReducer from "./authReducer";

import {
  deleteAuthToken,
  saveAuthToken,
  getAuthToken,
} from "../../storage/SecureStore";
import { loginUser } from "../../services/user/api";

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
    console.log("I am in context");
    setLoading();
    const res = await loginUser(values);
    if (res?.status === 200) {
      saveAuthToken("token", res.jwt);
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
  // useEffect(() => {
  //   setLoading();
  //   const handleAutoLogin = () => {
  //     getAuthToken().then((token) => {
  //       console.log(token);
  //       if (!token) {
  //         return;
  //       }

  //       signInWithCustomToken(FIREBASE_AUTH, token)
  //         .then((userCredential) => {
  //           const user = userCredential.user;
  //           if (user) {
  //             dispatch({
  //               type: "GET_USER",
  //               payload: user,
  //               token,
  //             });
  //           }
  //         })
  //         .catch((error) => {
  //           console.log("Auto login failed:", error);
  //           dispatch({
  //             type: "SET_LOADING_FALSE",
  //           });
  //         });
  //     });
  //   };

  //   handleAutoLogin();
  // }, []);

  // Log out user
  const logOut = async () => {
    // try {
    //   await signOut(FIREBASE_AUTH);
    //   await deleteAuthToken();
    // } catch (error) {
    //   console.log("Logout failed:", error);
    // }
    // dispatch({ type: "LOGOUT" });
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
