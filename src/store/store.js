import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import { loginApi } from "../services/loginApi";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

const store = configureStore({
  reducer: {
    auth: authReducer,
    [loginApi.reducerPath]: loginApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(loginApi.middleware),
});

setupListeners(store.dispatch);

export default store;
