import { useEffect, useReducer } from "react";
import AppReducer from "./appReducer";
import AppContext from "./appContext";
import ApiManager from "@services/ApiManager";
import { getAuthToken } from "../../storage/SecureStore";
import moment from "moment";

export const AppProvider = ({ children }) => {
  const initialState = {
    appointments: [],
    appointment: {},
    isLoading: false,
  };

  const [state, dispatch] = useReducer(AppReducer, initialState);

  const setLoading = () => dispatch({ type: "SET_LOADING" });

  const setAppointment = (data, opdId) => {
    console.log(data, opdId);

    setLoading();

    getAuthToken().then((token) => {
      if (!token) {
        dispatch({ type: "SET_LOGGEDIN_FALSE" });
        dispatch({ type: "SET_LOADING_FALSE" });
        return;
      }

      const requestData = {
        fromTime: moment(data.fromTime, "hh:mm A").toDate(),
        toTime: moment(data.toTime, "hh:mm A").toDate(),
        opdId: opdId,
      };
      console.log(requestData);
      ApiManager.post("/appointment", requestData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => {
          console.log(res.data.code);
          dispatch({
            type: "SET_APPOINTMENT",
            payload: res.data.items,
          });
        })
        .catch((error) => {
          console.log("Error creating appointment:", error.response.data);
        });
    });
  };

  return (
    <AppContext.Provider value={{ ...state, setAppointment }}>
      {children}
    </AppContext.Provider>
  );
};
