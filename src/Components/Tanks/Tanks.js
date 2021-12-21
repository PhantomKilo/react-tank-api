import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import "./Tanks.css"

const Tanks = (props) => {
  const tanks = props.tanks;
  const setTankDetails = props.setTankDetails;
  const makeApiCall = props.makeApiCall;
  

  const tankList = tanks.map((tank) => { 
    console.log(tank)
    return (
      <Col sm={6} md={4} lg={3} key={tank._id}>
        <Card border="success" bg="black" >
          <Card.Img variant="top" className="img-fluid" src={tank.images[0].url}/>
          <Card.Title>{tank.model}</Card.Title>
          <Card.Body>{tank.country}</Card.Body>
          
        </Card>
      </Col>
    );
  });

  return <Row>{tankList}</Row>;
};

export default Tanks;
