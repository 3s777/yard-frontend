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
import { kinds, securityKinds, constructionKinds, quarters } from '../../Translation';

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
      .then((json) => {
        this.setState({ complex: json });
      });
  }

  render() {
    const location = this.state.complex.location || {};
    const details = this.state.complex.details || {};
    const statistics = this.state.complex.statistics || {};
    const images = this.state.complex.images || [];
    const { street, house, subLocalityName } = location || {};
    const { resalePropertiesCount, propertiesCount } = statistics;
    const {
      propertyKind,
      security,
      constructionKind,
      maintenanceCosts,
      startYear,
      startQuarter,
      commissioningYear,
      commissioningQuarter,
      parkings,
      undergroundGarages,
      architect,
    } =
      details || {};
    const cHeight = details.ceilHeight || {};
    const cHeightFrom = cHeight.from;
    const cHeightTo = cHeight.to;
    const tArea = statistics.totalArea || {};
    const tAreaFrom = tArea.from;
    const tAreaTo = tArea.to;
    const complexPrice = statistics.price || {};
    const priceFrom = complexPrice.from || {};
    const priceTo = complexPrice.to || {};
    const priceFromRub = priceFrom.rub / 1000000;
    const priceToRub = priceTo.rub / 1000000;

    function statusCheck(statusData) {
      if (statusData) {
        return kinds[propertyKind];
      }
      return 'Квартира';
    }

    function parkingCheck(parkingData) {
      if (parkingData) {
        return `${parkingData} м/м`;
      }
      return 'Нет';
    }

    function isUndef(dataToFixed) {
      if (dataToFixed) {
        return dataToFixed.toFixed(2);
      }
      return null;
    }

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
          <Meta counter={resalePropertiesCount} architect={architect} group="Группа «ПСН»" />
          <Specifications
            counter={propertiesCount}
            status={statusCheck(propertyKind)}
            price={{ min: isUndef(priceFromRub), max: isUndef(priceToRub) }}
            guard={securityKinds[security]}
            construction={constructionKinds[constructionKind]}
            ceilheight={{ min: isUndef(cHeightFrom), max: isUndef(cHeightTo) }}
            startQuarter={quarters[startQuarter]}
            startYear={startYear}
            commissioningQuarter={quarters[commissioningQuarter]}
            commissioningYear={commissioningYear}
            parkings={parkingCheck(parkings)}
            undergroundGarages={parkingCheck(undergroundGarages)}
            maintenanceCosts={maintenanceCosts}
            totalArea={{ min: isUndef(tAreaFrom), max: isUndef(tAreaTo) }}
          />
          <Description />
          <Infrastructure />
        </Grid>
        <Offers title={this.state.complex.name} />
        <Place />
        <Maps />
      </Complex>
    );
  }
}

export default ComplexData;
