import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  opds: [],
  selectedOpd: null,
};

const opdSlice = createSlice({
  name: "opdSlice",
  initialState,

  reducers: {
    setOpds: (state, action) => {
      state.opds = action.payload;
    },
    setSelectedOpd: (state, action) => {
      state.selectedOpd = action.payload;
    },
  },
});

export const { setOpds, setSelectedOpd } = opdSlice.actions;
export default opdSlice.reducer;
