import React from "react";
import styles from "./RecipeDetails.scss";

function RecipeDetails({ ...drink }) {
  return (
    <section className={`${styles.section}`}>
      <img
        className={`${styles.image} img-fluid`}
        src={drink.strDrinkThumb}
        alt={drink.strDrink}
      />
      <h1 className={`${styles.name} ubuntu fw-bold text-center mb-4`}>
        {drink.strDrink}
      </h1>
      <h2 className={styles["status__name"]}>
        {drink.strCategory} {drink.strAlcoholic}
      </h2>
    </section>
  );
}

export default RecipeDetails;
