// @flow
/* eslint-disable react/style-prop-object  */
import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';
import styled from 'styled-components';
import type { LocationType } from '../types';
import { media } from '../functions';

const Map = ReactMapboxGl({
  accessToken: process.env.REACT_APP_MAPBOX_TOKEN,
});

const ComplexMap = styled.div`
  margin-top: 0;
  padding-bottom: 0;

  ${media.xs`
    margin-top: -9.5625rem;
    padding-bottom: 3.75rem;
  `};
`;

const Mapbox = styled(Map)`
  width: 100%;
  height: 10.375rem;
  box-shadow: none;

  ${media.lg`
    width: 37.5rem;
  `};

  ${media.xs`
    box-shadow: 0 0 1.875rem rgba(0, 0, 0, 0.5);
    height: 19.125rem;
  `};
`;

const Places = styled.dl`
  margin: 0;
  padding-top: 1.5rem;
  background: #fff;
  box-shadow: none;

  ${media.xs`
    box-shadow: 0 0 1.875rem rgba(0, 0, 0, 0.5);
  `};
`;

const Place = styled.dt`
  margin-bottom: 0.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.38;
  color: #3e4247;

  ${media.xs`
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  `};
`;

const Distance = styled.dd`
  margin-left: 0;
  margin-bottom: 1.625rem;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-bottom: 1.5rem;
  border-bottom: 0.0625rem solid #e0e0e1;
  font-size: 1rem;
  line-height: 1.38;
  color: #a9afb6;

  ${media.xs`
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  `};

  &:last-child {
    margin-bottom: 0;
    border: 0;
  }
`;

type Props = {
  location: LocationType,
};

export default function (props: Props) {
  const { latitude, longitude } = props.location;
  return (
    <ComplexMap>
      <Grid>
        <Row>
          <Col sm={6} xs={12}>
            <Mapbox
              style="mapbox://styles/mapbox/basic-v9"
              zoom={[13]}
              center={[longitude, latitude]}
            >
              <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
                <Feature coordinates={[longitude, latitude]} />
              </Layer>
            </Mapbox>
          </Col>
          <Col sm={6} xs={12}>
            <Places>
              <Place>Красный Октябрь</Place>
              <Distance>24 минуты, 6 км</Distance>
              <Place>World className</Place>
              <Distance>2 минуты, 300 м</Distance>
              <Place>Третьяковская галерея</Place>
              <Distance>14 минут, 4 км</Distance>
            </Places>
          </Col>
        </Row>
      </Grid>
    </ComplexMap>
  );
}
