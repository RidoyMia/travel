import React from 'react';
import { Container, Nav, Navbar, } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from '../../images/techArealogo.png';
import './Header.css';

const Header = () => {
    return (
      //Header part
<Navbar collapseOnSelect expand="lg" bg="light" variant="light">
  <Container>
  <Navbar.Brand to="#home">
      <img
        src={logo}
        width="200"
        height="50"
        className="d-inline-block align-top"
        alt="learn-area-logo"
      />
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav" >
      <Nav className="ms-auto ">
        <NavLink className="nav-link" to="/home" >Home</NavLink>
        <NavLink to="/services" className="nav-link">Services</NavLink>
        <NavLink to="/about" className="nav-link">About</NavLink>
        <NavLink to="/contact" className="nav-link">Contact</NavLink>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    );
};

export default Header;