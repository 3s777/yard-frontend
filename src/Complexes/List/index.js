import React from "react";
import { Grid } from "react-flexbox-grid";
import Banner from "./Banner";
import DevelopmentSection from "./DevelopmentSection";
import Card from "./Card";

export default () => {
  return (
    <div>
      <Banner />
      <DevelopmentSection />
      <main className="content">
        <Grid>
          <Card />
          <Card />
          <Card />
        </Grid>
      </main>
    </div>
  );
};
