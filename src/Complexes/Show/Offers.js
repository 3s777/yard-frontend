import React from "react";
import { Grid, Row } from "react-flexbox-grid";
import styled from "styled-components";
import Offer from "./Offer";

const Offers = styled.div`
  padding-top: 4rem;
  padding-bottom: 4rem;
  background-color: #f4f5f9;
`;

const Title = styled.h2`
  margin-top: 0;
  margin-bottom: 1.5rem;
  font-family: 'Philosopher', sans-serif;
  font-size: 1.5rem;
  font-weight: bold;
  line-height: 1.3;
  color: #3e4247;
  text-align: center;
`;

export default () => {
  return (
    <Offers>
      <Grid>
        <Title>
          Предложения в ЖК «Полянка/44»
        </Title>
        <Row>
          <Offer />
          <Offer />
          <Offer />
        </Row>
      </Grid>
    </Offers>
  );
};
