import { useState, useEffect, useRef } from "react";
import styles from "./NavBar.module.scss";
import { NavLink, Link, LinkProps, useLocation } from "react-router-dom";
import { navigationsRoutes } from "../../routes/routes";
import { useAppDispatch } from "../../redux/store/store";
import getAllRecipies from "../../redux/actions/getBarItems";
import { resetYOffset } from "../../hooks/useScrollCache";
import CustomLink from "./CustomLink";
import HamburgerMenu from "./HamburgerMenu";

const NavBar = () => {
  const [active, setActive] = useState<number>();
  const dispatch = useAppDispatch();
  const location = useLocation();

  const onGetData = () => {
    dispatch(getAllRecipies());
  };

  const navbarList = [
    { id: 0, name: "Random", link: "/random" },
    { id: 1, name: "A - Z", link: "/alphabet" },
    { id: 2, name: "All Recipies", link: "/recipies" },
  ];

  return (
    <nav className={`${styles.navbar} navbar navbar-expand-lg`}>
      <div className="container">
        <NavLink to="/">
          <div className={styles.logo} onClick={resetYOffset}>
            TheCocktails
          </div>
        </NavLink>

        <HamburgerMenu />

        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className={styles.nav__items}>
            {navbarList.map((list) => (
              <CustomLink to={list.link} key={list.id}>
                <li className={`${styles.nav__item} `}>{list.name}</li>
              </CustomLink>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
