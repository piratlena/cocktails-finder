import React from "react";

const NavBar = () => {
  return (
    <header className="header">
      <div className="container">
        <nav className="navbar">
          <div className="header__logo">TheCocotails</div>
          <ul className="navbar__items">
            <li className="navbar__item">Random</li>
            <li className="navbar__item">A-Z</li>
            <li className="navbar__item">Your Bar</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
