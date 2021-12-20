import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/row";
import Col from "react-bootstrap/Col";

import Home from "../Home/Home";
import TankDetails from "../TankDetails/TankDetails";
import Tanks from "../Tanks/Tanks";
import About from "../About/About";
import NavBar from "./Nav";

function App() {
  const url = "http://localhost:4000/tank";
  const [tanks, setTanks] = useState([]);
  const [tankDetails, setTankDetails] = useState({});

  const makeApiCall = (url) => {
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setTanks(data.tanks);
      });
  };

  useEffect(() => {
    makeApiCall(url);
  }, []);

  return (
    <div bg="dark">
      <NavBar />
      <Container>
        <Routes>
          <Route exact path="/tank/home" element={<Home />} />
          <Route exact path="/tank/about" element={<About />} />
          <Route
            exact
            path="/tank/tank-api"
            element={
              <Tanks
                tanks={tanks}
                setTankDetails={setTankDetails}
                makeApiCall={makeApiCall}
              />
            }
          />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
