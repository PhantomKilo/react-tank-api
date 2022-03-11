import { Route, Routes } from "react-router-dom";
import Container from "react-bootstrap/Container";
import "./TankStuff.css";
import NavBar from "./StuffNav";
import GeneralInfo from "./SubTankStuff/GeneralInfo";
import Loading from "./SubTankStuff/Loading";
import Gunnery from "./SubTankStuff/Gunnery";
import TankHistory from "./SubTankStuff/TankHistory"
import APCHistory from "./SubTankStuff/APCHistory"
import IFVHistory from "./SubTankStuff/IFVHistory"

const TankStuff = () => {
  return (
    <Container>
      <NavBar />
      <Routes>
        <Route exact path="/*" element={<GeneralInfo />} />
        <Route exact path="/loading" element={<Loading />} />
        <Route exact path="/gunnery" element={<Gunnery />} />
        <Route exact path="/tank-history" element={<TankHistory />} />
        <Route exact path="/apc-history" element={<APCHistory />} />
        <Route exact path="/ifv-history" element={<IFVHistory />} />
      </Routes>
    </Container>
  );
};

export default TankStuff;
