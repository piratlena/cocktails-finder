import React, { useEffect, useMemo } from "react";
import styles from "./Bar.module.scss";
import Search from "../../components/Search/Search";
import Card from "../../components/Cards/Card";
import Pagination from "../../components/Pgination/Pagination";
import { useSelector } from "react-redux";
import getBarItems from "../../redux/selectors/barSelectors";
import getPage from "../../redux/selectors/paginationSelector";
import { setCurrentPage } from "../../redux/reducers/paginationReducer";
import { useAppDispatch } from "../../redux/store/store";
import BarFilter from "../../components/Filters/BarFilter/BarFilter";

const Bar: React.FC = () => {
  const { itemInBar } = useSelector(getBarItems);
  const { currentPage } = useSelector(getPage);
  const ingredients = itemInBar;
  const dispatch = useAppDispatch();

  const { pagStart, pagEnd } = useMemo(() => {
    const pageLimit = Math.ceil(ingredients.length / 5);

    const pagStart = (currentPage - 1) * pageLimit;
    const pagEnd = pagStart + pageLimit;
    return {
      pagStart,
      pagEnd,
    };
  }, [currentPage, ingredients.length]);
  const onChangePage = (currentPage: number) => {
    dispatch(setCurrentPage(currentPage + 1));
  };

  return (
    <React.Fragment>
      <h1 className="text-center mb-3 ubuntu">What is in your bar?</h1>
      <div className="container">
        <div className={styles.search__box}>
          <Search />
        </div>

        <div className="row justify-content-end">
          <BarFilter />
          <div className={`${styles.row} col-lg-8 col-12`}>
            <div className="row justify-content-end">
              {ingredients.slice(pagStart, pagEnd).map((ingredient) => (
                <Card {...ingredient} />
              ))}
            </div>
          </div>
        </div>
        <Pagination onChangePage={onChangePage} currentPage={currentPage} />
      </div>
    </React.Fragment>
  );
};

export default Bar;
