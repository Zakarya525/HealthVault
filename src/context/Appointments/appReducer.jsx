export default (state, action) => {
  switch (action.type) {
    case "SET_APPOINTMENTS":
      return {
        ...state,
        appointments: action.payload,
        isLoading: false,
      };
    case "SET_PENDING_APPOINTMENTS":
      return {
        ...state,
        pendingAppointment: action.payload,
        isLoading: false,
      };
    case "SET_LOADING":
      return {
        ...state,
        isLoading: true,
      };
    case "SET_LOADING_FALSE":
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};
