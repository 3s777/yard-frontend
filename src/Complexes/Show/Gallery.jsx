// @flow
import React from 'react';
import { Grid } from 'react-flexbox-grid';
import styled from 'styled-components';
import pluralize from 'pluralize-ru';
import { imagesUrl, media } from '../../utils';
import type { GalleryImage } from '../types';

const Gallery = styled.div`
  display: flex;
  overflow-x: scroll;
`;

const Image = styled.img`
  height: 25rem;
`;

const Counter = styled.div`
  margin-top: -2.625rem;
  padding-left: 1rem;
  padding-right: 1rem;
  position: relative;
  z-index: 10;

  ${media.xs`
    padding: 0;
  `};
`;

const CounterButton = styled.button`
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  border: 0;
  font-family: 'Fira Sans', sans-serif;
  font-size: 0.625rem;
  font-weight: 300;
  line-height: 1;
  color: #fff;
  text-decoration: none;
  background-color: #00779a;
  border-radius: 0.125rem;
`;

type Props = { images: Array<GalleryImage>, alt: string };

export default function (props: Props) {
  const images = props.images || [];
  const photoPluralize = pluralize(
    images.length,
    'фотографий',
    'фотография',
    'фотографии',
    'фотографий',
  );

  return (
    <div>
      <Gallery>
        {images.map(image =>
          (<Image
            key={image.id}
            src={`${imagesUrl + image.id}-jqestate-512`}
            srcSet={`${imagesUrl + image.id}-jqestate-1024 2x, ${imagesUrl +
              image.id}-jqestate-2048 3x `}
            alt={props.alt}
          />),
        )}
      </Gallery>
      <Counter>
        <Grid>
          <CounterButton>
            {images.length} {photoPluralize}
          </CounterButton>
        </Grid>
      </Counter>
    </div>
  );
}
