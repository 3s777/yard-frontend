import React from 'react';
import { Grid, Row } from 'react-flexbox-grid';
import styled from 'styled-components';
import Offer from './Offer';

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

export default props =>
  (<Offers>
    <Grid>
      <Title>
        {props.title}
      </Title>
      <Row>
        <Offer
          title="1-комнатные квартиры"
          area={{ min: 59, max: 120 }}
          price={{ min: 20.3, max: 84.2 }}
        />
        <Offer
          title="2-комнатные квартиры"
          area={{ min: 59, max: 120 }}
          price={{ min: 20.3, max: 84.2 }}
        />
        <Offer
          title="3-комнатные квартиры"
          area={{ min: 59, max: 120 }}
          price={{ min: 20.3, max: 84.2 }}
        />
      </Row>
    </Grid>
  </Offers>);
