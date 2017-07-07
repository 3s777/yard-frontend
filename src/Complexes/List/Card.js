import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Card = styled(Link)`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  margin-bottom: 3rem;
  text-decoration: none;
  background: #fff;

  &:hover {
    box-shadow: 0 0 1.25rem rgba(0, 0, 0, 0.3);
  }
`;

const Photo = styled.img`
  width: 30.6875rem;
  height: 21.875rem;
`;

const Info = styled.div`
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  padding-left: 2rem;
  padding-right: 5.375rem;
  border-bottom: 0.125rem solid #646971;
`;

const District = styled.p`
  margin: 0;
  font-family: Monaco, Menlo, Consolas, monospace;
  color: #646971;
  text-transform: uppercase;
`;

const Title = styled.h3`
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
  font-size: 2.5rem;
  line-height: 1.4;
  color: #000000;
`;

const Description = styled.p`
  margin: 0;
  line-height: 1.5;
  color: #3e4247;
`;

export default props => {
  return (
    <Card to="/complex">
      <Photo src={props.src} srcSet={props.srcset} alt={props.alt} />
      <Info>
        <District>{props.district}</District>
        <Title>{props.title}</Title>
        <Description>{props.children}</Description>
      </Info>
    </Card>
  );
};
