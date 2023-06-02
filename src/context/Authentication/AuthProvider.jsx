import { useEffect, useReducer } from "react";
import {
  signInWithEmailAndPassword,
  signInWithCustomToken,
  signOut,
} from "firebase/auth";
import AuthContext from "./authContext";
import AuthReducer from "./authReducer";
import { FIREBASE_AUTH } from "../../../firebaseConfig";
import {
  deleteAuthToken,
  saveAuthToken,
  getAuthToken,
} from "../../storage/SecureStore";

export const AuthProvider = ({ children }) => {
  const token = getAuthToken();

  const initialState = {
    user: {},
    isLoading: false,
    token: "",
  };
  const [state, dispatch] = useReducer(AuthReducer, initialState);

  const setLoading = () => dispatch({ type: "SET_LOADING" });

  // Get user token
  const signIn = async ({ email, password }) => {
    setLoading();
    try {
      const userCredential = await signInWithEmailAndPassword(
        FIREBASE_AUTH,
        email,
        password
      );
      const user = userCredential.user;
      if (user) {
        saveAuthToken(user.accessToken);
        dispatch({
          type: "LOGIN_USER_AND_GET_TOKEN",
          token: user.accessToken,
          user,
        });
      } else {
        dispatch({ type: "SET_LOADING_FALSE" });
      }
    } catch (error) {
      dispatch({
        type: "SET_LOADING_FALSE",
      });
      console.log("Sign in failed:", error);
    }
  };

  // Get user data
  // useEffect(() => {
  //   setLoading();
  //   const handleAutoLogin = () => {
  //     getAuthToken().then((token) => {
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
  //         });
  //     });
  //   };

  //   handleAutoLogin();
  // }, []);

  // Log out user
  const logOut = async () => {
    try {
      await signOut(FIREBASE_AUTH);
      await deleteAuthToken();
    } catch (error) {
      console.log("Logout failed:", error);
    }
    dispatch({ type: "LOGOUT" });
  };

  return (
    <AuthContext.Provider
      value={{
        isLoading: state.isLoading,
        user: state.user,
        token: state.token,
        signIn,
        logOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
