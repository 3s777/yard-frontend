import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";

export default () => {
  return (
    <div className="complex-specifications">
      <h2 className="complex-specifications-title">Характеристики</h2>
      <Row>
        <Col lg={4}>
          <dl className="complex-specifications-list">
            <dt className="complex-specifications-list-title">
              Количество квартир:
            </dt>
            <dd className="complex-specifications-list-value">1 503</dd>
            <dt className="complex-specifications-list-title">Статус:</dt>
            <dd className="complex-specifications-list-value">Квартиры</dd>
            <dt className="complex-specifications-list-title">Цены:</dt>
            <dd className="complex-specifications-list-value">
              от 5.3 до 143.5 млн
            </dd>
          </dl>
        </Col>
        <Col lg={4}>
          <dl className="complex-specifications-list">
            <dt className="complex-specifications-list-title">
              Количество квартир:
            </dt>
            <dd className="complex-specifications-list-value">1 503</dd>
            <dt className="complex-specifications-list-title">
              Количество квартир:
            </dt>
            <dd className="complex-specifications-list-value">1 503</dd>
            <dt className="complex-specifications-list-title">
              Количество квартир:
            </dt>
            <dd className="complex-specifications-list-value">1 503</dd>
          </dl>
        </Col>
        <Col lg={4}>
          <dl className="complex-specifications-list">
            <dt className="complex-specifications-list-title">
              Количество квартир:
            </dt>
            <dd className="complex-specifications-list-value">1 503</dd>
            <dt className="complex-specifications-list-title">
              Количество квартир:
            </dt>
            <dd className="complex-specifications-list-value">1 503</dd>
            <dt className="complex-specifications-list-title">
              Количество квартир:
            </dt>
            <dd className="complex-specifications-list-value">1 503</dd>
          </dl>
        </Col>
      </Row>
    </div>
  );
};
