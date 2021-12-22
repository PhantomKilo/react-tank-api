import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import "./TankDetails.css";

const TankDetails = (props) => {
  const tank = props.tankDetails;
  //   const setTank = props.setTankDetails

  const images = tank.images.map((image) => {
    return (
      <Col sm={6} md={4} lg={3} key={image._id}>
        <Card border="success" bg="black">
          <Card.Title>{image.description}</Card.Title>
          <Card.Img variant="top" className="img-fluid" src={image.url} />
        </Card>
      </Col>
    );
  });

  //   const handleReset = () => {
  //       setTank({})
  //   }

  return (
    <Container>
      <Row>
        <Col>
          <h1>{tank.model}</h1>
        </Col>
        <Col>
          <h2>{tank.main}</h2>
        </Col>
        {/* <Col>
            <button onClick={handleReset}>reset</button>
        </Col> */}
      </Row>
      <Row>{images}</Row>
    </Container>
  );
};

export default TankDetails;
