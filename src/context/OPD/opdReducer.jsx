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
        activeOPD: action.payload,
        isLoading: false,
      };

    case "SET_LOADING":
      return {
        ...state,
        isLoading: true,
      };
  }
};
