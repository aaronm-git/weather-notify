import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import {
  CloudSun,
  PersonPlusFill,
  DoorClosedFill,
} from "react-bootstrap-icons";

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
            <Nav.Link href="/dashboard">Dashboard</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
          </Nav>
          <Nav className="ml-auto">
            <Navbar.Text className="mr-3">
              Signed in as: <strong>Mark Otto</strong>
            </Navbar.Text>
            <Nav.Link className="btn btn-danger text-white" href="/logout">
              <DoorClosedFill className="mb-1 mr-2" />
              Log Out
            </Nav.Link>
            <Nav.Link className="btn btn-success text-white" href="/signup">
              <PersonPlusFill className="mb-1 mr-2" />
              Sign up
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
