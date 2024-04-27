import React from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

export const NavBar = () => {
  let navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };
  return (
    <Navbar sticky="top" expand="md">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/portfolio">Portfolio</Link>
            <Link to="/contact">Contact</Link>
          </Nav>
        </Navbar.Collapse>
        <Button className="btn-danger btn-sm" onClick={handleBack}>
          Back
        </Button>
      </Container>
    </Navbar>
  );
};
