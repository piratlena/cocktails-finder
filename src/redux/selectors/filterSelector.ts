import { RootState } from "../store/store";

function getFilters(state: RootState) {
  return state.filter;
}

export default getFilters;
