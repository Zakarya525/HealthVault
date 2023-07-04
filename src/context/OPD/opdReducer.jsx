export default (state, action) => {
  switch (action.type) {
    case "SET_OPDS":
      return {
        ...state,
        OPDs: action.payload,
        isLoading: false,
      };
    case "SET_ACTIVE_OPD":
      return {
        ...state,
        activeOPDs: action.payload,
        isLoading: false,
      };
    case "SET_OPD":
      return {
        ...state,
        OPD: action.payload,
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
  }
};
