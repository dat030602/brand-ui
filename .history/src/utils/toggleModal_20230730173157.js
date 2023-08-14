import { createSlice } from "@reduxjs/toolkit";

export const toggleModal = createSlice({
  name: "modal",
  initialState: {
    value: 0,
  },
  reducers: {
    change: (state) => {
      state.value = !state.value;
    },
    setComponents: (state, action) => {
      state.components = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { change, setComponents } = toggleModal.actions;
export const value = (state) => state.modal.value;

export default toggleModal.reducer;
