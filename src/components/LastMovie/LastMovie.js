import React from "react";
import moment from "moment";
import "./LastMovie.css";

export default function LastMovie({ data }) {
  return (
    <div class="card ">
      <img src={data.imagen} class="img-fluid card-img-top" />
      <div class="card-body">
        <h5 class="card-title name">{data.name}</h5>
        <p class="card-text name">{data.descripcion}</p>
        <p class="card-text">
          <small class="text-muted date">
            Last updated {moment(data.fecha, "YYYYMMDD").fromNow()}
          </small>
        </p>
      </div>
    </div>
  );
}
