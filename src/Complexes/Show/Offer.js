import React from "react";
import { Col } from "react-flexbox-grid";

export default () => {
  return (
    <Col lg={4}>
      <div className="complex-offer">
        <h3 className="complex-offer-title">1-комнатные квартиры</h3>
        <dl className="complex-offer-info">
          <dt className="complex-offer-info-title">Площадь</dt>
          <dd className="complex-offer-info-value">от 59 до 120 м²</dd>
        </dl>
        <dl className="complex-offer-info">
          <dt className="complex-offer-info-title">Стоимость</dt>
          <dd className="complex-offer-info-value">
            от 20.3 до 84.2 млн руб
          </dd>
        </dl>
        <button className="complex-offer-info-button">
          Посмотреть предложения
        </button>
      </div>
    </Col>
  );
};
