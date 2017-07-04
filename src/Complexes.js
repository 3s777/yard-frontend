import React from "react";
import { Link } from "react-router-dom";

export default () => {
  return (
    <main className="content">
      <div className="container">
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
        <Link to="/complex" className="complex-link">
          <img
            className="complex-photo"
            src={process.env.PUBLIC_URL + "/bitmap.jpg"}
            srcSet="/bitmap@2x.jpg 2x, /bitmap@3x.jpg 3x"
            alt="764 Metropolitan Avenue photo"
          />
          <div className="complex-info">
            <p className="complex-city">MIDTOWN EAST, MANHATTAN</p>
            <h3 className="complex-title">100 East 53rd Street</h3>
            <p className="complex-description">
              One Hundred East Fifty Third Street by Foster + Partners is a
              limited collection of modern residences in Midtown Manhattan's
              Cultural District. The 94 residences ranging from alcove lofts to
              four bedrooms within the 63-story tower are generously
              proportioned.
            </p>
          </div>
        </Link>
        <Link to="/complex" className="complex-link">
          <img
            className="complex-photo"
            src={process.env.PUBLIC_URL + "/bitmap.jpg"}
            srcSet="/bitmap@2x.jpg 2x, /bitmap@3x.jpg 3x"
            alt="764 Metropolitan Avenue photo"
          />
          <div className="complex-info">
            <p className="complex-city">NOLITA, MANHATTAN</p>
            <h3 className="complex-title">152 Elizabeth</h3>
            <p className="complex-description">
              152 Elizabeth is an ultra-luxury condominium building—the first in
              New York City designed by Japanese master architect Tadao Ando.
              Located at the corner of Kenmare and Elizabeth Streets in Nolita,
              the 32,000-square-foot building will stand as a profound
              architectural statement and embrace the industrial character of
              the neighborhood.
            </p>
          </div>
        </Link>
      </div>
    </main>
  );
};
