import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICard } from "../../types/Card";

interface IBar {
  itemInBar: ICard[];
  isLoading: boolean;
}

const initialState: IBar = {
  itemInBar: [],
  isLoading: true,
};

const barSlice = createSlice({
  name: "bar",
  initialState,
  reducers: {
    setItemInBar(state, action) {
      state.itemInBar = action.payload;
      state.isLoading = false;
    },
  },
});
export const { setItemInBar } = barSlice.actions;
export default barSlice.reducer;
