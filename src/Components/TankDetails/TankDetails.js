import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Stack from "react-bootstrap/Stack";
import "./TankDetails.css";

const TankDetails = (props) => {
  const tank = props.tankDetails;
  //   const setTank = props.setTankDetails

  const images = tank.images.map((image) => {
    return (
      <Col sm={6} md={4} key={image._id}>
        <Card border="white" bg="black">
          <Card.Title>{image.description}</Card.Title>
          <Card.Img variant="top" className="img-fluid" src={image.url} />
        </Card>
      </Col>
    );
  });

  const rounds = tank.ammo.map((round) => {
    return (
      <Col sm={6}>
        <Card border="white" bg="black">
          <Card.Text>
            <ul>
              <li>Designation: {round.designation}</li>
              <li>Role: {round.type}</li>
              <li>Weight: {round.weight} KGs</li>
            </ul>
          </Card.Text>
        </Card>
      </Col>
    );
  });

  const weapons = tank.secondary.map((weapon) => {
    return (
      <Card.Text>
        <ul>
          <li>Weapon: {weapon.weapon}</li>
          <li>Ammo: {weapon.ammo}</li>
        </ul>
      </Card.Text>
    );
  });

  return (
    <Container>
      <Stack gap={5}>
        <Row>
          <Col>
            <h1>AFV: {tank.model}</h1>          
            <h2>{tank.description}</h2>            
            <h2>Country: {tank.country}</h2>
            <h2>Entered Service: {tank.enteredService}</h2>
          </Col>
        </Row>
        <Row>
          <Col>
            <Row>
              <Col sm={12} md={8}>
                <Card border="white" bg="black">
                  <Card.Title>Main weapon: {tank.main}</Card.Title>
                  <Card.Title>Ammo Types</Card.Title>
                  <Row>{rounds}</Row>
                </Card>
              </Col>
              <Col sm={12} md={4}>
                <Card border="white" bg="black">
                  <Card.Title>Other Weapons</Card.Title>
                  <Card.Text>{weapons}</Card.Text>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>{images}</Row>
      </Stack>
    </Container>
  );
};

export default TankDetails;
