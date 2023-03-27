import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IPage {
  currentPage: number;
}
const initialState: IPage = {
  currentPage: 1,
};

export const paginationSlice = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    setCurrentPage(state, action: PayloadAction<number>) {
      return { currentPage: action.payload };
    },
    resetPage() {
      return { currentPage: 1 };
    },
  },
});

export const { setCurrentPage, resetPage } = paginationSlice.actions;

export default paginationSlice.reducer;
