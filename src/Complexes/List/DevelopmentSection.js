import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import styled from "styled-components";
import developmentLogo from "./compass-development-logo.svg";

const Development = styled.section`
  padding-top: 4rem;
  padding-bottom: 4rem;
  text-align: center;
`;

const Title = styled.h2`
  margin-top: 0;
  margin-bottom: 0.5rem;
  font-size: 1.5rem;
  line-height: 1.5;
  color: #3e4247;
`;

const Description = styled.p`
  margin: 0;
  line-height: 1.5;
  color: #3e4247;
`;

const Button = styled.button`
  margin-top: 1rem;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  padding-right: 2rem;
  padding-left: 2rem;
  border: 0;
  text-align: center;
  color: #fff;
  background: #000;
  border-radius: 0.125rem;
  cursor: pointer;
`;

export default () => {
  return (
    <Development>
      <Grid>
        <Row center="lg">
          <Col lg={8}>
            <Title>Discover Our New Developments</Title>
            <Description>
              Compass brings a modern approach to new development marketing and
              sales. From boutique rental conversions to luxurious ground-up
              condominiums, browse our portfolio of current offerings.
            </Description>
            <Button>
              Contact The Team
            </Button>
          </Col>
        </Row>
      </Grid>
    </Development>
  );
};
