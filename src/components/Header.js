import React from 'react';
import './Header.css';
import {
  Navbar,
  Nav,
  NavDropdown,
  Button,
  FormControl,
  Form,
  Container,
} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
export default function Header() {
  return (
    <div className="header">
      <h2> HealthyCode</h2>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/SearchPage">Search</a>
        </li>
        <div>
          <li>
            <a href="/Register">Register</a>
          </li>
        </div>
      </ul>
    </div>
  );
}
