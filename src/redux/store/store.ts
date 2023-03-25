import { configureStore, combineReducers } from "@reduxjs/toolkit";
import barSlice from "../reducers/barReducer";
import { useDispatch } from "react-redux";

const store = configureStore({
  reducer: {
    bar: barSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
