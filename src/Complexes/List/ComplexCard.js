import React from "react";
import { Link } from "react-router-dom";

export default () => {
  return (
    <Link to="/complex" className="complex-link">
      <img
        className="complex-photo"
        src={process.env.PUBLIC_URL + "/bitmap.jpg"}
        srcSet="/bitmap@2x.jpg 2x, /bitmap@3x.jpg 3x"
        alt="764 Metropolitan Avenue photo"
      />
      <div className="complex-info">
        <p className="complex-city">SOUTH BEACH, SAN FRANCISCO</p>
        <h3 className="complex-title">764 Metropolitan Avenue</h3>
        <p className="complex-description">
          The Lewis Steel Building is a masterful industrial conversion
          located in the heart of Williamsburg. Located at 76 North 4th
          Street, the former 1930's steel factory has been transformed into
          83 individually unique and luxury loft apartments.
        </p>
      </div>
    </Link>
  );
};
