import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";

export default () => {
  return (
    <div className="complex-structure">
      <h2 className="complex-structure-title">Инфраструктура</h2>
      <Row>
        <Col lg={2}>
          <div className="complex-structure-item">Бассейн</div>
          <div className="complex-structure-item">Частная школа</div>
        </Col>
        <Col lg={2}>
          <div className="complex-structure-item">Детский сад</div>
          <div className="complex-structure-item">Частная школа</div>
        </Col>
        <Col lg={2}>
          <div className="complex-structure-item">Частная школа</div>
          <div className="complex-structure-item">Частная школа</div>
        </Col>
        <Col lg={2}>
          <div className="complex-structure-item">Бассейн</div>
        </Col>
        <Col lg={2}>
          <div className="complex-structure-item">Детский сад</div>
        </Col>
        <Col lg={2}>
          <div className="complex-structure-item">Частная школа</div>
        </Col>
      </Row>
    </div>
  );
};
