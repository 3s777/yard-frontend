// @flow
import React from 'react';
import { Grid } from 'react-flexbox-grid';
import styled from 'styled-components';
import Banner from './Banner';
import DevelopmentSection from './DevelopmentSection';
import Card from './Card';
import { get } from '../../api';

const Content = styled.main`
  padding-bottom: 3rem;
`;

class Cards extends React.Component {
  constructor(props: Object) {
    super(props);
    this.state = {
      complexes: [],
    };
  }
  state: {
    complexes: Array<Object>,
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
