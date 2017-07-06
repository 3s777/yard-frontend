import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import styled from "styled-components";

const Structure = styled.div`
  padding-top: 2rem;
  padding-bottom: 4rem;
`;

const Title = styled.h2`
  margin-top: 0;
  margin-bottom: 0.75rem;
  font-family: 'Philosopher', sans-serif;
  font-size: 1.5rem;
  font-weight: bold;
  line-height: 1.3;
  color: #3e4247;
`;

const Item = styled.div`
  margin-bottom: 0.5rem;
  font-size: 1rem;
  line-height: 1.38;
  color: #3e4247;

&:last-child {
  margin-bottom: 0;
  }
`;

export default () => {
  return (
    <Structure>
      <Title>Инфраструктура</Title>
      <Row>
        <Col lg={2}>
          <Item>Бассейн</Item>
          <Item>Частная школа</Item>
        </Col>
        <Col lg={2}>
          <Item>Детский сад</Item>
          <Item>Частная школа</Item>
        </Col>
        <Col lg={2}>
          <Item>Частная школа</Item>
          <Item>Частная школа</Item>
        </Col>
        <Col lg={2}>
          <Item>Бассейн</Item>
        </Col>
        <Col lg={2}>
          <Item>Детский сад</Item>
        </Col>
        <Col lg={2}>
          <Item>Частная школа</Item>
        </Col>
      </Row>
    </Structure>
  );
};
