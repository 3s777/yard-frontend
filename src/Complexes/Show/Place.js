import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";

export default () => {
  return (
    <div className="complex-place">
      <Grid>
        <Row>
          <Col lg={6}>
            <div className="complex-place-name">Якиманка</div>
            <h2 className="complex-place-title">
              Исторический центр Москвы в двух километрах от Кремля
            </h2>
            <a className="complex-place-link" href="#">Гид по Якиманке →</a>
          </Col>
          <Col lg={6}>
            <img
              className="complex-place-photo"
              src={process.env.PUBLIC_URL + "/polyanka-photo.jpg"}
              srcSet="/polyanka-photo@2x.jpg 2x, /polyanka-photo@3x.jpg 3x"
              alt="Полянка"
            />
          </Col>
        </Row>
      </Grid>
    </div>
  );
};
