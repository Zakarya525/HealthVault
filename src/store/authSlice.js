import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null,
  isLoggedIn: false,
  user: null,
  isLoading: null,
};

const authSlice = createSlice({
  name: "authSlice",
  initialState,

  reducers: {
    setUser: (state, action) => {
      state.token = action.payload.token;
      state.user = action.payload.user;
      state.isLoggedIn = true;
    },

    logOut: (state, action) => {
      state.token = null;
      state.isLoggedIn = false;
    },
  },
});

export const { setUser, logOut } = authSlice.actions;
export default authSlice.reducer;
