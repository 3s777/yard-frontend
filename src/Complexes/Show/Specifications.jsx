import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components';

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

export default props =>
  (<Specifications>
    <Title>Характеристики</Title>
    <Row>
      <Col lg={4}>
        <List>
          <Label>Количество квартир</Label>
          <Value>{props.counter}</Value>
          <Label>Статус</Label>
          <Value>{props.status}</Value>
          <Label>Цены</Label>
          <Value>от {props.price.min} до {props.price.max} млн</Value>
          <Label>Безопасность</Label>
          <Value>{props.guard}</Value>
        </List>
      </Col>
      <Col lg={4}>
        <List>
          <Label>Конструкция корпусов</Label>
          <Value>{props.construction}</Value>
          <Label>Площадь</Label>
          <Value>от {props.totalArea.min} до {props.totalArea.max} м²</Value>
          <Label>Высота потолков</Label>
          <Value>{props.ceilheight.min} - {props.ceilheight.max} м</Value>
          <Label>Обслуживание</Label>
          <Value>{props.maintenanceCosts} руб / м² / месяц</Value>
        </List>
      </Col>
      <Col lg={4}>
        <List>
          <Label>Начало строительства</Label>
          <Value>{props.startQuarter} квартал {props.startYear} года</Value>
          <Label>Конец строительства</Label>
          <Value>{props.commissioningQuarter} квартал {props.commissioningYear} года</Value>
          <Label>Наземная парковка</Label>
          <Value>{props.parkings}</Value>
          <Label>Подземная парковка</Label>
          <Value>{props.undergroundGarages}</Value>
        </List>
      </Col>
    </Row>
  </Specifications>);
