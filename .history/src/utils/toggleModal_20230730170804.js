import { createSlice } from "@reduxjs/toolkit";

export const toggleModal = createSlice({
  name: "modal",
  initialState: {
    value: false,
    components: null,
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
export const { change, setComponents } = counterSlice.actions;

export default counterSlice.reducer;
