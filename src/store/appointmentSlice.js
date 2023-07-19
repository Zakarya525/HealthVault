import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  addAppointment: 0,
};

const appointmentSlice = createSlice({
  name: "opdSlice",
  initialState,

  reducers: {
    setAddAppointment: (state, action) => {
      state.addAppointment = state.addAppointment + 1;
    },
  },
});

export const { setAddAppointment } = appointmentSlice.actions;
export default appointmentSlice.reducer;
