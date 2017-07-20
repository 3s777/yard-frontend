// @flow
import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components';

const Infrastructure = styled.div`
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

const InfrastructureItem = styled.div`
  margin-bottom: 0.5rem;
  font-size: 1rem;
  line-height: 1.38;
  color: #3e4247;

  &:last-child {
    margin-bottom: 0;
  }
`;

export default function (props: Object) {
  const amenities = props.amenities || [];
  return (
    <Infrastructure>
      <Title>Инфраструктура</Title>
      <Row>
        {amenities.map(amenity =>
          (<Col lg={2}>
            <InfrastructureItem>
              {amenity}
            </InfrastructureItem>
          </Col>),
        )}
      </Row>
    </Infrastructure>
  );
}
