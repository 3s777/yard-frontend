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
    fetch('https://yard.moscow/api/v1/complexes?filter%5Bstate%5D=public')
      .then(response => response.json())
      .then((json) => {
        this.setState({ data: json.items });
      });
  }

  render() {
    return (
      <Grid>
        {this.state.data.map(complex =>
          (<Card
            key={complex.id}
            url={complex.slug}
            src={complex.images[0].id}
            srcset2={complex.images[0].id}
            srcset3={complex.images[0].id}
            alt={complex.name}
            district={complex.location.subLocalityName}
            street={complex.location.street}
            house={complex.location.house}
            title={complex.name}
          >
            152 Elizabeth is an ultra-luxury condominium building—the first in
            New York City designed by Japanese master architect Tadao Ando.
            Located at the corner of Kenmare and Elizabeth Streets in Nolita,
            the 32,000-square-foot building will stand as a profound
            architectural statement and embrace the industrial character of the
            neighborhood.
          </Card>),
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
