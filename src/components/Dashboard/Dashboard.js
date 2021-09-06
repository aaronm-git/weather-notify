import { useState } from "react";
import { Row, Col, Card, Alert } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
// Components
import Search from "./Search";

const Dashboard = () => {
  const [error, setError] = useState("");
  const { currentUser } = useAuth();
  return (
    <Row>
      <Col md="6">
        {error && <Alert variant="danger">{error}</Alert>}
        <Search />
      </Col>
    </Row>
  );
};

export default Dashboard;
