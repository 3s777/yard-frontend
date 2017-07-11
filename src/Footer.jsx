import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components';
import footerArrow from './footer-arrow.svg';

const Footer = styled.footer`
  padding-top: 2rem;
  padding-bottom: 2rem;
  background: #111;
`;

const Title = styled.h4`
  margin-top: 0;
  margin-bottom: 0.5rem;
  font-size: 0.875rem;
  color: #646971;
`;

const Info = styled.p`
  font-size: 0.875rem;
  font-weight: 300;
  color: #a9afb6;

  &:last-child {
    margin-top: 1.5rem;
  }
`;

const FooterNav = styled.div`
  padding-top: 1rem;
  border-top: 0.125rem solid #3e4247;
  line-height: 1.5;
`;

const ComplexesLink = styled(Link)`
  display: block;
  margin-top: 0.5rem;
  font-size: 0.875rem;
  font-weight: 300;
  color: #fff;
  text-decoration: none;

  &:last-child {
    margin-top: 1rem;
  }
`;

const CompanyLink = styled(Link)`
  display: block;
  margin-top: 0.5rem;
  font-size: 0.875rem;
  font-weight: 300;
  color: #fff;
  text-decoration: none;
`;

const Description = styled.p`
  margin-top: 5.9375rem;
  font-size: 0.6875rem;
  font-weight: 300;
  line-height: 1.8;
  text-align: left;
  color: #a9afb6;
`;

export default () =>
  (<Footer>
    <Grid>
      <Row>
        <Col lg={4}>
          <Title>ООО «Ярд»</Title>
          <Info>ОГРН 1175074002531</Info>
          <Info>ИНН 5036165365</Info>
          <Info>+7 (999) 821-14-88</Info>
        </Col>
        <Col lg={8}>
          <Row>
            <Col lg={3}>
              <FooterNav>
                <Title>Жилые комплексы</Title>
                <nav>
                  <ComplexesLink to="/">ВТБ Арена Парк</ComplexesLink>
                  <ComplexesLink to="/">Садовые кварталы</ComplexesLink>
                  <ComplexesLink to="/">Резиденция Монэ</ComplexesLink>
                  <ComplexesLink to="/">
                    Все ЖК Москвы <img src={footerArrow} alt="" />
                  </ComplexesLink>
                </nav>
              </FooterNav>
            </Col>
            <Col lg={3}>
              <FooterNav>
                <Title>Компания</Title>
                <nav>
                  <CompanyLink to="/">Команда</CompanyLink>
                  <CompanyLink to="/">О компании</CompanyLink>
                </nav>
              </FooterNav>
            </Col>
          </Row>
          <Row>
            <Col lg={12}>
              <Description>
                Любая информация, представленная на данном сайте, носит
                исключительно информационный характер и ни при каких условиях
                не является публичной офертой, определяемой положениями статьи
                437 ГК РФ. © ООО «Ярд», 2017
              </Description>
            </Col>
          </Row>
        </Col>
      </Row>
    </Grid>
  </Footer>);
