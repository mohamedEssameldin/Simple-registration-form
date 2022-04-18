import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <Navbar bg='dark' variant='dark'>
      <Container>
        <Nav className='me-auto'>
          <Nav.Link>
            <Link style={{ textDecoration: "none", color: "white" }} to='/'>
              Home
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link style={{ textDecoration: "none", color: "white" }} to='/add'>
              Add Candiate
            </Link>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;
