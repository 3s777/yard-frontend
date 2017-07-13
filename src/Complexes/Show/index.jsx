/* eslint-disable */
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

const Complex = styled.main`
  padding-top: 1.5rem;
  border-top: 0.0625rem solid #eaebf0;
  background-color: #fff;
`;

class ComplexData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      complex: [],
    };
  }

  componentDidMount() {
    const complexId = this.props.match.params.id;
    fetch(`https://yard.moscow/api/v1/complexes/${complexId}`)
      .then(response => response.json())
      .then(json => {
        console.log(json);
        this.setState({ complex: json });
      });
  }

  render() {
    const location = this.state.complex.location || {};
    const images = this.state.complex.images || [];
    const { street, house, subLocalityName } = location || {};
    return (
      <Complex>
        <Header
          title={this.state.complex.name}
          district={subLocalityName}
          street={street}
          house={house}
        />
        <Gallery images={images} />
        <Grid>
          <Meta counter={950} architect="John McAslan + Partners" group="Группа «ПСН»" />
          <Specifications counter={1503} status="Квартиры" price={{ min: 8.4, max: 20.2 }} />
          <Description />
          <Infrastructure />
        </Grid>
        <Offers title="Предложения в ЖК «Полянка/44»" />
        <Place />
        <Maps />
      </Complex>
    );
  }
}

export default ComplexData;
