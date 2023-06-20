import { useEffect, useRef, useReducer } from "react";
import AuthContext from "./authContext";
import AuthReducer from "./authReducer";
import {
  deleteAuthToken,
  saveAuthToken,
  getAuthToken,
} from "../../storage/SecureStore";
import { getUserMe, loginUser } from "@services/user/api";

export const AuthProvider = ({ children }) => {
  const initialState = {
    user: {},
    isLoading: true,
    token: "",
    isLoggedIn: false,
  };
  const [state, dispatch] = useReducer(AuthReducer, initialState);

  const setLoading = () => dispatch({ type: "SET_LOADING" });

  const signIn = async (values) => {
    setLoading();
    const res = await loginUser(values);
    res?.code === "authenticated"
      ? (saveAuthToken(res.jwt),
        dispatch({
          type: "LOGIN_USER",
          token: res.jwt,
          payload: res.items,
        }))
      : (console.log("User not found"),
        dispatch({
          type: "SET_LOADING_FALSE",
        }));
  };

  const isMountedRef = useRef(false);
  useEffect(() => {
    isMountedRef.current = true;
    setLoading();
    getAuthToken().then((token) => {
      if (!token) {
        dispatch({ type: "SET_LOGGEDIN_FALSE" });
        dispatch({ type: "SET_LOADING_FALSE" });
        return;
      }
      getUserMe(token).then((res) => {
        if (isMountedRef.current && res?.code === "authenticated") {
          dispatch({
            type: "GET_USER",
            payload: res.items,
            token: token,
          });
        } else {
          dispatch({ type: "SET_LOGGEDIN_FALSE" });
          dispatch({ type: "SET_LOADING_FALSE" });
        }
      });
    });

    return () => {
      isMountedRef.current = false;
    };
  }, []);

  const logOut = async () => {
    try {
      await deleteAuthToken();
      dispatch({ type: "LOGOUT" });
      console.log("User logged out successfully.");
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
