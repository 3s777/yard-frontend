import React from 'react';
import { Grid } from 'react-flexbox-grid';
import styled from 'styled-components';

const Gallery = styled.div`
  display: flex;
`;

const Counter = styled.div`
  margin-top: -2.625rem;
`;

const CounterButton = styled.button`
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  border: 0;
  font-size: 0.625rem;
  font-weight: 300;
  line-height: 1;
  color: #fff;
  text-decoration: none;
  background-color: #00779a;
  border-radius: 0.125rem;
`;

export default function (props) {
  const images = props.images || [];
  console.log('Ошибка', props);
  return (
    <div>
      <Gallery>
        {images.map(image =>
          (<img
            key={image.id}
            src={`https://yard-images.s3.amazonaws.com/${image.id}-512`}
            alt="Gallery"
          />),
        )}
      </Gallery>
      <Counter>
        <Grid>
          <CounterButton>
            41 фотография
          </CounterButton>
        </Grid>
      </Counter>
    </div>
  );
}
