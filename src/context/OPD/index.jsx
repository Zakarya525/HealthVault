import OpdContext from "./opdContext";
import { useContext } from "react";

export { OpdProvider } from "./OpdProvider";
export const useOPD = () => useContext(OpdContext);
