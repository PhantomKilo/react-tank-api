import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Stack from "react-bootstrap/Stack";
import "./APCDetails.css";

const APCDetails = (props) => {
  const apc = props.apcDetails;
  //   const setTank = props.setTankDetails

  const images = apc.images.map((image) => {
    return (
      <Col sm={6} md={4} key={image._id}>
        <Card border="success" bg="black">
          <Card.Title>{image.description}</Card.Title>
          <Card.Img variant="top" className="img-fluid" src={image.url} />
        </Card>
      </Col>
    );
  });

  const weapons = apc.secondary.map((weapon) => {
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
          <Col sm={12} md={8}>
            <h1>APC: {apc.model}</h1>
            <h2>{apc.description}</h2>
            <h2>Country: {apc.country}</h2>
            <h2>Entered Service: {apc.enteredService}</h2>
            <h2>Dismount Capacity: {apc.capacity}</h2>
          </Col>
          <Col>
            <Card border="success" bg="black">
              <Card.Title>Weapons</Card.Title>
              <Card.Text>{weapons}</Card.Text>
            </Card>
          </Col>
        </Row>
        <Row>{images}</Row>
      </Stack>
    </Container>
  );
};

export default APCDetails;
