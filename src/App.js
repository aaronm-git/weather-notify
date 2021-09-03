import "./App.css";
import Header from "./components/layout/Header";
import { Container, Row, Col } from "react-bootstrap";

function App() {
  return (
    <>
      <Header />
      <Container className="bg-white">
        <Row>
          <Col lg={{ span: 8, offset: 1 }} className="vh-100 w-100"></Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
