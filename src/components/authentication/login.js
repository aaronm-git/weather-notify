import { useRef, useState } from "react";
import { Row, Col, Form, Button, Alert } from "react-bootstrap";
import { DoorOpenFill } from "react-bootstrap-icons";
import { Link, useHistory, Redirect } from "react-router-dom";

import { useAuth } from "../contexts/AuthContext";

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const history = useHistory();
  const { currentUser, login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.push("/dashboard");
    } catch (error) {
      setError(error.message);
      console.error(error);
      setLoading(false);
    }
  }

  return currentUser ? (
    <Redirect to="/dashboard" />
  ) : (
    <Row>
      <Col lg={{ span: 4, offset: 4 }} className="vh-100 w-100">
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

export default Login;
