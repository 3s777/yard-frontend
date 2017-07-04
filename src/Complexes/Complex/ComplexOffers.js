import React from "react";
import ComplexOffer from "./ComplexOffer.js";

export default () => {
  return (
    <div className="complex-offers">
      <div className="container">
        <h2 className="complex-offers-title">
          Предложения в ЖК «Полянка/44»
        </h2>
        <div className="row">
          <ComplexOffer />
          <ComplexOffer />
          <ComplexOffer />
        </div>
      </div>
    </div>
  );
};
