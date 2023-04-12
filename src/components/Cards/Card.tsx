import React, { useEffect, useState, FC } from "react";
import { Link } from "react-router-dom";
import styles from "./Card.module.scss";
import { ICard } from "../../types/Card";

const Card: FC<ICard> = ({ strIngredient1 }) => {
  return (
    <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-4 position-relative">
      <article className={`${styles.card} d-flex flex-column `}>
        <Link to={`/ingredients/${strIngredient1}`}>
          <img
            className={`${styles.image} img-fluid`}
            src={`https://www.thecocktaildb.com/images/ingredients/${strIngredient1}-Medium.png`}
            alt={strIngredient1}
          />
        </Link>
        <div className={`${styles.content}`}>
          <div className={`${styles.name} ubuntu fw-bold`}>
            {strIngredient1}
          </div>
          <div className={styles.content__inner}></div>
        </div>
        <Link
          to={`/ingredients/${strIngredient1}`}
          className={styles["hidden-button"]}
        >
          &rarr;
        </Link>
      </article>
    </div>
  );
};

export default Card;
