import React from "react";
import { Link } from "react-router-dom";
import { Grid } from "react-flexbox-grid";
import styled from "styled-components";
import logo from "./compass-logo.svg";

const Header = styled.header`
  background-color: #fff;
`;

const HeaderWrap = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  padding-top: 1.25rem;
  padding-bottom: 1.25rem;
`;

const Logo = styled.img`
  width: 11.1875rem;
  height: 1.5rem;
`;

const Nav = styled.nav`
  text-align: right;
`;

const NavLink = styled(Link)`
  margin-left: 1.75rem;
  line-height: 1.5;
  color: #3e4247;
  text-decoration: none;
`;

export default () => {
  return (
    <Header>
      <Grid>
        <HeaderWrap>
          <Logo src={logo} alt="Compass Logo" />
          <Nav>
            <NavLink to="/">Купить</NavLink>
            <NavLink to="/">Снять</NavLink>
            <NavLink to="/">Наши агенты</NavLink>
          </Nav>
        </HeaderWrap>
      </Grid>
    </Header>
  );
};
