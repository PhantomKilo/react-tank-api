import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
// import PageHeader from "react-bootstrap/PageHeader";

const TankHistory = () => {
  return (
    <Container>
      <Row>
        {/* <PageHeader>
          History of Tanks <small>and the beginning of armored vehicles</small>
        </PageHeader> */}
      </Row>
      <Row>
        <Col>
          <Card>
            <Card.Title>WWI - The Beginning</Card.Title>
            <Card.Body>

            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card></Card>
        </Col>
      </Row>
    </Container>
  );
};

export default TankHistory;
