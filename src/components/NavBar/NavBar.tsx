import { useState, useEffect, useRef } from "react";
import styles from "./NavBar.module.scss";
import { Link } from "react-router-dom";
import { resetYOffset } from "../../hooks/useScrollCache";
import HamburgerMenu from "./HamburgerMenu";
const NavBar = () => {
  const [active, setActive] = useState<number>();

  const navbarList = [
    { id: 0, name: "Random", link: "/random" },
    { id: 1, name: "A - Z", link: "/alphabet" },
    { id: 2, name: "All Recipies", link: "/recipies" },
  ];

  return (
    <nav className={`${styles.navbar} navbar navbar-expand-lg`}>
      <div className="container">
        <Link to="/">
          <div className={styles.logo} onClick={resetYOffset}>
            TheCocktails
          </div>
        </Link>

        <HamburgerMenu />

        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className={styles.nav__items}>
            {navbarList.map((list, i) => (
              <Link to={list.link} key={list.id} onClick={() => setActive(i)}>
                <li
                  className={`${styles.nav__item} ${
                    active === i ? "activeColor" : ""
                  }`}
                >
                  {list.name}
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
