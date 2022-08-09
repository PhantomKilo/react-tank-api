import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

const APCHistory = () => {
  return (
    <Container>
      <Row>
        <h1>The (Very Abridged) History of APCs</h1>
      </Row>
      <Row>
        <Col md={12} lg={6}>
          <h2>Early APC Use</h2>
          <p>
            Armored Personnel Carriers (APCs) ere a product of early tank use.
            While the tanks themselves weren't vulnerable to shrapnel or machine
            guns, infantry were. This meant that there were times when the tanks
            would take an area, or create a breakthrough, then would immediately
            have to fall back because the infantry were pinned. The first APC
            was a variation of a British design, with the weapons removed to
            make space for extra dismounts. This turned out to be a failure,
            with the fumes so bad that the crew and dismounts were rendered sick
            or passed out and needing about an hour to function again. The concept
            was explored during the interwar period, as military leaders needed 
            a way for the infantry and artillery to keep up with pace of tanks.
            A wide variety of vehicles were trialed after WWI to find something 
            that would suit the role, with modified tanks, armored trucks and,
            most famously, halftracks. The halftrack was settled on by everyone 
            except the french, who adopted the first fully tracked vehicle, the 
            Lorraine 37L.  
          </p>
        </Col>
        <Col md={12} lg={6}>
            <h2>German Armored nfantry</h2>
            <p>

            </p>
        </Col>
      </Row>
    </Container>
  );
};

export default APCHistory;
