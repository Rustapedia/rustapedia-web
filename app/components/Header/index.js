import React from 'react';
import { Nav, NavDropdown, Navbar } from 'react-bootstrap';

function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="m-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <NavDropdown
            href="#items"
            title="Items"
            id="collasible-nav-dropdown"
          />
          <NavDropdown
            href="#environment"
            title="Environment"
            id="collasible-nav-dropdown"
          />
          <NavDropdown
            href="#tools"
            title="Tools"
            id="collasible-nav-dropdown"
          />
          <NavDropdown
            href="#community"
            title="Community"
            id="collasible-nav-dropdown"
          />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
