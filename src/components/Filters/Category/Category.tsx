import { useSelector } from "react-redux";

import getFilters from "../../../redux/selectors/filterSelector";

import styles from "./Category.module.scss";

export interface ICategory {
  type: any;
  options: any;
}

const Category: React.FC<ICategory> = ({ type, options }) => {
  // const { filter } = useSelector(getFilters);

  // const activeFilter = `- ${upperFirstLetter(initialState[type.toLowerCase()])}`;

  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id={`heading${type}`}>
        <button
          className={`${styles.btn} accordion-button collapsed`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#collapse${type}`}
          aria-expanded="false"
          aria-controls={`collapse${type}`}
        >
          {/* {type} {name[type.toLowerCase()] ? activeFilter : ""} */}
        </button>
      </h2>
      <div
        id={`collapse${type}`}
        className="accordion-collapse collapse"
        aria-labelledby={`heading${type}`}
        data-bs-parent="#accordion"
      >
        <div className={`${styles.body} accordion-body`}>
          {/* {createFilterBtns(options, type)} */}
        </div>
      </div>
    </div>
  );
};

export default Category;
