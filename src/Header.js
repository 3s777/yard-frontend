import React from "react";
import logo from "./compass-logo.svg";

export default () => {
  return (
    <header className="global-header">
      <div className="container">
        <div className="global-header-wrap">
          <img className="global-header-logo" src={logo} alt="Compass Logo" />
          <nav className="global-header-nav">
            <a className="global-header-nav-link" href="#">Купить</a>
            <a className="global-header-nav-link" href="#">Снять</a>
            <a className="global-header-nav-link" href="#">Наши агенты</a>
          </nav>
        </div>
      </div>
    </header>
  );
};
