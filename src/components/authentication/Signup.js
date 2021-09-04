import React, { useRef, useState } from "react";
import { Row, Col, Form, Button, Alert } from "react-bootstrap";
import { PersonPlusFill, DoorOpenFill } from "react-bootstrap-icons";
import { useAuth } from "../contexts/AuthContext";

const Signup = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmationRef = useRef();

  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmationRef.current.value) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
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
        <h1>Sign up</h1>
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
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
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
          <Form.Group
            className="mb-3"
            controlId="formBasicPasswordConfirmation"
          >
            <Form.Label>Password Confirmation</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              required
              ref={passwordConfirmationRef}
            />
          </Form.Group>
          <Button variant="primary" type="submit" disabled={loading}>
            <PersonPlusFill className="mb-1 mr-2" />
            Sign up
          </Button>
          <Button
            variant="secondary"
            type="button"
            href="/signup"
            className="mx-2"
          >
            <DoorOpenFill className="mb-1 mr-2" />
            Login
          </Button>
        </Form>
      </Col>
    </Row>
  );
};

export default Signup;
