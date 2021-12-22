import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import "./TankStuff.css"

const TankStuff = () => {
  return (
    <Container>
      <Row>
        <Col sm={12} md={6}>
          <Card bg="black">
            <Card.Title>
              <h3>Abrams stuck in mud</h3>
            </Card.Title>
            <Card.Body>
              <iframe
                className="responsive-iframes"
                src="https://www.youtube.com/embed/TCXwgPZXScM"
                allowFullScreen
              />
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={6}>
        <Card bg="black">
            <Card.Title>
              <h3>Loading the main gun</h3>
            </Card.Title>
            <Card.Body>
              <iframe
                className="responsive-iframes"
                src="https://www.youtube.com/embed/eETvj6bIpuA"
                allowFullScreen
              />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default TankStuff;
