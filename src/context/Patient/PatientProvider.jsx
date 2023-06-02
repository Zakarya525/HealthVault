import { useEffect, useReducer } from "react";
import PatientReducer from "./PatientReducer";
import PatientContext from "./patientContext";
import { collection, query, getDocs, addDoc } from "firebase/firestore";
import { FIRESTORE_DB } from "../../../firebaseConfig";

export const PatientProvider = ({ children }) => {
  const initialState = {
    patients: [],
    patientCount: 0,
    counter: 0,
    isLoading: false,
  };

  const [state, dispatch] = useReducer(PatientReducer, initialState);

  const setLoading = () => dispatch({ type: "SET_LOADING" });

  useEffect(() => {
    setLoading();
    const fetchPatients = async () => {
      try {
        const querySnapshot = await getDocs(
          query(collection(FIRESTORE_DB, "patients"))
        );
        const fetchedPatients = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        console.log(fetchedPatients.length);
        dispatch({
          type: "SET_PATIENTS",
          payload: fetchedPatients,
          count: fetchedPatients.length,
        });
      } catch (error) {
        console.log("Error fetching patients:", error);
      }
    };

    fetchPatients();
  }, [state.patientCount]);

  const addPatient = async (patientData) => {
    setLoading();
    if (state.patientCount >= 10) {
      return;
    }

    try {
      const patientCollectionRef = collection(FIRESTORE_DB, "patients");
      await addDoc(patientCollectionRef, patientData);
      dispatch({ type: "INCREMENT_PATIENT_COUNT" });
      dispatch({ type: "INCREMENT_COUNTER" });
    } catch (error) {
      console.log("Error adding patient:", error);
    }
  };

  return (
    <PatientContext.Provider value={{ ...state, addPatient }}>
      {children}
    </PatientContext.Provider>
  );
};
