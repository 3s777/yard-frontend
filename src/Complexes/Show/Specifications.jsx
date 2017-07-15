import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components';
import { statusCheck, parkingCheck, isUndef } from '../functions';
import { securityKinds, constructionKinds, quarters } from '../../Translation';

const Specifications = styled.div`
  padding-top: 2rem;
  padding-bottom: 2.375rem;
`;

const Title = styled.h2`
  margin-top: 0;
  margin-bottom: 1rem;
  font-family: 'Philosopher', sans-serif;
  font-size: 1.5rem;
  font-weight: bold;
  line-height: 1.3;
  color: #3e4247;
`;

const List = styled.dl`
  display: flex;
  flex-wrap: wrap;
  margin: 0;
`;

const Label = styled.dt`
  flex: 0 0 50%;
  margin-bottom: 0.6875rem;
  font-size: 1rem;
  line-height: 1.38;
  color: #a9afb6;
`;

const Value = styled.dd`
  flex: 0 0 50%;
  margin: 0;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.56;
  text-align: left;
  color: #3e4247;
`;

export default function (props) {
  const {
    details: {
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
      ceilHeight,
    } = {},
    statistics: { price, totalArea, propertiesCount } = {},
  } =
    props.complex || {};

  const cHeight = ceilHeight || {};
  const cHeightFrom = cHeight.from;
  const cHeightTo = cHeight.to;
  const tArea = totalArea || {};
  const tAreaFrom = tArea.from;
  const tAreaTo = tArea.to;
  const complexPrice = price || {};
  const priceFrom = complexPrice.from || {};
  const priceTo = complexPrice.to || {};
  const priceFromRub = priceFrom.rub / 1000000;
  const priceToRub = priceTo.rub / 1000000;

  return (
    <Specifications>
      <Title>Характеристики</Title>
      <Row>
        <Col lg={4}>
          <List>
            <Label>Количество квартир</Label>
            <Value>{propertiesCount}</Value>
            <Label>Статус</Label>
            <Value>{statusCheck(propertyKind)}</Value>
            <Label>Цены</Label>
            <Value>от {isUndef(priceFromRub)} до {isUndef(priceToRub)} млн</Value>
            <Label>Безопасность</Label>
            <Value>{securityKinds[security]}</Value>
          </List>
        </Col>
        <Col lg={4}>
          <List>
            <Label>Конструкция корпусов</Label>
            <Value>{constructionKinds[constructionKind]}</Value>
            <Label>Площадь</Label>
            <Value>от {isUndef(tAreaFrom)} до {isUndef(tAreaTo)} м²</Value>
            <Label>Высота потолков</Label>
            <Value>{isUndef(cHeightFrom)} - {isUndef(cHeightTo)} м</Value>
            <Label>Обслуживание</Label>
            <Value>{maintenanceCosts} руб / м² / месяц</Value>
          </List>
        </Col>
        <Col lg={4}>
          <List>
            <Label>Начало строительства</Label>
            <Value>{quarters[startQuarter]} квартал {startYear} года</Value>
            <Label>Конец строительства</Label>
            <Value>{quarters[commissioningQuarter]} квартал {commissioningYear} года</Value>
            <Label>Наземная парковка</Label>
            <Value>{parkingCheck(parkings)}</Value>
            <Label>Подземная парковка</Label>
            <Value>{parkingCheck(undergroundGarages)}</Value>
          </List>
        </Col>
      </Row>
    </Specifications>
  );
}
