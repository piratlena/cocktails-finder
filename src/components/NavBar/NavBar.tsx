import { useState, useEffect, useRef } from "react";
import styles from "./NavBar.module.scss";
import { Link } from "react-router-dom";
import { resetYOffset } from "../../hooks/useScrollCache";

const NavBar = () => {
  const [active, setActive] = useState<number>();
  const [toggle, setToggle] = useState<boolean>(false);
  const btnRef = useRef<HTMLButtonElement>(null);
  const navbarList = [
    { id: 0, name: "Random", link: "/random" },
    { id: 1, name: "A - Z", link: "/alphabet" },
    { id: 2, name: "Your bar", link: "/bar" },
  ];

  const toggleHandler = (event: any) => {
    if (btnRef.current && btnRef.current.contains(event.target)) {
      setTimeout(() => {
        setToggle(!toggle);
      }, 100);
    }
  };

  useEffect(() => {
    document.addEventListener("click", toggleHandler);
    return () => {
      document.removeEventListener("click", toggleHandler);
    };
  });
  console.log(toggle);

  // const toggleHandler = () => {
  //   setActiveStyle("active");
  // };

  // useEffect(() => {
  //   const toggler = document.querySelector(".navbar-toggler");

  //   const togglerCloseHandler = () => {
  //     const el = btnRef.current;
  //     if (
  //       window.innerWidth < 1000 &&
  //       toggler?.classList.contains(styles.active) &&
  //       el !== toggler
  //     ) {
  //       setTimeout(() => {}, 500);
  //     }
  //   };

  //   document.documentElement.addEventListener("click", togglerCloseHandler);

  //   return () => {
  //     document.documentElement.removeEventListener(
  //       "click",
  //       togglerCloseHandler
  //     );
  //   };
  // }, []);

  return (
    <nav className={`${styles.navbar} navbar navbar-expand-lg`}>
      <div className="container">
        <Link to="/">
          <div className={styles.logo} onClick={resetYOffset}>
            TheCocktails
          </div>
        </Link>

        <button
          ref={btnRef}
          className={`${toggle ? styles.active : ""} navbar-toggler`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={toggleHandler}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="70"
            height="70"
            viewBox="0 0 200 200"
          >
            <g strokeWidth="6.5" strokeLinecap="round">
              <path
                d="M72 82.286h28.75"
                fill="#009100"
                fillRule="evenodd"
                stroke="#bfde42"
              />
              <path
                d="M100.75 103.714l72.482-.143c.043 39.398-32.284 71.434-72.16 71.434-39.878 0-72.204-32.036-72.204-71.554"
                fill="none"
                stroke="#bfde42"
              />
              <path
                d="M72 125.143h28.75"
                fill="#009100"
                fillRule="evenodd"
                stroke="#bfde42"
              />
              <path
                d="M100.75 103.714l-71.908-.143c.026-39.638 32.352-71.674 72.23-71.674 39.876 0 72.203 32.036 72.203 71.554"
                fill="none"
                stroke="#bfde42"
              />
              <path
                d="M100.75 82.286h28.75"
                fill="#009100"
                fillRule="evenodd"
                stroke="#bfde42"
              />
              <path
                d="M100.75 125.143h28.75"
                fill="#009100"
                fillRule="evenodd"
                stroke="#bfde42"
              />
            </g>
          </svg>
        </button>

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
