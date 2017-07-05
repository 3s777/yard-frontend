import React from "react";
import logo from "./compass-logo.svg";
import { Grid } from "react-flexbox-grid";

export default () => {
  return (
    <header className="global-header">
      <Grid>
        <div className="global-header-wrap">
          <img className="global-header-logo" src={logo} alt="Compass Logo" />
          <nav className="global-header-nav">
            <a className="global-header-nav-link" href="#">Купить</a>
            <a className="global-header-nav-link" href="#">Снять</a>
            <a className="global-header-nav-link" href="#">Наши агенты</a>
          </nav>
        </div>
      </Grid>
    </header>
  );
};
