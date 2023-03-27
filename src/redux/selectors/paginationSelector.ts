import { RootState } from "../store/store";

function getPage(state: RootState) {
  return state.pagination;
}

export default getPage;
