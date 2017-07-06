import React from "react";
import { Grid } from "react-flexbox-grid";
import styled from "styled-components";

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

export default () => {
  return (
    <div>
      <Gallery>
        <img
          src={process.env.PUBLIC_URL + "/photo1.jpg"}
          srcSet="/photo1@2x.jpg 2x, /photo1@3x.jpg 3x"
          alt="Photo 1"
        />
        <img
          src={process.env.PUBLIC_URL + "/photo2.jpg"}
          srcSet="/photo2@2x.jpg 2x, /photo2@3x.jpg 3x"
          alt="Photo 2"
        />
        <img
          src={process.env.PUBLIC_URL + "/photo3.jpg"}
          srcSet="/photo3@2x.jpg 2x, /photo3@3x.jpg 3x"
          alt="Photo 3"
        />
        <img
          src={process.env.PUBLIC_URL + "/photo4.jpg"}
          srcSet="/photo4@2x.jpg 2x, /photo4@3x.jpg 3x"
          alt="Photo 4"
        />
        <img
          src={process.env.PUBLIC_URL + "/photo5.jpg"}
          srcSet="/photo5@2x.jpg 2x, /photo5@3x.jpg 3x"
          alt="Photo 5"
        />
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
};
