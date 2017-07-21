// @flow
import React from 'react';
import styled from 'styled-components';

const Meta = styled.div`
  padding-top: 2.625rem;
  padding-bottom: 1.5rem;
  border-bottom: 0.0625rem solid #e0e0e1;
  display: flex;
  font-family: 'Philosopher', sans-serif;
`;

const Title = styled.h2`
  margin-top: 0;
  margin-bottom: 0;
  margin-left: 0;
  margin-right: 3rem;
  font-size: 1.5rem;
  font-weight: bold;
  line-height: 1.13;
  color: #3e4247;
`;

const SubTitle = styled.small`
  display: block;
  margin-top: 0.625rem;
  font-size: 0.875rem;
  font-weight: 300;
  line-height: 1.57;
  font-family: 'Fira sans', sans-serif;
  color: #a9afb6;
`;

type Props = {
  architect: string,
};

export default function (props: Props) {
  return (
    <Meta>
      <Title>{props.architect}<SubTitle>архитектор</SubTitle></Title>
    </Meta>
  );
}
