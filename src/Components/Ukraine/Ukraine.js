import { Route, Routes } from "react-router-dom";
import Container from "react-bootstrap/esm/Container";

import UkraineNav from "./UkraineNav";
import GeneralInfo from "./SubDocs/GeneralInfo";
import ForeignAid from "./SubDocs/ForeignAid";
import RusOrg from "./SubDocs/RusOrg";
import RusPlan from "./SubDocs/RusPlan";
import NewWar from "./SubDocs/NewWar";
import InfoWar from "./SubDocs/InfoWar";
import Precursor from "./SubDocs/Precursor";

const Ukraine = () => {
 return(
  <Container>
    <UkraineNav />
    <Routes>
      <Route exact path="/*" element={<GeneralInfo />} />
      <Route exact path="/nagorno-karabakh" element={<Precursor />} />
      <Route exact path="/russian-plan" element={<RusPlan />} />
      <Route exact path="/russian-org" element={<RusOrg />} />
      <Route exact path="/information-war" element={<InfoWar />} />
    </Routes>
  </Container>
 )
};

export default Ukraine;
