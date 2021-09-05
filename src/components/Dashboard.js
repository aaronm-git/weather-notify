import { useState } from "react";
import { Row, Col, Card, Form, Button, Alert } from "react-bootstrap";
import { useAuth } from "./contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";

const Dashboard = () => {
  const [error, setError] = useState("");
  const { currentUser } = useAuth();
  return (
    <Row>
      <Col>
        {error && <Alert variant="danger">{error}</Alert>}
        <Card>
          <Card.Body>
            <Card.Title>Dashboard</Card.Title>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default Dashboard;
