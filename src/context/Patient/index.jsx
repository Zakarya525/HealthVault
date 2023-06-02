import patientContext from "./patientContext";
import { useContext } from "react";

export { PatientProvider } from "./PatientProvider";
export const usePatient = () => useContext(patientContext);
