import React from "react";
import { Grid, Row } from "react-flexbox-grid";
import Offer from "./Offer.js";

export default () => {
  return (
    <div className="complex-offers">
      <Grid>
        <h2 className="complex-offers-title">
          Предложения в ЖК «Полянка/44»
        </h2>
        <Row>
          <Offer />
          <Offer />
          <Offer />
        </Row>
      </Grid>
    </div>
  );
};
