import React from "react";
import { Card } from "react-bootstrap";

export default function LastMovie({ data }) {
  return (
    <Card className="bg-dark text-white">
      <Card.Img src={data.image} alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title>{data.name}</Card.Title>
        <Card.Text>{data.desc}</Card.Text>
        <Card.Text>Last updated 3 mins ago</Card.Text>
      </Card.ImgOverlay>
    </Card>
  );
}
