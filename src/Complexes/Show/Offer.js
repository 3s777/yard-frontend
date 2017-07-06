import React from "react";
import { Col } from "react-flexbox-grid";
import styled from "styled-components";

const Offer = styled.div`
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  padding-left: 2rem;
  padding-right: 2rem;
  background: #fff;
`;

const Title = styled.h3`
  margin-top: 0;
  margin-bottom: 1.5rem;
  font-family: 'Philosopher', sans-serif;
  font-size: 1.25rem;
  font-weight: bold;
  line-height: 1;
  color: #3e4247;
`;

const Info = styled.dl`
  margin-bottom: 1.5625rem;
`;

const OfferKey = styled.dt`
  margin-bottom: 0.625rem;
  font-size: 1rem;
  line-height: 1.375rem;
  color: #a9afb6;
`;

const OfferValue = styled.dd`
  margin-left: 0;
  font-size: 1rem;
  line-height: 1.375rem;
  color: #3e4247;
`;

const OfferButton = styled.button`
  display: block;
  margin-top: 2.0625rem;
  margin-left: auto;
  margin-right: auto;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  padding-right: 1.875rem;
  padding-left: 1.875rem;
  border: 0;
  font-family: 'Fira Sans', sans-serif;
  font-size: 1rem;
  font-weight: 400;
  color: #fff;
  line-height: 1;
  background-color: #000;
  border-radius: 0.125rem;
  cursor: pointer;
`;

export default () => {
  return (
    <Col lg={4}>
      <Offer>
        <Title>1-комнатные квартиры</Title>
        <Info>
          <OfferKey>Площадь</OfferKey>
          <OfferValue>от 59 до 120 м²</OfferValue>
        </Info>
        <Info>
          <OfferKey>Стоимость</OfferKey>
          <OfferValue>от 20.3 до 84.2 млн руб</OfferValue>
        </Info>
        <OfferButton>
          Посмотреть предложения
        </OfferButton>
      </Offer>
    </Col>
  );
};
