import React from 'react';
import styled from 'styled-components';
import developmentLogo from './compass-development-logo.svg';

const Banner = styled.div`
  padding-top: 5rem;
  padding-bottom: 5rem;
  line-height: 0;
  text-align: center;
  background-color: #161616;
`;

const Logo = styled.img`
  width: 26.1875rem;
  height: 8.1875rem;
`;

export default () =>
  (<Banner>
    <Logo src={developmentLogo} alt="Compass Development Logo" />
  </Banner>);
