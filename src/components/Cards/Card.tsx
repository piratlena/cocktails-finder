import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import styles from "./Card.module.scss";

const Card = (ingredients) => {
  return (
    <>
      {ingredients.map((ingredient) => {
        <article className={`${styles.card} d-flex flex-column `}>
          <Link to={`/ingredients/${ingredient.strIngredient1}`}>
            <img
              className={`${styles.image} img-fluid`}
              src={`https://www.thecocktaildb.com/images/ingredients/${ingredient.strIngredient1}-Small.png`}
              alt={ingredient.strIngredient1}
            />
          </Link>
          <div className={`${styles.content}`}>
            <div className={`${styles.name} ubuntu fw-bold`}>
              {ingredient.strIngredient1}
            </div>
            <div className={styles.content__inner}>
              <div>
                <h4 className="fs-6 fw-normal text-secondary">
                  First Seen At:{" "}
                </h4>

                {ingredient.strIngredient1}
              </div>
            </div>
          </div>
        </article>;
      })}
    </>
  );
};

export default Card;
