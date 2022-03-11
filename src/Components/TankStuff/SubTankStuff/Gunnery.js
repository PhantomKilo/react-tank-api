import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import "../TankStuff.css";

const Gunnery = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Card bg="black">
            <Card.Title>Gunnery Terms</Card.Title>
            <Card.Body>
              Operating any armored vehicle as a crew requires a different way
              of speaking. Military radio speak is direct and eliminates all
              unnecessary words, so as to save time. While important across the
              military, armor crews need to be extremely fluid and proficient
              due to working together to operate a single weapon system. One of
              the most important conversations to be had is known as a Fire
              Command. Fire commands get the whole crew on the same page with
              just a few words, streamlining the process to get fire on target
              as quickly as possible.
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card bg="black">
            <Card.Title>Fire Command Structure</Card.Title>
            <Card.Body>
              <ul>
                <li>Alert: Crew member called, "Gunner"</li>
                <li>Ammo or Weapon: Ammo or weapon type, "Sabot"</li>
                <li>Target: Target description, "Tank"</li>
                <li>Range: Range to target in meters, "1200M"</li>
                <li>Direction: Direction of target, "12 o'clock"</li>
                <li>
                  Execution: Fire command, sometimes also change ammo type,
                  "Fire"
                </li>
                <li>Termination: Stop firing, "Target, cease fire"</li>
              </ul>
              Together, this looks like "Gunner, Sabot, Tank, 1200m, 12 o'clock,
              Fire, Target, Cease Fire"
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card bg="black">
            <Card.Title>Fire Command Variations</Card.Title>
            <Card.Body>
              Fire commands aren't always straight forward due to other
              militaries not always playing along. Say, for instance, that the
              main gun has the incorrect ammo type loaded. Because the loaded
              round is fired regardless, both the loader and gunner need to know
              to follow up with the correct round
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card bg="black">
            <Card.Title>Other Tank Terms</Card.Title>
            <Card.Body></Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Gunnery;
