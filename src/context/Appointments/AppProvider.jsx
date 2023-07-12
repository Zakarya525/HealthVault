import { useEffect, useReducer } from "react";
import AppReducer from "./appReducer";
import AppContext from "./appContext";
import ApiManager from "@services/ApiManager";
import { getAuthToken } from "../../storage/SecureStore";
import { useAuth } from "../Authentication";
import moment from "moment";

export const AppProvider = ({ children }) => {
  const initialState = {
    appointments: [],
    appointment: {},
    pendingAppointment: {},
    isLoading: false,
  };

  const { isLoggedIn } = useAuth();

  const { user } = useAuth();

  const [state, dispatch] = useReducer(AppReducer, initialState);

  const setLoading = () => dispatch({ type: "SET_LOADING" });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await ApiManager.get(`appointment/patient/${user._id}`);

        dispatch({
          type: "SET_APPOINTMENTS",
          payload: res.data.items,
        });
      } catch (error) {
        console.log("Error:", error);
      } finally {
        dispatch({
          type: "SET_LOADING_FALSE",
        });
      }
    };

    fetchData();
  }, [isLoggedIn, state.appointment]);

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
