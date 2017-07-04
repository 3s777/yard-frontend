import React from "react";

export default () => {
  return (
    <div className="complex-gallery">
      <div className="complex-gallery-wrap">
        <img
          className="complex-gallery-photo"
          src={process.env.PUBLIC_URL + "/photo1.jpg"}
          srcSet="/photo1@2x.jpg 2x, /photo1@3x.jpg 3x"
          alt="Photo 1"
        />
        <img
          className="complex-gallery-photo"
          src={process.env.PUBLIC_URL + "/photo2.jpg"}
          srcSet="/photo2@2x.jpg 2x, /photo2@3x.jpg 3x"
          alt="Photo 2"
        />
        <img
          className="complex-gallery-photo"
          src={process.env.PUBLIC_URL + "/photo3.jpg"}
          srcSet="/photo3@2x.jpg 2x, /photo3@3x.jpg 3x"
          alt="Photo 3"
        />
        <img
          className="complex-gallery-photo"
          src={process.env.PUBLIC_URL + "/photo4.jpg"}
          srcSet="/photo4@2x.jpg 2x, /photo4@3x.jpg 3x"
          alt="Photo 4"
        />
        <img
          className="complex-gallery-photo"
          src={process.env.PUBLIC_URL + "/photo5.jpg"}
          srcSet="/photo5@2x.jpg 2x, /photo5@3x.jpg 3x"
          alt="Photo 5"
        />
      </div>
      <div className="complex-gallery-count">
        <div className="container">
          <button className="complex-gallery-count-button">
            41 фотография
          </button>
        </div>
      </div>
    </div>
  );
};
