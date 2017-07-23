// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components';
import { media } from '../functions';

const Place = styled.div`
  padding-top: 0;
  padding-bottom: 3rem;
  background-color: #3e4247;

  ${media.xs`
    padding-top: 4rem;
    padding-bottom: 13.375rem;
  `};
`;

const Name = styled.div`
  margin-top: 3rem;
  padding-left: 1rem;
  padding-right: 1rem;
  font-family: 'Philosopher', sans-serif;
  font-size: 1.25rem;
  font-weight: bold;
  color: #a9afb6;

  ${media.lg`
    margin-top: 7.25rem;
  `};

  ${media.xs`
    font-size: 1.5rem;
    padding: 0;
  `};
`;

const Title = styled.h2`
  margin-top: 2rem;
  margin-bottom: 2rem;
  padding-left: 1rem;
  padding-right: 1rem;
  font-size: 2rem;
  font-family: 'Philosopher', sans-serif;
  font-weight: bold;
  line-height: 1.25;
  color: #ffffff;

  ${media.md`
    font-size: 3rem;
  `};

  ${media.xs`
    margin-top: 3rem;
    margin-bottom: 3rem;
    padding-left: 0;
  `};
`;

const PlaceLink = styled(Link)`
  padding-left: 1rem;
  padding-right: 1rem;
  font-size: 1rem;
  line-height: 1.5;
  color: #00779a;
  text-decoration: none;

  ${media.xs`
    padding-left: 0;
    padding-right: 0;
  `};
`;

const Photo = styled.img`
  width: 100%;
  height: auto;

  ${media.lg`
    width: 37.5rem;
    height: 35rem;
  `};
`;

const url = process.env.PUBLIC_URL || '';

export default () =>
  (<Place>
    <Grid>
      <Row>
        <Col sm={6} xs={12} first="sm" last="xs">
          <Name>Якиманка</Name>
          <Title>Исторический центр Москвы в двух километрах от Кремля</Title>
          <PlaceLink to="/">Гид по Якиманке →</PlaceLink>
        </Col>
        <Col sm={6} xs={12}>
          <Photo
            src={`${url}/polyanka-photo.jpg`}
            srcSet="/polyanka-photo@2x.jpg 2x, /polyanka-photo@3x.jpg 3x"
            alt="Полянка"
          />
        </Col>
      </Row>
    </Grid>
  </Place>);
