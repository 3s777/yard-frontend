import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import styled from "styled-components";

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

export default props => {
  return (
    <Specifications>
      <Title>Характеристики</Title>
      <Row>
        <Col lg={4}>
          <List>
            <Label>Количество квартир:</Label>
            <Value>{props.flatcounter}</Value>
            <Label>Статус:</Label>
            <Value>{props.flatstatus}</Value>
            <Label>Цены:</Label>
            <Value>от {props.flatprice.min} до {props.flatprice.max} млн</Value>
          </List>
        </Col>
        <Col lg={4}>
          <List>
            <Label>Количество квартир:</Label>
            <Value>{props.flatcounter}</Value>
            <Label>Количество квартир:</Label>
            <Value>{props.flatcounter}</Value>
            <Label>Количество квартир:</Label>
            <Value>{props.flatcounter}</Value>
          </List>
        </Col>
        <Col lg={4}>
          <List>
            <Label>Количество квартир:</Label>
            <Value>{props.flatcounter}</Value>
            <Label>Количество квартир:</Label>
            <Value>{props.flatcounter}</Value>
            <Label>Количество квартир:</Label>
            <Value>{props.flatcounter}</Value>
          </List>
        </Col>
      </Row>
    </Specifications>
  );
};
