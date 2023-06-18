import { useEffect, useReducer } from "react";
import ApiManager from "@services/ApiManager";

import OpdContext from "./opdContext";
import OpdReducer from "./opdReducer";

export const OpdProvider = ({ children }) => {
  const initialState = {
    OPDs: [],
    activeOPD: {},
  };
  const [state, dispatch] = useReducer(OpdReducer, initialState);

  const setLoading = () => dispatch({ type: "SET_LOADING" });

  useEffect(() => {
    setLoading();
    const fetchData = async () => {
      try {
        const res = await ApiManager.get("/opd");
        if (res?.data) {
          dispatch({
            type: "SET_OPDS",
            payload: res.data.items,
          });
        }
      } catch (error) {
        console.log("API Error:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    setLoading();
    const fetchData = async () => {
      try {
        const res = await ApiManager.get("/opd/active");
        if (res?.data) {
          dispatch({
            type: "SET_ACTIVE_OPD",
            payload: res.data.items,
          });
        }
      } catch (error) {
        console.log("API Error:", error);
      }
    };

    fetchData();
  }, []);

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
