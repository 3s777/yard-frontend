// @flow
import React from 'react';
import { Grid } from 'react-flexbox-grid';
import Portal from 'react-portal';
import styled from 'styled-components';
import pluralize from 'pluralize-ru';
import { imagesUrl, media } from '../../utils';
import Carousel from './Carousel';

const Gallery = styled.div`
  display: flex;
  overflow-x: scroll;
`;

const Image = styled.img`
  height: 25rem;
  cursor: pointer;
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

export default class GalleryCarousel extends React.Component {
  state = { isPortalOpened: false, activeImage: 0 };

  toggleCarousel = (id: number) => {
    this.setState(prevState => ({ isPortalOpened: !prevState.isPortalOpened, activeImage: id }));
  };

  render() {
    const { activeImage } = this.state;
    const images = this.props.images || [];
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
          {images.map((image, id) =>
            (<Image
              onClick={(e) => {
                e.stopPropagation();
                this.toggleCarousel(id);
              }}
              key={image.id}
              src={`${imagesUrl + image.id}-512`}
              srcSet={`${imagesUrl + image.id}-1024 2x, ${imagesUrl + image.id}-2048 3x `}
              alt={this.props.alt}
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
        <Portal
          closeOnEsc
          closeOnOutsideClick
          isOpened={this.state.isPortalOpened}
          onClose={() => {
            this.setState({ isPortalOpened: false });
          }}
        >
          <Carousel
            onClick={this.props.closeModal}
            activeImage={activeImage || 0}
            escHandler={this.toggleCarousel}
            images={this.props.images}
            closeModal={this.props.closeModal}
          />
        </Portal>
      </div>
    );
  }
}
