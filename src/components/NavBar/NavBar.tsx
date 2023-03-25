import React from "react";
import styles from "./NavBar.module.scss";
import { useNavigate, Link } from "react-router-dom";

const NavBar = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <nav className={styles.navbar}>
          <Link to="/">
            <div className={styles.header__logo}>TheCocktails</div>
          </Link>

          <ul className={styles.navbar__items}>
            <li className={styles.navbar__item}>Random</li>
            <li className={styles.navbar__item}>A - Z</li>
            <Link to="/bar">
              <li className={styles.navbar__item}>Your Bar</li>
            </Link>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
