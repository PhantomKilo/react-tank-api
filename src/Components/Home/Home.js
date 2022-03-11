import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/row";
import Col from "react-bootstrap/Col";
import "./Home.css";

const Home = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Card bg="black">
            <Card.Title>The Why Behind the Project</Card.Title>
            <Card.Body>
              It came to my attention that there didn't seem to be an API for
              modern armored fighting vehicles (AFVs). So, I set out to make my
              own. I originally set out to make a database focused on tanks, but
              seemed too limited. I them revamped it to include both IFVs and
              APCs, and will probably have other vehicles (such as
              self-propelled atillery and anti-aircraft platforms) added in the
              future. Throwing in some other knowledge, like the history of
              AFVs, fire commands and the great debate of manual vs auto loading
              for tank guns to round it out. 
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card bg="black">
            <Card.Title>*** Disclaimer ***</Card.Title>
            <Card.Body>
              Due to recent events (as of early 2022 with the Russian invasion
              of Ukraine), I feel it's neccassary to clarify about any info
              here. Militaries typically don't advertise their modern hardware
              or technical specs, so most publicly avaiable info is of the
              unclassified, outdated or propaganda (propagandic?) nature.
              Because of this, while an AFV listed here (T90M for example)
              exists, that does not mean it is deployed to active units, only
              being seen on parade grounds or PR photoshoots. The point is very
              few people know the reality of what is actually avaiable and ready
              to be used in front line actions, so take most things here with a
              grain of salt.
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
