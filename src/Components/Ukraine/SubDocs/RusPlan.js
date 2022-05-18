import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";

const RusPlan = () => {
  return (
    <Container>
      <Row>
        <h1>Russia's Strategic Goals</h1>
      </Row>
      <Row>
        <Col sm={12} md={6}>
          <h2>What do we "Know"</h2>
          <p>
            The primary goal seemed to be regime change, with the most elite
            Russian units going straight to Kyiv in an attempt to take out the
            Ukrainian command structure (which would be in line with the opening
            of the Afghan war in 1979). The primary assumption of the Russian
            government at the top level was that Ukraine would only give token
            resistence, collapsing at the first sign of hostility. Russian
            forces were organized for a short, 3 day push, and left behind much
            of the heavier equipment like artillery, and only had enough
            supplies to operate for 2-3 days. A signifigant amount of active
            duty military were mustered for the invasion, organized into
            battalion tactical groups (BTG) as opposed to higher level brigades
            or divisions. The second front involved pushing from Crimea and the
            Donbass, maybe to cripple Ukraines economic base.
          </p>
        </Col>
        <Col sm={12} md={6}>
          <Card>
              <Card.Img 
               variant="top"
               className="img-fluid"
               src="https://i.dailymail.co.uk/1s/2022/03/07/16/55055849-10585749-image-a-32_1646670194493.jpg"
              />
              <Card.Title>Day One Invasion</Card.Title>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default RusPlan;
