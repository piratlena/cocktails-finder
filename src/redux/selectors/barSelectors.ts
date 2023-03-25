import { RootState } from "../store/store";

function getBarItems(state: RootState) {
  return state.bar;
}

export default getBarItems;
