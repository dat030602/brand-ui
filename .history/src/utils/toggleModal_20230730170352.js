import { createSlice } from "@reduxjs/toolkit";

export const toggleModal = createSlice({
  name: "modal",
  initialState: {
    value: false,
  },
  reducers: {
    change: (state) => {
      state.value = !state.value;
    },
  },
});

// Action creators are generated for each case reducer function
export const { change } = counterSlice.actions;

export default counterSlice.reducer;
