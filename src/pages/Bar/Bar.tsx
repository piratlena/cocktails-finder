import React from "react";
import styles from "./Bar.module.scss";
import Search from "../../components/Search/Search";
import Card from "../../components/Cards/Card";
import { useSelector } from "react-redux";
import getBarItems from "../../redux/selectors/barSelectors";

function Bar() {
  const { itemInBar } = useSelector(getBarItems);
  const ingredients = itemInBar;
  return (
    <React.Fragment>
      <h1 className="text-center mb-3 ubuntu">Characters</h1>
      <div className="container">
        <div className={styles.search__box}>
          <Search />
        </div>
        <div className="row">
          <div className={`${styles.row} col-lg-8 col-12`}>
            <div className="row justify-content-start">
              <Card props={ingredients} />
            </div>
          </div>
        </div>
      </div>
      Здесь будет пагинация
    </React.Fragment>
  );
}

export default Bar;
