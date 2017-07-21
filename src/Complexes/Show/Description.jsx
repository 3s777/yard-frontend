// @flow
import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components';

const Description = styled.div`
  padding-bottom: 1.75rem;
  border-bottom: 0.0625rem solid #e0e0e1;
`;

const Title = styled.h2`
  margin: 0;
  font-family: 'Philosopher', sans-serif;
  font-size: 1.5rem;
  line-height: 1.13;
  color: #3e4247;
`;

const Paragraph = styled.p`
  margin-top: 0;
  margin-bottom: 1.75rem;
  font-size: 1rem;
  line-height: 1.5rem;
  text-align: left;
  color: #3e4247;

  &:last-child {
    margin-bottom: 0;
  }
`;

type Props = {
  fullDescription: string,
};

export default function (props: Props) {
  return (
    <Description>
      <Row>
        <Col lg={2}>
          <Title>Описание</Title>
        </Col>
        <Col lg={10}>
          <article>
            <Paragraph>
              {props.fullDescription}
            </Paragraph>
          </article>
        </Col>
      </Row>
    </Description>
  );
}
