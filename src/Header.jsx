// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import { Grid } from 'react-flexbox-grid';
import styled from 'styled-components';
import logo from './compass-logo.svg';

const Header = styled.header`
  background-color: #fff;
`;

const HeaderWrap = styled.div`
  padding-top: 1rem;
  padding-bottom: 1rem;

  @media (min-width: 48rem) {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    padding-top: 1.25rem;
    padding-bottom: 1.25rem;
  }
`;

const LogoLink = styled(Link)`
  line-height: 0;
`;

const Logo = styled.img`
  width: 7.5rem;
  height: 1rem;
  margin-left: 1rem;

  @media (min-width: 48rem) {
    width: 11.1875rem;
    height: 1.5rem;
  }
`;

const Nav = styled.nav`
  display: none;

  @media (min-width: 48rem) {
    display: block;
    text-align: right;
  }
`;

const NavLink = styled(Link)`
  margin-left: 2rem;
  line-height: 1.5;
  color: #3e4247;
  text-decoration: none;
`;

export default () =>
  (<Header>
    <Grid>
      <HeaderWrap>
        <LogoLink to="/"><Logo src={logo} alt="Compass Logo" /></LogoLink>
        <Nav>
          <NavLink to="/">Купить</NavLink>
          <NavLink to="/">Снять</NavLink>
          <NavLink to="/">Наши агенты</NavLink>
        </Nav>
      </HeaderWrap>
    </Grid>
  </Header>);
