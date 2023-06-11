import { useEffect, useReducer } from "react";

import OpdContext from "./opdContext";
import OpdReducer from "./opdReducer";

export const OpdProvider = ({ children }) => {
  const initialState = {
    doctors: [],
    doctor: {},
  };
  const [state, dispatch] = useReducer(OpdReducer, initialState);

  const setLoading = () => dispatch({ type: "SET_LOADING" });

  //   useEffect(() => {
  //     console.log("Before calling useEffect");
  //     setLoading();

  //     getOpd().then((res) => {
  //       if (res?.code === "ok") {
  //         dispatch({
  //           type: "GET_DOCTORS",
  //           payload: res.items,
  //         });
  //       }
  //       dispatch({ type: "SET_LOADING_FALSE" });
  //     });
  //   }, []);

  return (
    <OpdContext.Provider
      value={{
        ...state,
      }}
    >
      {children}
    </OpdContext.Provider>
  );
};
