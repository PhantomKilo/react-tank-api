import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

import Container from "react-bootstrap/Container";

import Home from "../Home/Home";
import TankDetails from "../TankDetails/TankDetails";
import APCDetails from "../APCDetails/APCDetails";
import IFVDetails from "../IFVDetails/IFVDetails";
import APCs from "../APCs/APCs";
import IFVs from "../IFVs/IFVs";
import Tanks from "../Tanks/Tanks";
import About from "../About/About";
import TankStuff from "../TankStuff/TankStuff";
import NavBar from "./Nav";
import Ukraine from "../Ukraine/Ukraine";

function App() {
  const tankUrl = "https://tank-api-database.herokuapp.com/tank/";
  const apcUrl = "https://tank-api-database.herokuapp.com/apc/";
  const ifvUrl = "https://tank-api-database.herokuapp.com/ifv/";
  const [tanks, setTanks] = useState([]);
  const [apcs, setApcs] = useState([]);
  const [ifvs, setIfvs] = useState([]);
  const [tankDetails, setTankDetails] = useState({});
  const [apcDetails, setApcDetails] = useState({});
  const [ifvDetails, setIfvDetails] = useState({});

  const makeApiCall = (url) => {
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setTanks(data.tanks);
      });
  };

  const makeApiCall2 = (url) => {
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setApcs(data.apcs);
      });
  };

  const makeApiCall3 = (url) => {
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setIfvs(data.ifvs);
      });
  };

  useEffect(() => {
    makeApiCall(tankUrl);
    makeApiCall2(apcUrl);
    makeApiCall3(ifvUrl);
  }, []);

  return (
    <Container bg="dark">
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
                tankDetails={tankDetails}
                setTankDetails={setTankDetails}
              />
            }
          />
          <Route
            exact
            path="/tank/apc-api"
            element={
              <APCs
                apcs={apcs}
                apcDetails={apcDetails}
                setApcDetails={setApcDetails}
              />
            }
          />
          <Route
            exact
            path="/tank/ifv-api"
            element={
              <IFVs
                ifvs={ifvs}
                ifvDetails={ifvDetails}
                setIfvDetails={setIfvDetails}
              />
            }
          />
          <Route
            exact
            path={`/tank/tank-api/${tankDetails.model}`}
            element={
              <TankDetails
                tankDetails={tankDetails}
                setTankDetails={setTankDetails}
              />
            }
          />
          <Route
            exact
            path={`/tank/apc-api/${apcDetails.model}`}
            element={
              <APCDetails
                apcDetails={apcDetails}
                setApcDetails={setApcDetails}
              />
            }
          />
          <Route
            exact
            path={`/tank/ifv-api/${ifvDetails.model}`}
            element={
              <IFVDetails
                ifvDetails={ifvDetails}
                setIfvDetails={setIfvDetails}
              />
            }
          />
          <Route exact path="/tank/tank-stuff/*" element={<TankStuff />} />
          <Route exact path="/tank/about" element={<About />} />
          <Route exact path="/tank/ukraine/*" element={<Ukraine />} />
        </Routes>
      </Container>
    </Container>
  );
}

export default App;
