import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";

export default () => {
  return (
    <Grid>
      <div className="complex-wrap">
        <div className="complex-header">
          <h1 className="complex-title">Жилой комплекс «Полянка/44»</h1>
          <p className="complex-address">
            Район Якиманка, улица Большая Полянка, дом 44 • 119180
          </p>
        </div>
        <button className="complex-favorite-button">В избранное</button>
      </div>
    </Grid>
  );
};
