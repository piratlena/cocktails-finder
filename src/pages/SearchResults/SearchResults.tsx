import React, { useMemo, useEffect } from "react";
import { useSelector } from "react-redux";
import getListRecipies from "../../redux/selectors/recepiesSelectors";
import getPage from "../../redux/selectors/paginationSelector";
import { setCurrentPage } from "../../redux/reducers/paginationReducer";
import { useAppDispatch } from "../../redux/store/store";
import styles from "./SearchResults.module.scss";
import Card from "../../components/Cards/Card";
import Pagination from "../../components/Pgination/Pagination";
import getByName from "../../redux/actions/getByName";

const SearchResults = () => {
  const { itemsInList } = useSelector(getListRecipies);
  const { currentPage } = useSelector(getPage);
  const ingredients = itemsInList;
  const dispatch = useAppDispatch();
  const { query } = useSelector(getListRecipies);

  useEffect(() => {
    dispatch(getByName(query));
  }, []);

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
      <div className="container">
        <div className={styles.search__box}>
          <h1 className="text-center mb-3 ubuntu">Recepies with </h1>
        </div>

        <div className="row justify-content-end">
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

export default SearchResults;
