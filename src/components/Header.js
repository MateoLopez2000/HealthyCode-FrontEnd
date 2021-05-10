import React from 'react';
import {
  Navbar,
  Nav,
  NavDropdown,
  Button,
  FormControl,
  Form,
} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
export default function Header() {
  return (
    <Navbar expand="lg">
      <LinkContainer to="/">
        <Navbar.Brand>Video</Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <LinkContainer to="/detailPage">
            <Nav.Link>Detail Page</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/userRegistration">
            <Nav.Link href="#link">User Register</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/dashboard">
            <Nav.Link href="#link">Protected</Nav.Link>
          </LinkContainer>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="#login">Mark Otto</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar.Collapse>
    </Navbar>
  );
}
