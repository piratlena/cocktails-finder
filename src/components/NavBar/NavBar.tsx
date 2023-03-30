import { useState } from "react";
import styles from "./NavBar.module.scss";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [active, setActive] = useState<number>();
  const navbarList = [
    { id: 0, name: "Random", link: "/random" },
    { id: 1, name: "A - Z", link: "/alphabet" },
    { id: 2, name: "Your bar", link: "/bar" },
  ];

  return (
    <header className={styles.header}>
      <div className="container">
        <nav className={styles.navbar}>
          <Link to="/">
            <div className={styles.header__logo}>TheCocktails</div>
          </Link>

          <ul className={styles.navbar__items}>
            {navbarList.map((list, i) => (
              <Link to={list.link} key={list.id} onClick={() => setActive(i)}>
                <li
                  className={`${styles.navbar__item} ${
                    active === i ? "activeColor" : ""
                  }`}
                >
                  {list.name}
                </li>
              </Link>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
