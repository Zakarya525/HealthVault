import opdContext from "./opdContext";
import { useContext } from "react";

export { OpdProvider } from "./opdProvider";

export const useOPD = () => useContext(opdContext);
