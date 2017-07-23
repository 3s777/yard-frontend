// @flow
import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components';
import { statusCheck, parkingCheck, formatToFixed, media } from '../functions';
import { securityKinds, constructionKinds, quarters } from '../../Translation';
import type { ComplexType } from '../types';

const ScrollMobile = styled.div`
  width: 100%;
  overflow-x: scroll;

  ${media.lg`
    overflow-x: inherit;
  `};
`;

const Specifications = styled.div`
  margin: 0 auto;
  padding-top: 2rem;
  padding-bottom: 2.375rem;
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
  margin-bottom: 1rem;
  font-family: 'Philosopher', sans-serif;
  font-size: 1.25rem;
  font-weight: bold;
  line-height: 1.3;
  color: #3e4247;

  ${media.xs`
    font-size: 1.5rem;
  `};
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

type Props = { complex: ComplexType };

export default function (props: Props) {
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
  const tArea = totalArea || {};
  const complexPrice = price || {};
  const priceFrom = complexPrice.from || {};
  const priceTo = complexPrice.to || {};

  return (
    <ScrollMobile>
      <Specifications>
        <Title>Характеристики</Title>
        <Row>
          <Col xs={4}>
            <List>
              <Label>Количество квартир</Label>
              <Value>{propertiesCount}</Value>
              {propertyKind && <Label>Статус</Label>}
              {propertyKind && <Value>{statusCheck(propertyKind)}</Value>}
              <Label>Цены</Label>
              <Value>
                от {formatToFixed(priceFrom.rub / 1000000)} до{' '}
                {formatToFixed(priceTo.rub / 1000000)}{' '}
                млн
              </Value>
              <Label>Безопасность</Label>
              <Value>{securityKinds[security]}</Value>
            </List>
          </Col>
          <Col xs={4}>
            <List>
              <Label>Конструкция корпусов</Label>
              <Value>{constructionKinds[constructionKind]}</Value>
              <Label>Площадь</Label>
              <Value>от {formatToFixed(tArea.from)} до {formatToFixed(tArea.to)} м²</Value>
              <Label>Высота потолков</Label>
              <Value>{formatToFixed(cHeight.from)} - {formatToFixed(cHeight.to)} м</Value>
              <Label>Обслуживание</Label>
              <Value>{maintenanceCosts} руб / м² / месяц</Value>
            </List>
          </Col>
          <Col xs={4}>
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
    </ScrollMobile>
  );
}
