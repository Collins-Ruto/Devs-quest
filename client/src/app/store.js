import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import allReducers from "../reducers"

export default configureStore({
  reducer: allReducers,
  middleware: getDefaultMiddleware(),
  // do not forget this
  devTools: process.env.NODE_ENV !== "production",
});