import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

const GeneralInfo = () => {
  return (
    <Container>
      <Row>
        <Col md={12} lg={6}>
          <Card bg="black">
            <Card.Title>Manual vs Auto Loading</Card.Title>
            <Card.Body>
              A very intense "argument" going on in tank communities involves
              whether using manual (human) loaders, or change over to mechanical
              auto-loaders. While the west, until recently anyways, has stayed
              with human loaders, the USSR (now Russia) adopted auto-loaders
              starting in the 60s for their main tank force. There are upsides
              and downsides for both setups, so the issue isn't as clear cut as
              one would think.
            </Card.Body>
          </Card>
        </Col>
        <Col md={12} lg={6}>
          <Card bg="black">
            <Card.Title>US Gunnery Jagon</Card.Title>
            <Card.Body>
              Gunnery jargon exists to simplify communication to the bare
              necessities. 
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col md={12} lg={6}>
          <Card bg="black">
            <Card.Title>Tank (AFV) vs IFV</Card.Title>
            <Card.Body>

            </Card.Body>
          </Card>
        </Col>
        <Col md={12} lg={6}>
          <Card bg="black">
            <Card.Title>IFV vs APC</Card.Title>
            <Card.Body>

            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default GeneralInfo;
