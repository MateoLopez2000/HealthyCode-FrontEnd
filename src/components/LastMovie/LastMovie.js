import React from 'react';
import moment from 'moment';
import './LastMovie.css';

export default function LastMovie({ data }) {
  return (
    <div className="card ">
      <img src={data.imagen} class="img-fluid card-img-top" />
      <div className="card-body">
        <h5 className="card-title name">{data.name}</h5>
        <p className="card-text name">{data.descripcion}</p>
        <p className="card-text">
          <small className="text-muted date">
            Last updated {moment(data.fecha, 'YYYYMMDD').fromNow()}
          </small>
        </p>
      </div>
    </div>
  );
}
