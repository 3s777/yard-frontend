import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import styled from "styled-components";
import Header from "./Header";
import Gallery from "./Gallery";
import Meta from "./Meta";
import Specifications from "./Specifications";
import Description from "./Description";
import Infrastructure from "./Infrastructure";
import Offers from "./Offers";
import Place from "./Place";
import Maps from "./Maps";

const Complex = styled.main`
  padding-top: 1.5rem;
  border-top: 0.0625rem solid #eaebf0;
  background-color: #fff;
`;

export default () => {
  return (
    <Complex>
      <Header />
      <Gallery />
      <Grid>
        <Meta />
        <Specifications />
        <Description />
        <Infrastructure />
      </Grid>
      <Offers />
      <Place />
      <Maps />
    </Complex>
  );
};
