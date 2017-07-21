// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components';

const Place = styled.div`
  padding-top: 4rem;
  padding-bottom: 13.375rem;
  background-color: #3e4247;
`;

const Name = styled.div`
  margin-top: 7.25rem;
  font-family: 'Philosopher', sans-serif;
  font-size: 1.5rem;
  font-weight: bold;
  color: #a9afb6;
`;

const Title = styled.h2`
  margin-top: 3rem;
  margin-bottom: 3rem;
  padding-right: 1rem;
  font-size: 3rem;
  font-family: 'Philosopher', sans-serif;
  font-weight: bold;
  line-height: 1.25;
  color: #ffffff;
`;

const PlaceLink = styled(Link)`
  font-size: 1rem;
  line-height: 1.5;
  color: #00779a;
  text-decoration: none;
`;

const Photo = styled.img`
  width: 37.5rem;
  height: 35rem;
`;

const url = process.env.PUBLIC_URL || '';

export default () =>
  (<Place>
    <Grid>
      <Row>
        <Col lg={6}>
          <Name>Якиманка</Name>
          <Title>Исторический центр Москвы в двух километрах от Кремля</Title>
          <PlaceLink to="/">Гид по Якиманке →</PlaceLink>
        </Col>
        <Col lg={6}>
          <Photo
            src={`${url}/polyanka-photo.jpg`}
            srcSet="/polyanka-photo@2x.jpg 2x, /polyanka-photo@3x.jpg 3x"
            alt="Полянка"
          />
        </Col>
      </Row>
    </Grid>
  </Place>);
