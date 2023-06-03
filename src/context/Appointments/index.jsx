import appContext from "./appContext";
import { useContext } from "react";

export { AppProvider } from "./AppProvider";
export const useAppointment = () => useContext(appContext);
