import React from 'react';
import { Grid } from 'react-flexbox-grid';
import styled from 'styled-components';
import Banner from './Banner';
import DevelopmentSection from './DevelopmentSection';
import Card from './Card';

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
    fetch('https://yard.moscow/api/v1/complexes').then(response => response.json()).then((json) => {
      console.log(json);
      this.setState({
        data: json.items,
      });
    });
  }

  render() {
    return (
      <Grid>
        {this.state.data.map(complex =>
          (<Card
            key={complex.id}
            url={complex.slug}
            src={complex.image}
            srcset="/bitmap@2x.jpg 2x, /bitmap@3x.jpg 3x"
            alt={complex.name}
            district={complex.location.subLocalityName}
            street={complex.location.street}
            house={complex.location.house}
            title={complex.name}
          />),
        )}
      </Grid>
    );
  }
}

export default () =>
  (<div>
    <Banner />
    <DevelopmentSection />
    <Content>
      <Cards />
    </Content>
  </div>);
