import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

const Gunnery = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Card>
            <Card.Title>Gunnery Terms</Card.Title>
            <Card.Body>
              Operating any armored vehicle as a crew requires a different way
              of speaking. Military radio speak is direct and eliminates all
              unnecessary words, so as to save time. While important across the
              military, armor crews need to be extremely fluid and proficient
              due to working together to operate a single weapon system.
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card bg="black">
            <Card.Title>General Army Jargon</Card.Title>
            <Card.Body>
              <ul></ul>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card bg="black">
            <Card.Title>Armor Specific Jargon</Card.Title>
            <Card.Body>
              <ul></ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Gunnery;
