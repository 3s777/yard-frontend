import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import ComplexHeader from "./ComplexHeader.js";
import Gallery from "./Gallery.js";
import Meta from "./Meta.js";
import Specifications from "./Specifications.js";
import Description from "./Description.js";
import Structure from "./Structure.js";
import Offers from "./Offers.js";
import Place from "./Place.js";
import Map from "./Map.js";

export default () => {
  return (
    <main className="complex">
      <ComplexHeader />
      <Gallery />
      <Grid>
        <Meta />
        <Specifications />
        <Description />
        <Structure />
      </Grid>
      <Offers />
      <Place />
      <Map />
    </main>
  );
};
