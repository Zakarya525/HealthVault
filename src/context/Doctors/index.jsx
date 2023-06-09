import DoctorContext from "./doctorContext";
import { useContext } from "react";

export { DoctorProvider } from "./DoctorProvider";
export const useDoctor = () => useContext(DoctorContext);
