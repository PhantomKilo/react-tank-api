import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/row";
import Col from "react-bootstrap/Col";
import PageHeader from "react-bootstrap/PageHeader";
import "./Home.css";

const Home = () => {
  return (
    <Container>
      <Row>
        <Col>
          <PageHeader>Armored Fighting Vehicle API / General Guide</PageHeader>
        </Col>
        <Col>
          <PageHeader>
            <small>includes other related armored vehicles as well</small>
          </PageHeader>
        </Col>
      </Row>
      <Row>
        <Col sm={12} md={6}>
          <Card bg="black">

          </Card>
        </Col>
        <Col sm={12} md={6}>
          <Card bg="black">

          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
