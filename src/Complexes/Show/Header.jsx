import React from 'react';
import { Grid } from 'react-flexbox-grid';
import styled from 'styled-components';

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
  font-size: 0.625rem;
  font-weight: 300;
  line-height: 1;
  text-decoration: none;
  color: #00779a;
  background: #fff;
  border-radius: 0.125rem;
  cursor: pointer;
`;

export default props =>
  (<Grid>
    <Header>
      <div>
        <Title>Жилой комплекс «{props.title}»</Title>
        <Address>
          Район {props.district}, {props.street}, дом {props.house}
        </Address>
      </div>
      <Button>В избранное</Button>
    </Header>
  </Grid>);
