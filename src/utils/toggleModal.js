import { createSlice } from "@reduxjs/toolkit";
import { connect } from "react-redux";
export const toggleModal = createSlice({
  name: "modal",
  initialState: {
    isShow: false,
    components: null,
  },
  reducers: {
    change: (state) => {
      state.isShow = !state.isShow;
    },
    setComponents: (state, action) => {
      state.components = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { change, setComponents } = toggleModal.actions;

export default toggleModal.reducer;
