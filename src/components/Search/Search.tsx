import React from "react";
import styles from "./Search.module.scss";

const Search = () => {
  return (
    <form className={`${styles.form} d-flex justify-content-center mb-5`}>
      <input
        type="text"
        className={styles.input}
        placeholder="Find your favorite recipe"
      />
      <button className={`${styles.btn} btn btn-primary fs-5`}>Search</button>
    </form>
  );
};

export default Search;
