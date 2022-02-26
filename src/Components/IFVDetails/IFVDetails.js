import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import "./IFVDetails.css";

const IFVDetails = (props) => {
  const ifv = props.ifvDetails;
  //   const setTank = props.setTankDetails

  const images = ifv.images.map((image) => {
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
          <h1>{ifv.model}</h1>
        </Col>
        <Col>
          <h2>{ifv.main}</h2>
        </Col>
      </Row>
      <Row>{images}</Row>
    </Container>
  );
};

export default IFVDetails;
