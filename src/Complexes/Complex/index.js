import React from "react";
import ComplexHeader from "./ComplexHeader.js";
import ComplexGallery from "./ComplexGallery.js";
import ComplexMeta from "./ComplexMeta.js";
import ComplexSpecifications from "./ComplexSpecifications.js";
import ComplexDescription from "./ComplexDescription.js";
import ComplexStructure from "./ComplexStructure.js";
import ComplexOffers from "./ComplexOffers.js";
import ComplexPlace from "./ComplexPlace.js";
import ComplexMap from "./ComplexMap.js";

export default () => {
  return (
    <main className="complex">
      <ComplexHeader />
      <ComplexGallery />
      <div className="container">
        <ComplexMeta />
        <ComplexSpecifications />
        <ComplexDescription />
        <ComplexStructure />
      </div>
      <ComplexOffers />
      <ComplexPlace />
      <ComplexMap />
    </main>
  );
};
