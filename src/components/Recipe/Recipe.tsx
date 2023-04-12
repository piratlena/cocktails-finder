import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";
import styles from "./Recipe.module.scss";
import RecipeDetails from "./RecipeDetails/RecipeDetails";

function Recipe() {
  const { cocktail } = useParams();
  const location = useLocation();
  const page = location.pathname;

  let apiUrl: string;

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [drink, setDrink] = useState<{
    strIngredient: string;
    strMeasure: string;
    strInstructions: string;
    strCategory?: string;
    strAlcoholic?: string;
    strDrinkThumb?: string;
    strDrink?: string;
  }>();

  const cardRef = useRef(null);

  if (page === "/random") {
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

  // if (error) {
  //   return <div>Error: something went wrong!</div>;
  // } else if (!isLoaded) {
  //   return <div></div>;
  // } else {
  //   // Creating an ingredients array and loop through drink data to add to the array
  //   const ingredients = [];
  //   for (let i = 1; i <= 15; i++) {
  //     const ingredient = drink?.strIngredient[i];
  //     const measurement = drink?.strMeasure[i];
  //     if (ingredient && ingredient !== " " && ingredient !== "") {
  //       ingredients.push(`${ingredient} - ${measurement}`);
  //     }
  //   }
  // }

  const instructionsList = drink?.strInstructions
    .split(". ")
    .filter((sentence: string) => sentence !== "");

  return (
    <div className="container">
      <div className={`row pt-4 ${styles.recipe}`}>
        <div className={`${styles.buttons} col-lg-3 col-12`}>
          <button type="button" className={styles.btn}>
            Return
          </button>
        </div>
        <div className="col-lg-9 col-12 position-relative" ref={cardRef}>
          <RecipeDetails {...drink} />
        </div>
      </div>
    </div>
  );
}

export default Recipe;
