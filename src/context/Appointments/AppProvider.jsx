import { useEffect, useReducer } from "react";
import AppReducer from "./appReducer";
import AppContext from "./appContext";
import { collection, query, getDocs, addDoc } from "firebase/firestore";
import { FIRESTORE_DB } from "../../../firebaseConfig";

export const AppProvider = ({ children }) => {
  const initialState = {
    appointments: [],
    isLoading: false,
  };

  const [state, dispatch] = useReducer(AppReducer, initialState);

  const setLoading = () => dispatch({ type: "SET_LOADING" });

  //   useEffect(() => {
  //     setLoading();
  //     const fetchAppointments = async () => {
  //       try {
  //         const querySnapshot = await getDocs(
  //           query(collection(FIRESTORE_DB, "appointments"))
  //         );
  //         const fetchedAppointments = querySnapshot.docs.map((doc) => ({
  //           id: doc.id,
  //           ...doc.data(),
  //         }));
  //         dispatch({
  //           type: "SET_APPOINTMENTS",
  //           payload: fetchedAppointments,
  //         });
  //       } catch (error) {
  //         console.log("Error fetching appointments:", error);
  //       }
  //     };

  //     fetchAppointments();
  //   }, []);

  const setAppointment = async (data) => {
    console.log(data);
    setLoading();

    try {
      const appointmentsCollection = collection(FIRESTORE_DB, "appointments");
      await addDoc(appointmentsCollection, data);

      alert("Appointment booked successfully!");
      dispatch({
        type: "SET_LAODING_FALSE",
      });
    } catch (error) {
      console.log("Error booking appointment:", error);
      alert("Failed to book appointment. Please try again.");
    }
  };

  return (
    <AppContext.Provider value={{ ...state, setAppointment }}>
      {children}
    </AppContext.Provider>
  );
};
