import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Navigate } from "react-router-dom";
import React, { useState } from "react";

import "./APCs.css";

const APCs = (props) => {
  const apcs = props.apcs;
  const apcDetails = props.apcDetails;
  const setApcDetails = props.setApcDetails;
  const [redirect, setRedirect] = useState(false);

  const makeApcCall = (apcUrl) => {
    fetch(apcUrl)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const apc = data.apc[0];
        setApcDetails(apc);
      })
      .then(() => {
        setRedirect(true);
      });
  };

  if (redirect) {
    return <Navigate to={`/tank/apc-api/${apcDetails.model}`} />;
  }

  const apcList = apcs.map((apc) => {
    const handleClick = (id) => {
      const url = `https://tank-api-database.herokuapp.com/apc//${id}`;
      console.log(url);
      makeApcCall(url);
    };

    return (
      <Col sm={6} md={4} lg={3} key={apc._id}>
        <Card border="success" bg="black" onClick={() => handleClick(apc._id)}>
          <Card.Img
            variant="top"
            className="img-fluid"
            src={apc.images[0].url}
          />
          <Card.Title>{apc.model}</Card.Title>
          <Card.Body>{apc.country}</Card.Body>
        </Card>
      </Col>
    );
  });

  console.log(apcDetails);

  return <Row>{apcList}</Row>;
};

export default APCs;
