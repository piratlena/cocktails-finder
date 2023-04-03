import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICard } from "../../types/Card";

interface IListRecipies {
  itemsInList: ICard[];
  isLoading: boolean;
  query: string;
}

const initialState: IListRecipies = {
  itemsInList: [],
  isLoading: true,
  query: "",
};

const recipiesSlice = createSlice({
  name: "recipies",
  initialState,
  reducers: {
    setItemsInList(state, action) {
      state.itemsInList = action.payload;
      state.isLoading = false;
    },
    setQuery(state, action: PayloadAction<string>) {
      state.query = action.payload;
      state.itemsInList = [];
    },
  },
});
export const { setItemsInList, setQuery } = recipiesSlice.actions;
export default recipiesSlice.reducer;
