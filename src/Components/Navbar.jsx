import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

function MyNavbar() {
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container>
     
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#services">Services</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Brand href="#home">Logo</Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
