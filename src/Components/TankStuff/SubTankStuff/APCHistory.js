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
            or passed out and needing about an hour to function again. The
            concept was explored during the interwar period, as military leaders
            needed a way for the infantry and artillery to keep up with pace of
            tanks. A wide variety of vehicles were trialed after WWI to find
            something that would suit the role, with modified tanks, armored
            trucks and, most famously, halftracks. The halftrack was settled on
            by everyone except the french, who adopted the first fully tracked
            vehicle, the Lorraine 37L. Something that was played with during the
            later years of WWII was the use of repurposed tank and artillery
            chassis as heavy carriers, called Kangaroo carriers. They had better
            mobility offroad due to the fully tracked nature, creating a blue
            print for post war development. The Soviets, lacking indigenous designs 
            during the interwar years, but needing infantry to keep pace, trained
            the tank desant. The tank desant is when troops ride the tanks directly,
            cutting out the middle man in a way and allowing the deep battle philosophy
            to be adopted without waiting for proper vehicles. Soviet armored vehicles
            have external grab handles on them until the BMP was adopted as a result.
          </p>
        </Col>
        <Col md={12} lg={6}>
          <h2>Cold War Development</h2>
          <p>
            The half track designs fell out of favor post WWII, as they had been
            a compromise in the first place, so fully tracked and wheeled
            designs became the prefered direction. As doctrine shifted to
            combating large armored formations in a nuclear environment, armored
            and CBRNE protected carriers for the squishy infantry that could
            keep up with a large scale push became a major focus of the 50s and
            60s. NATO designs, generally, were more defensive in nature. Being
            that the primary use was an armored taxi to drive up, drop off
            troops, and either retreat to a rear area or form a base of fire
            behind the attack. The Soviets were focused on the attack, wanting
            to mechanized all their infantry with armored vehicles and to be
            used in direct combat. The Germans threw 20mm cannons on their
            tracks to give them more punch and allow them to engage in close
            combat, creating what some consider to be the first IFV. The Soviet
            BMP (literally translated to "Infantry Fighting Vehicle") changed
            the way most countries looked at the concept of armored carriers in
            general. The US immediately canned their M113 replacement project to
            create what would become the M2 Bradley, though the M113 would remain 
            in service to the current day. NATO followed with their own IFV designs,
            with APCs as a concept becoame more purpose built to the situation, 
            such as MRAPs, Strykers, BTR-80s and other similar armored "cars". 
            IFVs have largely replaced the bog standard APC these days outside 
            of these lighter iterations.
          </p>
        </Col>
      </Row>
      <Row>
        <Col md={12} lg={6}></Col>
        <Col md={12} lg={6}></Col>
      </Row>
      <Row>
        <Col md={12} lg={6}></Col>
        <Col md={12} lg={6}></Col>
      </Row>
      <Row>
        <Col md={12} lg={6}></Col>
        <Col md={12} lg={6}></Col>
      </Row>
    </Container>
  );
};

export default APCHistory;
