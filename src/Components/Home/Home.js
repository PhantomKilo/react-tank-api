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
              Originally, this project was to be a basic info website about
              general armored warfare and history. The invasion of Ukraine by
              Russia has changed that plan, being the first time a near peer war
              has been fought on this scale in decades. So, I'm going to try and
              collect info from various military analyists to get a somewhat
              accurate picture of the future of combined arms warfare. The major
              difficulty keeping track of a current war is that things can
              change dramatically in unpredictable ways. Add the info war
              covering up major areas such as casualty numbers and equipment
              losses. Twitter and other social media sites are being used to
              shape the narrative, which has been done for years, but not on an
              international stage like Ukraine has managed to do. All this being
              said, the reality of the war wil not be known for a few years.
            </Card.Text>
          </Card>
        </Col>
        <Col sm={12} md={6}>
          <Card bg="black">
            <Card.Title>The Other Content</Card.Title>
            <Card.Text>
              The non Ukraine related content, history, basic flash card info of
              vehicles, and general AFV info will be filled out. I want to build
              a somewhat self contained info source about AFVs in warfare. This
              topic is pretty deep, and there are a few different viewpoints, so
              this is intended more as a launch point to dive into more detailed
              sources, especially concerning such topics as the doctrine of
              other countries. 
            </Card.Text>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
