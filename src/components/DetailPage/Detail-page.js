import React from 'react';
import './Detail-page.css';
import { Card, Button } from 'react-bootstrap';
export default function DetailPage() {
  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <Card className="text-center">
        <Card.Header>Card Header title Goes Here</Card.Header>
        <Card.Img
          variant="top"
          src="https://indiehoy.com/wp-content/uploads/2020/01/shrek.jpg"
          class="card-img-top img-fluid"
        />
        <Card.Body>
          <Card.Title>Card Title Goes Here</Card.Title>
          <Card.Text>Some Card body content goes here</Card.Text>
          <Button variant="primary">Primary Button</Button>
        </Card.Body>
        <Card.Footer className="text-muted">
          Card footer title Goes Here
        </Card.Footer>
      </Card>
    </div>
  );
}
