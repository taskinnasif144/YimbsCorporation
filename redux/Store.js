import { configureStore } from "@reduxjs/toolkit";
import authDialogReducer from "./Slices/AuthDialogSlice";

export const store = configureStore({
  reducer: {
    authDialog: authDialogReducer,
  },
});
