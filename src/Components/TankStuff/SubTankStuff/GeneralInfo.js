import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Stack from "react-bootstrap/Stack";

const GeneralInfo = () => {
  return (
    <Container>
      <Stack gap={5}>
        <Row>
          <Col md={12} lg={6}>
            <Card border="success" bg="black">
              <Card.Title>What is an AFV?</Card.Title>
              <Card.Body>
                <Card.Text>
                  Armored Fighting Vehicles, usually called tanks. All tanks are
                  AFVs, but not all AFVs are classed as tanks in the traditional
                  sense. The main purpose of an AFV is fire support on a mobile,
                  armored platform, and typically armed with a large caliber
                  gun. Crewed by 3 or 4 people, AFVs have no real secondary
                  purpose such as carrying troops or suppiles. The primary
                  target for AFVs are other AFVs and hardened targets. It should
                  be noted, that while hard definitions exist, real world
                  conditions blur the lines of what category each vehicle goes
                  in.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={12} lg={6}>
            <Card border="success" bg="black">
              <Card.Title>Tank (AFV) vs IFV</Card.Title>
              <Card.Body>
                <Card.Text>
                  Infantry Fighting Vehicles, or IFVs, are another type of AFV.
                  They usually look like and perform like AFVs, but are more
                  geared to supporting and fighting infantry. Most IFVs have the
                  ability to carry troops, protecting them while they get into
                  position. While purpose built vehicles are a recent
                  development, ad hoc modifications of older vehicles in
                  Vietnam, with both US and ARVN forces adding armor and weapons
                  to M113s to help support them in jungle warfare. The intent
                  was to have an armored vehicle both protect, and be able to
                  fight along side, infantry forces.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md={12} lg={6}>
            <Card border="success" bg="black">
              <Card.Title>IFV vs APC</Card.Title>
              <Card.Body>
                <Card.Text>
                  Armored personel Vehicle. Unlike the other armored vehicle
                  types, the primary purpose of APCs is to carry infantry forces
                  behind armor. Early APC designs appeared at the same time as
                  the first tanks, removing the weapons to carry troops instead.
                  Most APCs are very lightly armed with machine guns and are not
                  designed for more than light fire support. Some designs, like
                  the M113 or Stryker, have been or are being up gunned to fill
                  a niche where the chasis is light enough to be used in alomst
                  any environment, adding armor support where no heavier
                  vehicles could go.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={12} lg={6}>
            <Card border="success" bg="black">
              <Card.Title>Manual vs Auto Loading</Card.Title>
              <Card.Body>
                A very intense "argument" going on in tank communities involves
                whether using manual (human) loaders, or change over to
                mechanical auto-loaders. While the west, until recently anyways,
                has stayed with human loaders, the USSR (now Russia) adopted
                auto-loaders starting in the 60s for their main tank force.
                There are upsides and downsides for both setups, so the issue
                isn't as clear cut as one would think.
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Stack>
    </Container>
  );
};

export default GeneralInfo;
