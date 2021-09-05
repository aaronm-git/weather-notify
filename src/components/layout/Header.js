import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import {
  CloudSun,
  PersonPlusFill,
  DoorClosedFill,
} from "react-bootstrap-icons";
import { useAuth } from "../contexts/AuthContext";

const Header = () => {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const history = useHistory();
  const handleLogout = async () => {
    try {
      await logout();
      history.push("/login");
    } catch (error) {
      console.error(error);
      setError(error.message);
    }
  };
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
            {currentUser ? (
              <>
                <Navbar.Text className="mr-3">
                  Signed in as: <strong>{currentUser.email}</strong>
                </Navbar.Text>
                <Button
                  className="btn btn-danger text-white"
                  onClick={handleLogout}
                >
                  <DoorClosedFill className="mb-1 mr-2" />
                  Log Out
                </Button>
              </>
            ) : (
              <Nav.Link className="btn btn-success text-white" href="/signup">
                <PersonPlusFill className="mb-1 mr-2" />
                Sign up
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
