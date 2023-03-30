import { useDispatch, useSelector } from "react-redux";

import styles from "./FilterBtn.module.scss";
import { resetPage } from "../../../redux/reducers/paginationReducer";

import { useEffect } from "react";

const FilterBtn = (item: any) => {
  const dispatch = useDispatch();

  return (
    <div className="form-check">
      <input
        className={`${styles.input} BTN-${item}`}
        type="radio"
        name={item}
        data-checked="false"
        readOnly
      />
      <label className={`${styles.label} btn btn-outline-primary`}>
        {item}
      </label>
    </div>
  );
};

export default FilterBtn;
