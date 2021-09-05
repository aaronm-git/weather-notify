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
    <Navbar bg="light" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand href="/">
          Weather
          <CloudSun className="mb-2 text-primary" />
          Notify
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link href="https://aaronmolina.me">Aaron Molina</Nav.Link>
            <Link to="/dashboard" className="nav-link">
              Dashboard
            </Link>
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
                  type="button"
                >
                  <DoorClosedFill className="mb-1 mr-2" />
                  Log Out
                </Button>
              </>
            ) : (
              <>
                <Link to="/login" className="nav-link mr-3">
                  Log In
                </Link>
                <Link to="/signup" className="btn btn-success text-white">
                  <PersonPlusFill className="mb-1 mr-2" />
                  Sign up
                </Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
