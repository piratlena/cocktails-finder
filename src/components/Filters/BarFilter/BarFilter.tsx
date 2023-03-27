import { useAppDispatch } from "../../../redux/store/store";
import { resetFilters } from "../../../redux/reducers/filterReducer";
import { resetPage } from "../../../redux/reducers/paginationReducer";
import { IFilterSlice } from "../../../types/filters";

import Category from "../Category/Category";

import styles from "./BarFilter.module.scss";
import {
  TYPE_OF_DRINK,
  TYPE_OF_GLASS,
  ALCOHOL,
  FILTEROPTIONS,
} from "../../../consts/filterConsts";

const BarFilter: React.FC = () => {
  const dispatch = useAppDispatch();

  const clearHandler = () => {
    dispatch(resetFilters());
    dispatch(resetPage());
  };

  return (
    <div className="col-lg-4 col-12 mb-5 ">
      <div className="text-center fw-bold fs-4 mb-2">Filter</div>
      <div
        onClick={clearHandler}
        className={`${styles.clear} text-center text-primary text-decoration-underline mb-4`}
      >
        Clear Filters
      </div>

      <div className={`${styles.accordion} accordion`} id="accordion">
        <Category type={TYPE_OF_DRINK} options={FILTEROPTIONS.TYPE_OF_DRINK} />
        <Category type={TYPE_OF_GLASS} options={FILTEROPTIONS.TYPE_OF_GLASS} />
        <Category type={ALCOHOL} options={FILTEROPTIONS.ALCOHOL} />
      </div>
    </div>
  );
};

export default BarFilter;
