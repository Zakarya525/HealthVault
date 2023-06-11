export default (state, action) => {
  switch (action.type) {
    case "GET_DOCTOR":
      return {
        ...state,
        doctor: action.payload,
        isLoading: false,
      };
    case "GET_DOCTORS":
      return {
        ...state,
        doctors: action.payload,
        isLoading: false,
      };

    case "SET_LOADING":
      return {
        ...state,
        isLoading: true,
      };
    case "SET_ALERT":
      return {
        ...state,
        isAlert: true,
      };

    case "SET_LOADING_FALSE":
      return {
        ...state,
        isLoading: false,
      };
  }
};
