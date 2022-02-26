import { Route, Routes } from "react-router-dom";
import Container from "react-bootstrap/Container";
import "./TankStuff.css";
import NavBar from "./StuffNav";
import GeneralInfo from "./SubTankStuff/GeneralInfo";
import Loading from "./SubTankStuff/Loading";
import Gunnery from "./SubTankStuff/Gunnery";

const TankStuff = () => {
  return (
    <Container>
      <NavBar />
      <Routes>
        <Route exact path="/*" element={<GeneralInfo />} />
        <Route exact path="/loading" element={<Loading />} />
        <Route exact path="/gunnery" element={<Gunnery />} />
      </Routes>
    </Container>
  );
};

export default TankStuff;
