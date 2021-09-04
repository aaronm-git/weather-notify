import React, { useRef, useState } from "react";
import { Row, Col, Form, Button, Alert } from "react-bootstrap";
import { DoorOpenFill } from "react-bootstrap-icons";
import { useAuth } from "../contexts/AuthContext";
import { Link } from "react-router-dom";

const Signup = () => {
  const emailRef = useRef();
  const passwordRef = useRef();

  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      console.error(error);
      setLoading(false);
    }
  }

  return (
    <Row>
      <Col
        lg={{ span: 4, offset: 4 }}
        className="vh-100 w-100"
        style={{ paddingTop: "4rem" }}
      >
        <h1>Log In</h1>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              required
              ref={emailRef}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              required
              ref={passwordRef}
            />
          </Form.Group>
          <Button variant="primary" type="submit" disabled={loading}>
            <DoorOpenFill className="mb-1 mr-2" />
            Log In
          </Button>
          <p className="mt-3">
            Don't have an account? <Link to="/signup">Sign up</Link>
          </p>
        </Form>
      </Col>
    </Row>
  );
};

export default Signup;
