import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Navigate } from "react-router-dom";
import React, { useState } from "react";

import "./Tanks.css";

const Tanks = (props) => {
  const tanks = props.tanks;
  const tankDetails = props.tankDetails;
  const setTankDetails = props.setTankDetails;
  const [redirect, setRedirect] = useState(false);

  const makeTankCall = (tankUrl) => {
    fetch(tankUrl)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const tank = data.tank[0];
        setTankDetails(tank);
      })
      .then(() => {
        setRedirect(true);
      });
  };

  if (redirect) {
    return <Navigate to={`/tank/tank-api/${tankDetails.model}`} />;
  }

  const tankList = tanks.map((tank) => {
    const handleClick = (id) => {
      const url = `https://tank-api-database.herokuapp.com/tank//${id}`;
      console.log(url);
      makeTankCall(url);
    };

    return (
      <Col sm={6} md={4} lg={3} key={tank._id}>
        <Card border="success" bg="black" onClick={() => handleClick(tank._id)}>
          <Card.Img
            variant="top"
            className="img-fluid"
            src={tank.images[0].url}
          />
          <Card.Title>{tank.model}</Card.Title>
          <Card.Body>{tank.country}</Card.Body>
        </Card>
      </Col>
    );
  });

  console.log(tankDetails);

  return <Row>{tankList}</Row>;
};

export default Tanks;
