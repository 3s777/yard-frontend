import React from "react";
import { Grid } from "react-flexbox-grid";
import styled from "styled-components";
import Banner from "./Banner";
import DevelopmentSection from "./DevelopmentSection";
import Card from "./Card";

const Content = styled.main`
  padding-bottom: 3rem;
`;

export default () => {
  return (
    <div>
      <Banner />
      <DevelopmentSection />
      <Content>
        <Grid>
          <Card />
          <Card />
          <Card />
        </Grid>
      </Content>
    </div>
  );
};
