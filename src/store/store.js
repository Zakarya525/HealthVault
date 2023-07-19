import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import opdReducer from "./opdSlice";
import appointmentReducer from "./appointmentSlice";
import { loginApi } from "../services/loginApi";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { opdApi } from "../services/opdApi";
import { doctorApi } from "../services/doctorApi";
import { userApi } from "../services/userApi";
import { appointmentApi } from "../services/appointmentApi";

const store = configureStore({
  reducer: {
    auth: authReducer,
    opd: opdReducer,
    appointment: appointmentReducer,
    [loginApi.reducerPath]: loginApi.reducer,
    [opdApi.reducerPath]: opdApi.reducer,
    [doctorApi.reducerPath]: doctorApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [appointmentApi.reducerPath]: appointmentApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      loginApi.middleware,
      opdApi.middleware,
      doctorApi.middleware,
      userApi.middleware,
      appointmentApi.middleware
    ),
});

setupListeners(store.dispatch);

export default store;
