import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { CloudSun } from "react-bootstrap-icons";

const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">
          Weather
          <CloudSun className="mb-2 text-primary" />
          Notify
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="">
            <Nav.Link href="https://aaronmolina.me">Aaron Molina</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
          </Nav>
          <Nav className="ml-auto">
            <Navbar.Text className="mr-3">
              Signed in as: <strong>Mark Otto</strong>
            </Navbar.Text>
            <Nav.Link className="btn btn-danger text-white" href="/logout">
              Log Out
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
