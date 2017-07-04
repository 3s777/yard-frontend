import React from "react";
import developmentLogo from "./compass-development-logo.svg";

export default () => {
  return (
    <div className="banner">
      <img
        className="banner-logo"
        src={developmentLogo}
        alt="Compass Development Logo"
      />
    </div>
  );
};
