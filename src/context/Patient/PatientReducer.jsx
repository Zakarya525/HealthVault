export default (state, action) => {
  switch (action.type) {
    case "SET_PATIENTS":
      return {
        ...state,
        patients: action.payload,
        patientCount: action.count,
        isLoading: false,
      };
    case "INCREMENT_PATIENT_COUNT":
      return {
        ...state,
        patientCount: state.patientCount + 1,
      };
    case "INCREMENT_COUNTER":
      return {
        ...state,
        counter: state.counter + 1,
        isLoading: false,
      };
    case "SET_LOADING":
      return {
        ...state,
        isLoading: true,
      };
    default:
      return state;
  }
};
