import { useEffect, useReducer } from "react";

import DoctorContext from "./doctorContext";
import DoctorReducer from "./doctorReducer";

import { getDoctors, getDoctor } from "../../services/doctor/api";

export const DoctorProvider = ({ children }) => {
  const initialState = {
    doctors: [],
    doctor: {},
    isAlert: false,
  };
  const [state, dispatch] = useReducer(DoctorReducer, initialState);

  const setLoading = () => dispatch({ type: "SET_LOADING" });

  useEffect(() => {
    console.log("Before calling useEffect");
    setLoading();

    getDoctors().then((res) => {
      if (res?.code === "ok") {
        dispatch({
          type: "GET_DOCTORS",
          payload: res.items,
        });
      } else {
        dispatch({
          type: "SET_ALERT",
        });
      }
      dispatch({ type: "SET_LOADING_FALSE" });
    });
  }, []);

  const getDoctorById = (id) => {
    setLoading();
    getDoctor(id).then((res) => {
      if (res?.code === "ok") {
        dispatch({
          type: "GET_DOCTOR",
          payload: res.items,
        });
      } else {
        dispatch({
          type: "SET_ALERT",
        });
      }
    });
  };

  return (
    <DoctorContext.Provider
      value={{
        ...state,
        getDoctorById,
      }}
    >
      {children}
    </DoctorContext.Provider>
  );
};
