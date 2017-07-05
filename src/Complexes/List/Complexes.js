import React from "react";
import Card from "./Card.js";
import { Grid } from "react-flexbox-grid";

export default () => {
  return (
    <main className="content">
      <Grid>
        <Card />
        <Card />
        <Card />
      </Grid>
    </main>
  );
};
