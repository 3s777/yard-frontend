import React from 'react';
import { Grid } from 'react-flexbox-grid';
import styled from 'styled-components';
import Banner from './Banner';
import DevelopmentSection from './DevelopmentSection';
import Card from './Card';
import { getApi } from '../../getApi';

const Content = styled.main`
  padding-bottom: 3rem;
`;

class Cards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    getApi('/complexes?filter[state]=public').then((json) => {
      this.setState({ data: json.items });
    });
  }

  render() {
    return (
      <div>
        <Banner />
        <DevelopmentSection />
        <Content>
          <Grid>
            {this.state.data.map(complex => <Card complex={complex} key={complex.id} />)}
          </Grid>
        </Content>
      </div>
    );
  }
}

export default Cards;
