// @flow
import React from 'react';
import { Grid } from 'react-flexbox-grid';
import styled from 'styled-components';
import type { LocationTypes } from '../types';

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const Title = styled.h1`
  margin-top: 0;
  margin-bottom: 0.5rem;
  font-family: 'Philosopher', sans-serif;
  font-size: 2rem;
  line-height: 1.13;
  color: #3e4247;
`;

const Address = styled.p`
  margin-top: 0;
  margin-bottom: 1rem;
  font-size: 0.875rem;
  font-weight: 300;
  line-height: 1.57;
  color: #a9afb6;
`;

const Button = styled.button`
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  border: 0.0625rem solid #e0e0e1;
  box-sizing: border-box;
  font-family: 'Fira Sans', sans-serif;
  font-size: 0.625rem;
  font-weight: 300;
  line-height: 1;
  text-decoration: none;
  color: #00779a;
  background: #fff;
  border-radius: 0.125rem;
  cursor: pointer;
`;

type Props = {
  title: string,
  location: LocationTypes,
};

export default function (props: Props) {
  return (
    <Grid>
      <Header>
        <div>
          <Title>Жилой комплекс «{props.title}»</Title>
          <Address>
            Район {props.location.subLocalityName}, {props.location.street}, дом{' '}
            {props.location.house} •
            {' '}
            {props.location.postalCode}
          </Address>
        </div>
        <Button>В избранное</Button>
      </Header>
    </Grid>
  );
}
