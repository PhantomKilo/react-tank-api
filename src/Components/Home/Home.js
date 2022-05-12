import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import PageHeader from "react-bootstrap/PageHeader";
import "./Home.css";

const Home = () => {
  return (
    <Container>
      <Row>
        <h1>Armored Fighting Vehicle API / General Info Guide</h1>
      </Row>
      <Row>
        <h2>Including Other Related Armored Vehicles</h2>
      </Row>
      <Row>
        <Col sm={12} md={6}>
          <Card bg="black">
            <Card.Title>*** So, Russia invaded Ukraine ***</Card.Title>
            <Card.Text>
              Originally when I decided to put this little project together the
              goal was to focus on modern weapon systems and next gen stuff
              being adopted in the near future. Seeing images of 70s era armored
              vehicles and a complete lack of basic logistics by the Russian
              army has completely turned my understanding (and most others who
              follow this, don't let them lie) of the situation on its head. I
              didn't want to put focus on modern conflicts due to the "fog of
              war" involved making hard to get any real info that isn't
              propaganda. I might try with Ukraine though, being the first time
              in decades that two "modern" militaries are colliding, so I'll see
              what I can do.
            </Card.Text>
          </Card>
        </Col>
        <Col sm={12} md={6}>
          <Card bg="black"></Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
