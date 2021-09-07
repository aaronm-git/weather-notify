import { useState } from "react";
import { Row, Col, Card, Alert } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
// Components
import Search from "./Search";
import Selected from "./Selected";

const Dashboard = () => {
  const [error, setError] = useState("");
  const { currentUser } = useAuth();
  const [selected, setSelected] = useState([]);

  return (
    <>
      {error && (
        <Alert variant="danger" dismissible onClose={() => setError("")}>
          {error}
        </Alert>
      )}
      <Row>
        <Col lg={6}>
          <Search setSelected={setSelected} setError={setError} />
        </Col>
        <Col lg={6}>
          <Selected selected={selected} setError={setError} />
        </Col>
      </Row>
    </>
  );
};

export default Dashboard;
