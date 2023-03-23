import React from "react";
import styles from "./NavBar.module.scss";

const NavBar = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <nav className={styles.navbar}>
          <div className={styles.header__logo}>TheCocotails</div>
          <ul className={styles.navbar__items}>
            <li className={styles.navbar__item}>Random</li>
            <li className={styles.navbar__item}>A-Z</li>
            <li className={styles.navbar__item}>Your Bar</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
