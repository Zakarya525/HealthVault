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

  reducer: {},
});

export const {} = authSlice.actions;
export default authSlice.reducer;
