import React from 'react';
import './User-register.css';
import InputGroup from 'react-bootstrap/InputGroup';
import {
  Form,
  Button,
  FormGroup,
  FormControl,
  ControlLabel,
  Dropdown,
} from 'react-bootstrap';

export default function UserRegister() {
  return (
    <div className="background">
      <form action="/action_page.php">
        <div className="container">
          <h1>Register</h1>
          <p>Please fill in this form to create an account.</p>

          <label for="email">
            <b>Email</b>
          </label>
          <InputGroup className="mb-3">
            <FormControl
              placeholder="Email"
              aria-label="email"
              aria-describedby="basic-addon1"
            />
          </InputGroup>

          <label for="psw">
            <b>Password</b>
          </label>
          <InputGroup className="mb-3">
            <FormControl
              type="password"
              placeholder="Password"
              aria-label="password"
              aria-describedby="basic-addon1"
            />
          </InputGroup>

          <label for="psw-repeat">
            <b>Repeat Password</b>
          </label>
          <InputGroup className="mb-3">
            <FormControl
              placeholder="Repeat Password"
              aria-label="passwordrepeat"
              aria-describedby="basic-addon1"
            />
          </InputGroup>

          <Form.Group controlId="exampleForm.ControlSelect2">
            <Form.Label>
              <b>Elija su Genero</b>
            </Form.Label>
            <Form.Control as="select" multiple>
              <option>M</option>
              <option>F</option>
              <option>?</option>
            </Form.Control>
          </Form.Group>

          <label for="date">
            <b>Date</b>
          </label>
          <InputGroup className="mb-3">
            <FormControl
              placeholder="Introduce Fecha"
              aria-label="date"
              aria-describedby="basic-addon1"
            />
          </InputGroup>

          <Form.Group controlId="exampleForm.ControlSelect2">
            <Form.Label>
              <b>Ciudad</b>
            </Form.Label>
            <Form.Control as="select" multiple>
              <option>Cochababa</option>
              <option>La Paz</option>
              <option>Chuquisaca</option>
              <option>Santa Cruz</option>
              <option>Oruro</option>
              <option>Beni</option>
            </Form.Control>
          </Form.Group>

          <label for="pais">
            <b>Pais</b>
          </label>
          <InputGroup className="mb-3">
            <FormControl
              placeholder="Introduce pais"
              aria-label="pais"
              aria-describedby="basic-addon1"
            />
          </InputGroup>

          <Form>
            <Form.Group>
              <Form.File id="exampleFormControlFile1" label="Elija foto" />
            </Form.Group>
          </Form>

          <p>
            By creating an account you agree to our{' '}
            <a href="#">Terms Privacy</a>.
          </p>
          <Button className="registerbtn">Register</Button>
        </div>

        <div className="container signin">
          <p>
            Already have an account? <a href="#">Sign in</a>.
          </p>
        </div>
      </form>
    </div>
  );
}
