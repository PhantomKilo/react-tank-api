import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import "../TankStuff.css";

const TankHistory = () => {
  return (
    <Container>
      <Row>
        <h1>The (Very Abridged) History of Armored Fighting Vehicles</h1>
        <h2>and related armored vehicles</h2>
      </Row>
      <Row>
        <Col sm={12} md={6}>
          <Card bg="black">
            <Card.Title>WWI - The Beginning</Card.Title>
            <Card.Body>
              <Card.Text>

              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={6}>
          <Card bg="black">
            <Card.Title></Card.Title>
            <Card.Body>
              <Card.Text>
                
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col sm={12} md={6}>
          <Card bg="black">
            <Card.Img
              variant="top"
              className="img-fluid"
              src={
                "https://upload.wikimedia.org/wikipedia/commons/c/cd/British_Mark_IV_Tadpole_tank.jpg"
              }
            />
            <Card.Title>The first tank</Card.Title>
            <Card.Text>British Mark IV</Card.Text>
          </Card>
        </Col>
        <Col sm={12} md={6}>
          <Card bg="black">
            <Card.Img
              variant="top"
              className="img-fluid"
              src={
                "https://upload.wikimedia.org/wikipedia/commons/b/bb/FT-17-argonne-1918.gif"
              }
            />
            <Card.Title>The first turreted tank</Card.Title>
            <Card.Text>French Renault FT</Card.Text>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default TankHistory;
