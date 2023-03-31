import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IFilterSlice } from "../../types/filters";

const initialState: IFilterSlice = {
  name: "",
  drink: "",
  glass: "",
  alcohol: "",
  query: "",
  isLoading: true,
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      return { ...state, name: action.payload };
    },
    setFilter: (state, action: PayloadAction<any>) => {
      return { ...state, [action.payload.type]: action.payload.value };
    },
    resetFilters: (state, action: PayloadAction) => {
      const inputsArr = document.querySelectorAll("input[data-checked]");
      inputsArr.forEach((inp) => inp.setAttribute("data-checked", "false"));
      return initialState;
    },
    setQuery: (state, action: PayloadAction<string>) => {
      state.query = action.payload;
    },
  },
});

export const { setName, setFilter, resetFilters } = filterSlice.actions;

export default filterSlice.reducer;
