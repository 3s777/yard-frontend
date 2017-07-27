// @flow
import React from 'react';
import { Grid } from 'react-flexbox-grid';
import styled from 'styled-components';
import Header from './Header';
import Gallery from './Gallery';
import Meta from './Meta';
import Specifications from './Specifications';
import Description from './Description';
import Infrastructure from './Infrastructure';
import Offers from './Offers';
import Place from './Place';
import Maps from './Maps';
import { get } from '../../api';
import type { ComplexType } from '../types';
import { media } from '../../utils';

const Complex = styled.main`
  padding-top: 1rem;
  border-top: 0.0625rem solid #eaebf0;
  background-color: #fff;
  overflow: hidden;

  ${media.xs`
    padding-top: 1.5rem;
  `};
`;

type ComplexInfo = {
  complex: ComplexType,
};

class ComplexData extends React.Component {
  state: ComplexInfo;
  state = {
    complex: {},
  };

  componentDidMount() {
    const complexSlug = this.props.match.params.id;
    get(`complexes/${complexSlug}`).then((json) => {
      this.setState({ complex: json });
    });
  }

  render() {
    const { complex } = this.state;
    const location = this.state.complex.location || {};
    const images = this.state.complex.images || [];
    const amenities = this.state.complex.amenities || [];
    const { resalePropertiesCount } = this.state.complex.statistics || {};
    const { architect } = this.state.complex.details || {};

    return (
      <Complex>
        <Header title={this.state.complex.name} location={location} />
        <Gallery images={images} alt={this.state.complex.name} />
        <Grid>
          <Meta counter={resalePropertiesCount} architect={architect} />
        </Grid>
        <Specifications complex={complex} />
        <Grid>
          <Description fullDescription={this.state.complex.fullDescription} />
          {amenities.length > 0 && <Infrastructure amenities={amenities} />}
        </Grid>
        <Offers title={this.state.complex.name} />
        <Place />
        {this.state.complex.location && <Maps location={location} />}
      </Complex>
    );
  }
}

export default ComplexData;
