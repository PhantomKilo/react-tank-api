import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import "./APCDetails.css";

const APCDetails = (props) => {
  const apc = props.apcDetails;
  //   const setTank = props.setTankDetails

  const images = apc.images.map((image) => {
    return (
      <Col sm={6} md={4} lg={3} key={image._id}>
        <Card border="success" bg="black">
          <Card.Title>{image.description}</Card.Title>
          <Card.Img variant="top" className="img-fluid" src={image.url} />
        </Card>
      </Col>
    );
  });

  return (
    <Container>
      <Row>
        <Col>
          <h1>{apc.model}</h1>
        </Col>
        <Col>
          <h2>{apc.country}</h2>
        </Col>
      </Row>
      <Row>{images}</Row>
    </Container>
  );
};

export default APCDetails;
