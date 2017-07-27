// @flow
import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components';
import { media } from '../../utils';

const Description = styled.div`
  padding-bottom: 1rem;
  border-bottom: 0.0625rem solid #e0e0e1;

  ${media.xs`
    padding-bottom: 1.75rem;
  `};
`;

const Title = styled.h2`
  margin: 0;
  padding: 1rem;
  font-family: 'Philosopher', sans-serif;
  font-size: 1.5rem;
  line-height: 1.13;
  color: #3e4247;

  ${media.xs`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
    padding: 0;
  `};
`;

const Content = styled.article`
  position: relative;
  padding-left: 1rem;
  padding-right: 1rem;
  height: 20rem;
  overflow: hidden;

  ${media.xs`
    height: auto;
  `};
`;

const Paragraph = styled.p`
  margin-top: 0;
  margin-bottom: 1.75rem;
  font-size: 1rem;
  line-height: 1.5rem;
  text-align: left;
  color: #3e4247;

  ${media.xs`
    padding: 0;
  `};

  &:last-child {
    margin-bottom: 0;
  }
`;

const ButtonWrapper = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: center;
  padding-top: 5.375rem;
  width: 100%;
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0.3), #fff);

  ${media.xs`
    display: none;
  `};
`;

const Button = styled.button`
  display: block;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 1.3125rem;
  padding-right: 1.3125rem;
  border: 0;
  font-family: 'Fira Sans', sans-serif;
  font-size: 0.625rem;
  color: #fff;
  background-color: #00779a;
  border-radius: 0.125rem;
  cursor: pointer;

  ${media.xs`
    display: none;
  `};
`;

type Props = {
  fullDescription: string,
};

class Fulldescription extends React.Component {
  constructor(props: Props) {
    super(props);
    this.state = {
      isOpened: false,
    };
  }

  state: { isOpened: boolean };

  handleClick = () => {
    this.setState({
      isOpened: true,
    });
  };

  render() {
    const contentStyle = {
      height: 'auto',
    };

    return (
      <Description>
        <Row>
          <Col sm={2} xs={12}>
            <Title>Описание</Title>
          </Col>
          <Col sm={10} xs={12}>
            <Content style={this.state.isOpened ? contentStyle : null}>
              <Paragraph>
                ВТБ Арена Парк — современный квартал в 10 минутах езды от Кремля. Территория
                разделена
                на три зоны: жилой район, центральный стадион «Динамо» и большой спортивный парк.
              </Paragraph>
              <Paragraph>
                Жилой район — это 13 корпусов: апартаменты, штаб-квартира «Динамо», отель «Hyatt
                Regency Moscow» и четыре современных бизнес-центра. На территории — рестораны,
                спа-комплекс, фитнес-центр, химчистка, аптеки, магазины и отделения банков. В каждом
                корпусе работает консьерж и круглосуточная охрана. Для жителей оборудованы
                технические
                помещения под хранение колясок и велосипедов, комнаты для домашних животных и уютные
                вестибюли с мягкими креслами для встреч с друзьями и соседями.
              </Paragraph>
              <Paragraph>
                Сердце ВТБ Арена Парк — стадион. Под одной крышей расположились музей,
                торгово-развлекательный комплекс, подземная парковка для гостей и две крупные
                спортивные арены. Жизнь квартала сосредоточена в этой зоне: здесь можно сходить на
                концерт или фестиваль, поболеть за любимую команду и купить новую рубашку в торговом
                комплексе.
              </Paragraph>
              <Paragraph>
                Тихий жилой район от шумного стадиона отделяет Парк Физкультуры и Отдыха. Здесь
                каждый
                найдет занятие: для детей оборудованы игровые зоны, для подростков — спортивные
                площадки на открытом воздухе, для взрослых — велосипедные дорожки и зоны отдыха, где
                можно подышать свежим воздухом во время рабочего перерыва.
              </Paragraph>
              {!this.state.isOpened &&
                <ButtonWrapper>
                  <Button onClick={this.handleClick}>Прочитать описание</Button>
                </ButtonWrapper>}
            </Content>
          </Col>
        </Row>
      </Description>
    );
  }
}

export default Fulldescription;
