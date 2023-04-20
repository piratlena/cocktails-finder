import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";
import Recipe from "../../components/Recipe";
import styles from "./Cocktail.module.scss";
import useNavigateBack from "../../hooks/useNavigateBack";
import { ICardRecipe } from "../../types/Card";
import { BsChevronDoubleLeft } from "react-icons/bs";

function Cocktail() {
  const { cocktail } = useParams();

  const location = useLocation();
  const page = location.pathname;
  const navigateBack = useNavigateBack();

  let apiUrl: string;

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [drink, setDrink] = useState<ICardRecipe | null>(null);

  const recipeCardRef = useRef(null);

  if (page === "/Random") {
    apiUrl = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
  } else {
    apiUrl = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktail}`;
  }

  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setDrink(result.drinks[0]);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, [apiUrl]);

  console.log(drink);

  return (
    <div className="container">
      <div className={`row pt-4 ${styles.cocktail}`}>
        <div className={`${styles.buttons} col-lg-3 col-12`}>
          <button onClick={navigateBack} type="button" className={styles.btn}>
            <BsChevronDoubleLeft className={styles.icon} />
            Return
          </button>
        </div>
        <div className="col-lg-9 col-12 position-relative">
          <article className={`${styles.article}`}>
            {drink ? (
              <>
                <section className={`${styles.section}`}>
                  <img
                    className={`${styles.image} img-fluid`}
                    src={`${drink.strDrinkThumb}`}
                    alt={drink.strDrink}
                  />
                  <h1
                    className={`${styles.name} ubuntu fw-bold text-center mb-4`}
                  >
                    {drink.strDrink}
                  </h1>
                  <h2 className={styles["status__name"]}>
                    {drink.strCategory} {drink.strAlcoholic}
                  </h2>

                  {/* <ul className="card-ingredients">
                    <b> {drink.strGlass}</b>

                    {ingredients.map((ingredient, index) => (
                      <li key={index}>{ingredient}</li>
                    ))}
                  </ul> */}
                </section>

                <section className={styles.section}>
                  <h4 className="fs-4 fw-normal">Featured in:</h4>

                  <div className="d-flex flex-column gap-2 mb-5">
                    {drink.strInstructions}
                  </div>
                </section>
              </>
            ) : (
              ""
            )}
          </article>
        </div>
      </div>
    </div>
  );
}

export default Cocktail;
