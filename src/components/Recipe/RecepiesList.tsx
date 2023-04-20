import React, { useState, useEffect, useMemo } from "react";
import styles from "./Recipe.module.scss";
import { useParams } from "react-router-dom";
import CardSearchRes from "../Cards/CardSearchRes";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../redux/store/store";
import { setCurrentPage } from "../../redux/reducers/paginationReducer";
import getPage from "../../redux/selectors/paginationSelector";
import Pagination from "../Pgination/Pagination";
import { ICard } from "../../types/Card";
import { Link } from "react-router-dom";

const RecepiesList: React.FC = () => {
  const [cocktailsIngredient, setCocktails] = useState([]);
  const { searchTerm } = useParams();
  const { currentPage } = useSelector(getPage);
  const ingredients = cocktailsIngredient;
  const dispatch = useAppDispatch();
  console.log(searchTerm);

  useEffect(() => {
    fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${searchTerm}`
    )
      .then((response) => response.json())
      .then((data) => setCocktails(data.drinks))
      .catch((error) => console.error(error));
  }, [searchTerm]);

  console.log(cocktailsIngredient);
  console.log(ingredients);

  const { pagStart, pagEnd } = useMemo(() => {
    let pageLimit;
    if (ingredients.length > 20) {
      pageLimit = Math.ceil(ingredients.length / 5);
    } else {
      pageLimit = ingredients.length;
    }

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

  console.log(ingredients);

  return (
    <React.Fragment>
      <div className="container">
        <div className={styles.search__result}>
          <h1 className="text-center mb-3 ubuntu">
            Recepies with {searchTerm}{" "}
          </h1>
        </div>

        <div className="row ">
          <div className={`${styles.row} col-lg-8 col-12`}>
            <div className="row justify-content-end">
              {ingredients
                .slice(pagStart, pagEnd)
                .map((ingredient: ICard, i) => (
                  <CardSearchRes {...ingredient} key={i} />
                ))}
            </div>
          </div>
        </div>
        <Pagination onChangePage={onChangePage} currentPage={currentPage} />
      </div>
    </React.Fragment>
  );
};

export default RecepiesList;
