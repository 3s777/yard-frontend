import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import styled from "styled-components";
import Header from "./Header";
import Gallery from "./Gallery";
import Meta from "./Meta";
import Specifications from "./Specifications";
import Description from "./Description";
import Infrastructure from "./Infrastructure";
import Offers from "./Offers";
import Place from "./Place";
import Maps from "./Maps";

const Complex = styled.main`
  padding-top: 1.5rem;
  border-top: 0.0625rem solid #eaebf0;
  background-color: #fff;
`;

export default () => {
  return (
    <Complex>
      <Header
        title="Жилой комплекс «Полянка/44»"
        address="Район Якиманка, улица Большая Полянка, дом 44 • 119180"
      />
      <Gallery />
      <Grid>
        <Meta
          counter={950}
          architect="John McAslan + Partners"
          group="Группа «ПСН»"
        />
        <Specifications
          counter={1503}
          status="Квартиры"
          price={{ min: 8.4, max: 20.2 }}
        />
        <Description />
        <Infrastructure />
      </Grid>
      <Offers title="Предложения в ЖК «Полянка/44»" />
      <Place />
      <Maps />
    </Complex>
  );
};
