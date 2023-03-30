import { useAppDispatch } from "../../../redux/store/store";
import { resetFilters } from "../../../redux/reducers/filterReducer";
import { resetPage } from "../../../redux/reducers/paginationReducer";
import { IFilterSlice } from "../../../types/filters";

import Category from "../Category/Category";

import styles from "./BarFilter.module.scss";
import { filterList } from "../../../consts/filterConsts";

const BarFilter: React.FC = () => {
  const dispatch = useAppDispatch();

  const clearHandler = () => {
    dispatch(resetFilters());
    dispatch(resetPage());
  };

  return (
    <div className="col-lg-4 col-12 mb-5 ">
      <div className={`text-center fw-bold fs-4 mb-2 ${styles.filter}`}>
        Filter
      </div>
      <div
        onClick={clearHandler}
        className={`${styles.clear} text-center text-decoration-underline mb-4`}
      >
        Clear Filters
      </div>

      <div className={`${styles.accordion} accordion `} id="accordion">
        {filterList.map((item, i) => (
          <Category {...item} key={i} />
        ))}
      </div>
    </div>
  );
};

export default BarFilter;
