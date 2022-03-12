import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import PageHeader from "react-bootstrap/PageHeader";
import "./Home.css";

const Home = () => {
  return (
    <Container>
      <Row>
        <h1>Armored Fighting Vehicle API / General Info Guide</h1>
      </Row>
      <Row>
        <h2>Including Other Related Armored Vehicles</h2>
      </Row>
      <Row>
        <Col sm={12} md={6}>
          <Card bg="black"></Card>
        </Col>
        <Col sm={12} md={6}>
          <Card bg="black"></Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
