import { useState } from "react";
import { Row, Col, Form, Alert } from "react-bootstrap";
// Components
import Search from "./Search";
import Selected from "./Selected";

const Dashboard = () => {
  const [error, setError] = useState("");
  const [alert, setAlert] = useState("");
  const [selected, setSelected] = useState([]);
  const [checked, setChecked] = useState(false);

  return (
    <>
      {error && (
        <Alert variant="danger" dismissible onClose={() => setError("")}>
          {error}
        </Alert>
      )}
      {alert && (
        <Alert variant="danger" dismissible onClose={() => setError("")}>
          {alert}
        </Alert>
      )}
      <Row>
        <Col lg={6}>
          <Search setSelected={setSelected} setError={setError} />
        </Col>
        <Col lg={6}>
          <Form.Check
            type="checkbox"
            label="Alert"
            onChange={(e) => setChecked(e.target.checked)}
          />
          <Selected selected={selected} setAlert={setAlert} checked={checked} />
        </Col>
      </Row>
    </>
  );
};

export default Dashboard;
