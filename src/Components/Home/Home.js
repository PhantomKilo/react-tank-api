import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/row";
import Col from "react-bootstrap/Col";
import "./Home.css";

const Home = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h1>Tank API</h1>
        </Col>
        <Col>
          <h2>And General Tank Info</h2>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;