import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";

export default () => {
  return (
    <section className="development-section">
      <Grid>
        <Row center="lg">
          <Col lg={8}>
            <h2 className="development-title">Discover Our New Developments</h2>
            <p className="development-description">
              Compass brings a modern approach to new development marketing and
              sales. From boutique rental conversions to luxurious ground-up
              condominiums, browse our portfolio of current offerings.
            </p>
            <button className="development-contact-button">
              Contact The Team
            </button>
          </Col>
        </Row>
      </Grid>
    </section>
  );
};
