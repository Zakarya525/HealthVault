import { useEffect, useReducer } from "react";
import ApiManager from "@services/ApiManager";
import OpdContext from "./opdContext";
import OpdReducer from "./opdReducer";

export const OpdProvider = ({ children }) => {
  const initialState = {
    OPDs: [],
    activeOPDs: [],
    OPD: {},
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
        if (res?.data)
          dispatch({
            type: "SET_ACTIVE_OPD",
            payload: res.data.items,
          });
      } catch (error) {
        console.log("API Error:", error);
      }
    };

    fetchData();
  }, []);

  const getOpdById = async (id) => {
    try {
      const res = await ApiManager.get(`opd/${id}`);
      if (res?.data)
        dispatch({
          type: "SET_OPD",
          payload: res.data.items,
        });
    } catch (error) {
      console.log("API Error:", error);
    } finally {
      dispatch({
        type: "SET_LOADING_FALSE",
      });
    }
  };

  return (
    <OpdContext.Provider
      value={{
        ...state,
        getOpdById,
      }}
    >
      {children}
    </OpdContext.Provider>
  );
};
