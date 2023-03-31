import { RootState } from "../store/store";

function getListRecipies(state: RootState) {
  return state.recipies;
}

export default getListRecipies;
