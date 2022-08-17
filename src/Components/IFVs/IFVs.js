import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Navigate } from "react-router-dom";
import React, { useState } from "react";

import "./IFVs.css";

const IFVs = (props) => {
  const ifvs = props.ifvs;
  const ifvDetails = props.ifvDetails;
  const setIfvDetails = props.setIfvDetails;
  const [redirect, setRedirect] = useState(false);

  const makeIfvCall = (ifvUrl) => {
    fetch(ifvUrl)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const ifv = data.ifv[0];
        setIfvDetails(ifv);
      })
      .then(() => {
        setRedirect(true);
      });
  };

  if (redirect) {
    return <Navigate to={`/tank/ifv-api/${ifvDetails.model}`} />;
  }

  const ifvList = ifvs.map((ifv) => {
    const handleClick = (id) => {
      const url = `https://tank-api-database.herokuapp.com/ifv//${id}`;
      console.log(url);
      makeIfvCall(url);
    };

    return (
      <Col sm={6} md={4} lg={3} key={ifv._id}>
        <Card border="white" bg="black" onClick={() => handleClick(ifv._id)}>
          <Card.Img
            variant="top"
            className="img-fluid"
            src={ifv.images[0].url}
          />
          <Card.Title>{ifv.model}</Card.Title>
          <Card.Body>{ifv.country}</Card.Body>
        </Card>
      </Col>
    );
  });

  console.log(ifvDetails);

  return <Row>{ifvList}</Row>;
};

export default IFVs;
