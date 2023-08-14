import { configureStore } from "@reduxjs/toolkit";
import toggleModal from "./utils/toggleModal";

export default configureStore({
  reducer: {
    counter: toggleModal,
  },
});
