import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";

export default () => {
  return (
    <div className="complex-map">
      <Grid>
        <Row>
          <Col lg={6}>
            <img
              className="complex-map-photo"
              src={process.env.PUBLIC_URL + "/map.png"}
              srcSet="/map@2x.png 2x, /map@3x.png 3x"
              alt="Карта местности комплекса"
            />
          </Col>
          <Col lg={6}>
            <dl className="complex-map-places">
              <dt className="complex-map-places-name">Красный Октябрь</dt>
              <dd className="complex-map-places-value">24 минуты, 6 км</dd>
              <dt className="complex-map-places-name">World className</dt>
              <dd className="complex-map-places-value">2 минуты, 300 м</dd>
              <dt className="complex-map-places-name">
                Третьяковская галерея
              </dt>
              <dd className="complex-map-places-value">14 минут, 4 км</dd>
            </dl>
          </Col>
        </Row>
      </Grid>
    </div>
  );
};
