import { useState, useEffect, useRef } from "react";
import styles from "./NavBar.module.scss";

const HamburgerMenu = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const btnRef = useRef<HTMLButtonElement>(null);

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
  return (
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
            fill="#fe5f1e"
            fillRule="evenodd"
            stroke="#fe5f1e"
          />
          <path
            d="M100.75 103.714l72.482-.143c.043 39.398-32.284 71.434-72.16 71.434-39.878 0-72.204-32.036-72.204-71.554"
            fill="none"
            stroke="#fe5f1e"
          />
          <path
            d="M72 125.143h28.75"
            fill="#fe5f1e"
            fillRule="evenodd"
            stroke="#fe5f1e"
          />
          <path
            d="M100.75 103.714l-71.908-.143c.026-39.638 32.352-71.674 72.23-71.674 39.876 0 72.203 32.036 72.203 71.554"
            fill="none"
            stroke="#fe5f1e"
          />
          <path
            d="M100.75 82.286h28.75"
            fill="#fe5f1e"
            fillRule="evenodd"
            stroke="#fe5f1e"
          />
          <path
            d="M100.75 125.143h28.75"
            fill="#fe5f1e"
            fillRule="evenodd"
            stroke="#fe5f1e"
          />
        </g>
      </svg>
    </button>
  );
};
export default HamburgerMenu;
