// @flow
import React from 'react';
import { Grid } from 'react-flexbox-grid';
import styled from 'styled-components';
import Banner from './Banner';
import DevelopmentSection from './DevelopmentSection';
import Card from './Card';
import { get } from '../../api';
import type { ComplexType } from '../types';
import { media } from '../../utils';

const Content = styled.main`
  padding-bottom: 1rem;
  padding-left: 1rem;
  padding-right: 1rem;

  ${media.xs`
    padding-left: 0;
    padding-right: 0;
    padding-bottom: 1rem;
  `};
`;

class Cards extends React.Component {
  state: Array<ComplexType>;
  state = {
    complexes: [],
  };

  componentDidMount() {
    get('complexes?filter[state]=public').then((json) => {
      this.setState({ complexes: json.items });
    });
  }

  render() {
    return (
      <div>
        <Banner />
        <DevelopmentSection />
        <Content>
          <Grid>
            {this.state.complexes.map(complex => <Card complex={complex} key={complex.id} />)}
          </Grid>
        </Content>
      </div>
    );
  }
}

export default Cards;
