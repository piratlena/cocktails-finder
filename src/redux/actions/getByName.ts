import axios from "axios";
import { AppDispatch } from "../store/store";
import { setItemsInList } from "../reducers/recipiesReducer";

const getByName = (query: string) => {
  return async (dispatch: AppDispatch) => {
    try {
      const response = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`
      );
      dispatch(setItemsInList(response.data.drinks));
      console.log(response.data.drinks);
    } catch (e) {
      console.log(e);
    }
  };
};
export default getByName;
