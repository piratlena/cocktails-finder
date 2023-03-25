import axios from "axios";
import { AppDispatch } from "../store/store";
import { setItemInBar } from "../reducers/barReducer";

const fetchBarItems = () => {
  return async (dispatch: AppDispatch) => {
    try {
      const response = await axios.get(
        "https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list"
      );
      dispatch(setItemInBar(response.data.drinks));
      console.log(response.data.drinks);
    } catch (e) {
      console.log(e);
    }
  };
};
export default fetchBarItems;
