export default (state, action) => {
  switch (action.type) {
    case "GET_USER":
      return {
        ...state,
        user: action.payload,
        token: action.token,
        isLoading: false,
        isLoggedIn: true,
      };

    case "LOGIN_USER":
      return {
        ...state,
        token: action.token,
        user: action.payload,
        isLoading: false,
        isLoggedIn: true,
      };

    case "SET_USER":
      return {
        ...state,
        user: action.payload,
        isLoading: false,
      };

    case "SET_LOADING":
      return {
        ...state,
        isLoading: true,
      };

    case "LOGOUT":
      return {
        ...state,
        isLoading: false,
        isLoggedIn: false,
        token: "",
        user: {},
      };

    case "SET_LOADING_FALSE":
      return {
        ...state,
        isLoading: false,
      };
    case "SET_LOGGEDIN_FALSE":
      return {
        ...state,
        isLoggedIn: false,
        isLoading: false,
      };
  }
};
