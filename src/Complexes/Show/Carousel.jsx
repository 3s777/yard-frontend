/* @flow */
import React, { Component } from 'react';
import styled from 'styled-components';
import { imagesUrl } from '../../utils';

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 11;
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
  background-color: rgba(17, 17, 17, 0.95);
`;

const CarouselImage = styled.img`
  max-height: 80vh;
  max-width: 80vw;
  min-width: 50vw;
  width: 100%;
  z-index: 100;
  transition: transform .25s ease-out;
  transform-origin: center bottom;
  cursor: pointer;
`;

const Title = styled.div`
  position: absolute;
  bottom: 4rem;
  margin-top: 1.5rem;
  margin-bottom: 0rem;
  width: 100%;
  padding: 0;
  font-weight: 300;
  color: #a9afb6;
  text-align: center;
`;

class Carousel extends Component {
  state = {
    active: this.props.activeImage,
  };

  componentDidMount() {
    document.addEventListener('keydown', this.onKeyboard);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.onKeyboard);
  }

  onImageClick = (e: SyntheticInputEvent, id: number) => {
    e.stopPropagation();
    this.setState({ active: id });
  };

  onKeyboard = (e: KeyboardEvent) => {
    e.stopPropagation();
    if (e.keyCode === 37) this.navImage(this.state.active - 1);
    if (e.keyCode === 39) this.navImage(this.state.active + 1);
  };

  getItemTransformation(id: number) {
    return {
      transform: this.state.active === id
        ? `translateX(calc(50vw - 50% - ${this.state.active * 100}%))`
        : `translateX(calc(50vw - 50% - ${this.state.active * 100}% + ${id -
            this.state.active} * 4rem)) scaleY(${1 / 1.2})`,
      opacity: this.state.active === id ? 1.0 : 0.5,
    };
  }

  navImage(id: number) {
    const lastImage = this.props.images.length - 1;

    if (id < 0) this.setState({ active: lastImage });
    else if (id >= lastImage + 1) this.setState({ active: 0 });
    else this.setState({ active: id });
  }

  render() {
    const images = this.props.images || [];
    const imageCounter: number = images.length;

    return (
      <Modal onClick={this.props.closePortal}>
        {images.map((image, id) =>
          (<CarouselImage
            onClick={
              this.state.active === id
                ? e =>
                    this.onImageClick(
                      e,
                      imageCounter > id + 1 ? id + 1 : (this.onImageClick.id = 0),
                    )
                : e => this.onImageClick(e, id)
            }
            style={this.getItemTransformation(id)}
            key={image.id}
            src={`${imagesUrl + image.id}-1024`}
            srcSet={`${imagesUrl + image.id}-1024 2x, ${imagesUrl + image.id}-2048 3x `}
            alt={`Фотография ${id + 1}/${imageCounter}`}
          />),
        )}
        <Title>
          {this.state.active + 1}/{imageCounter} фотография
        </Title>
      </Modal>
    );
  }
}

export default Carousel;
