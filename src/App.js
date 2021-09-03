import Header from "./components/layout/Header";
import { Container, Row, Col } from "react-bootstrap";

function App() {
  return (
    <>
      <Header />
      <Container>
        <Row>
          <Col md={4} className="vh-100 w-100 bg-dark"></Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
