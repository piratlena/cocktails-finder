import { useSelector } from "react-redux";

import getFilters from "../../../redux/selectors/filterSelector";
import FilterBtn from "../FilterBtn/FilterBtn";

import styles from "./Category.module.scss";

const Category: React.FC<any> = ({ name, list, id }) => {
  console.log(list);
  // const { filter } = useSelector(getFilters);

  // const activeFilter = `- ${upperFirstLetter(initialState[type.toLowerCase()])}`;
  console.log(name);
  return (
    <div className="accordion-item">
      <h2 className="accordion-header">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#panelsStayOpen-collapseOne"
          aria-expanded="true"
          aria-controls="panelsStayOpen-collapseOne"
        >
          {name}
        </button>
      </h2>

      <div
        id="panelsStayOpen-collapseOne"
        className="accordion-collapse collapse"
        aria-labelledby="panelsStayOpen-headingOne"
        data-bs-parent="#accordion"
      >
        <div className={` accordion-body`}>
          {list.map((item: any, i: number) => (
            <div className="form-check">
              <input
                key={i}
                className={`${styles.input} BTN-${item}`}
                type="radio"
                name={item}
                data-checked="false"
                readOnly
              />
              <label className={`${styles.label} btn-outline-primary`}>
                {item}
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
