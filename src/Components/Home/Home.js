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
          <Card>
            <Card.Title>The Why Behind the Project</Card.Title>
            <Card.Body>
              
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Tite>*** Disclaimer ***</Card.Tite>
            <Card.Body>
              Every bit of info, all the vehicle stats, numbers, "official"
              release documentation, is the unclassified version. Many of the
              modern vehicles to be added are technically in service, but
              finding info on how many or where is difficult. I've been in units
              with the most up to date equipment, only to have it taken and sent
              somewhere else, leaving us with older hardware. Foreign hardware
              is even harder to track down, because my info is based on what is
              publicly available. That means, like with the Russian military,
              certain modern hardware might exist only on paper or a parade
              ground. The Russian invasion of Ukraine in early 2022 only
              comfirmed that most of what is available is inaccurate, outdated
              or outright propaganda.
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
