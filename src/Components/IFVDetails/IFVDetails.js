import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Stack from "react-bootstrap/Stack";
import "./IFVDetails.css";

const IFVDetails = (props) => {
  const ifv = props.ifvDetails;
  //   const setTank = props.setTankDetails

  const images = ifv.images.map((image) => {
    return (
      <Col sm={6} md={4} key={image._id}>
        <Card border="white" bg="black">
          <Card.Title>{image.description}</Card.Title>
          <Card.Img variant="top" className="img-fluid" src={image.url} />
        </Card>
      </Col>
    );
  });

  const weapons = ifv.secondary.map((weapon) => {
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
            <h1>IFV: {ifv.model}</h1>
            <h2>{ifv.description}</h2>
            <h2>Country: {ifv.country}</h2>
            <h2>Entered Service: {ifv.enteredService}</h2>
            <h2>Dismount capacity: {ifv.capacity}</h2>
          </Col>
          <Col sm={12} md={4}>
            <Card border="white" bg="black">
              <Card.Title>Main Weapon: {ifv.main}</Card.Title>
              <Card.Title>Other Weapons</Card.Title>
              <Card.Text>{weapons}</Card.Text>
            </Card>
          </Col>
        </Row>
        <Row>{images}</Row>
      </Stack>
    </Container>
  );
};

export default IFVDetails;
