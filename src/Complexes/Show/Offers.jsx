// @flow
import React from 'react';
import { Grid, Row } from 'react-flexbox-grid';
import styled from 'styled-components';
import Offer from './Offer';
import { media } from '../../utils';

const Offers = styled.div`
  padding-top: 2rem;
  padding-bottom: 2rem;
  background-color: #f4f5f9;

  ${media.xs`
    padding-top: 4rem;
    padding-bottom: 4rem;
  `};
`;

const ScrollMobile = styled.div`
  width: 100%;
  overflow-x: scroll;

  ${media.lg`
    overflow-x: inherit;
  `};
`;

const OffersScroll = styled.div`
  margin: 0 auto;
  padding-left: 1rem;
  padding-right: 1rem;
  width: 76rem;
  box-sizing: border-box;

  ${media.lg`
    padding-left: 0;
    padding-right: 0;
  `};
`;

const Title = styled.h2`
  margin-top: 0;
  margin-bottom: 1.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  font-family: 'Philosopher', sans-serif;
  font-size: 1.25rem;
  font-weight: bold;
  line-height: 1.3;
  color: #3e4247;

  ${media.xs`
    padding-left: 0;
    padding-right: 0;
    font-size: 1.5rem;
    text-align: center;
  `};
`;

type Props = {
  title: string,
};

export default function (props: Props) {
  return (
    <Offers>
      <Grid>
        <Title>
          Предложения в ЖК «{props.title}»
        </Title>
      </Grid>
      <ScrollMobile>
        <OffersScroll>
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
        </OffersScroll>
      </ScrollMobile>
    </Offers>
  );
}
