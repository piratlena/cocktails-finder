import { configureStore, combineReducers } from "@reduxjs/toolkit";
import barSlice from "../reducers/recipiesReducer";
import paginationSlice from "../reducers/paginationReducer";
import filterSlice from "../reducers/filterReducer";
import { useDispatch } from "react-redux";

const store = configureStore({
  reducer: {
    recipies: barSlice,
    pagination: paginationSlice,
    filter: filterSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
