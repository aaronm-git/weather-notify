import { Row, Col, Form, Button } from "react-bootstrap";
import { PersonPlusFill, DoorOpenFill } from "react-bootstrap-icons";

const Signup = () => {
  return (
    <Row>
      <Col
        lg={{ span: 4, offset: 4 }}
        className="vh-100 w-100"
        style={{ paddingTop: "4rem" }}
      >
        <h1>Sign up</h1>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button variant="primary" type="submit">
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
