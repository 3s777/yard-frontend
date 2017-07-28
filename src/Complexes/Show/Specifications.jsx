// @flow
import React from 'react';
import { Row, Col, Grid } from 'react-flexbox-grid';
import styled from 'styled-components';
import { parkingCheck, formatToFixed, media } from '../../utils';
import { kinds, securityKinds, constructionKinds, quarters } from './translation';
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
  padding-bottom: 1rem;
  padding-left: 1rem;
  padding-right: 1rem;
  width: 76rem;
  box-sizing: border-box;

  ${media.lg`
    padding-left: 0;
    padding-right: 0;
    padding-bottom: 2.375rem;
  `};
`;

const Title = styled.h2`
  margin-top: 0;
  margin-bottom: 1rem;
  padding-top: 2rem;
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
    <div>
      <Grid>
        <Title>Характеристики</Title>
      </Grid>
      <ScrollMobile>
        <Specifications>
          <Row>
            <Col xs={4}>
              <List>
                <Label>Количество квартир</Label>
                <Value>{propertiesCount}</Value>
                {propertyKind && <Label>Статус</Label>}
                {propertyKind && <Value>{kinds[propertyKind]}</Value>}
                <Label>Цены</Label>
                <Value>
                  от {formatToFixed(priceFrom.rub / 1000000)} до{' '}
                  {formatToFixed(priceTo.rub / 1000000)}{' '}
                  млн
                </Value>
                {securityKinds[security] && <Label>Безопасность</Label>}
                {securityKinds[security] && <Value>{securityKinds[security]}</Value>}
              </List>
            </Col>
            <Col xs={4}>
              <List>
                {constructionKinds[constructionKind] && <Label>Конструкция корпусов</Label>}
                {constructionKinds[constructionKind] &&
                  <Value>{constructionKinds[constructionKind]}</Value>}
                <Label>Площадь</Label>
                <Value>от {formatToFixed(tArea.from)} до {formatToFixed(tArea.to)} м²</Value>
                {cHeight.from && <Label>Высота потолков</Label>}
                {cHeight.from &&
                  <Value>{formatToFixed(cHeight.from)} - {formatToFixed(cHeight.to)} м</Value>}
                {maintenanceCosts && <Label>Обслуживание</Label>}
                {maintenanceCosts && <Value>{maintenanceCosts} руб / м² / месяц</Value>}
              </List>
            </Col>
            <Col xs={4}>
              <List>
                {quarters[startQuarter] && <Label>Начало строительства</Label>}
                {quarters[startQuarter] &&
                  <Value>{quarters[startQuarter]} квартал {startYear} года</Value>}
                {quarters[commissioningQuarter] && <Label>Конец строительства</Label>}
                {quarters[commissioningQuarter] &&
                  <Value>{quarters[commissioningQuarter]} квартал {commissioningYear} года</Value>}
                <Label>Наземная парковка</Label>
                <Value>{parkingCheck(parkings)}</Value>
                <Label>Подземная парковка</Label>
                <Value>{parkingCheck(undergroundGarages)}</Value>
              </List>
            </Col>
          </Row>
        </Specifications>
      </ScrollMobile>
    </div>
  );
}
