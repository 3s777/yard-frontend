import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import Header from "./Header";
import Gallery from "./Gallery";
import Meta from "./Meta";
import Specifications from "./Specifications";
import Description from "./Description";
import Structure from "./Structure";
import Offers from "./Offers";
import Place from "./Place";
import Map from "./Map";

export default () => {
  return (
    <main className="complex">
      <Header />
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
