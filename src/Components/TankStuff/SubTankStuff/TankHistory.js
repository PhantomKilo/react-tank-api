import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import "../TankStuff.css";

const TankHistory = () => {
  return (
    <Container>
      <Row>
        <h1>The (Very Abridged) History of Armored Fighting Vehicles</h1>
        <h2>and related armored vehicles</h2>
      </Row>
      <Row>
        <Col sm={12} md={6}>
          <h2>The Beginning</h2>
          <p>
            The first tanks were a product of World War I trench war that
            dominated most of Europe. Increased lethality of artillery and the
            mass adoption of machine guns made breakthroughs almost impossible.
            Due to the massive casualties associated with offenses had military
            thinkers trying to think of a solution, usually involving artillery
            techniques or (in Germanyss case) specialized use of "storm
            troopers" to over run short sections of a trench line to open it up
            for follow on troops. The answer in the west was to take a tractor,
            put a bunch of armor and weapons on it, and roll it towards the
            enemy trench while hoping for the best. The concept of taking a
            vehicle and militarizing it was not a new concept at the time the
            war broke out, just nobody had any idea how to use them. The name
            "Tank" was a code word to throw off spies by sounding incredibly
            boring and British. THe first deployments shocked the Germans, who
            wanted hundreds of their own. They quickly adapted, but so did the
            British, who inovated with some of the first modern combined arms
            use of tanks and infantry, supported by artillery. The first models
            required constant maintenance and wore down in record time compared
            to modern hardware, which limted the things that they could be used
            for. The first deployments were with small groups lacking support,
            which is how the Germans were able to learn their weaknesses and
            carry through their own employment in the future. Arguments over the
            role and doctrine of tanks would go through several exercises and
            revisions by most countries who used them, but outside of the
            Russians and the Germans were slow to adopt them into active
            service.
          </p>
        </Col>
        <Col sm={12} md={6}>
          <h2>Russian use of Tanks</h2>
          <p>
            The Russian introduction to tanks is pretty interesting in a few
            ways. They were engaged in more traditional manuever warfare, and
            were knocked out of the war prior to the wide use of tanks by the
            western allies. During the Russian Civil War between the Reds
            (communists) and the Whites (anti-communists?), tanks were provided
            to the whites in moderate numbers by the allies post WWI. A tank
            school was set up in western Russia to train white crews in the use
            and support of the them. Because cavalry was still in large use in
            their traditional role, tank use mirrored them. Using them for
            patrols, security and in manuevers that they were not intended for.
            Of course, they lost the school and all the tanks to the communists,
            and they fell in love. Russian military thinkers tend to be very
            forward thinking, immediately seeing the future value of an armored
            weapons platform rolling down the street to smite the capitalists.
            Post civil war the next step is developing the doctrine for future
            wars.  
          </p>
        </Col>
      </Row>
      <Row>
        <Col sm={12} md={6}>
          <Card bg="black">
            <Card.Img
              variant="top"
              className="img-fluid"
              src={
                "https://upload.wikimedia.org/wikipedia/commons/c/cd/British_Mark_IV_Tadpole_tank.jpg"
              }
            />
            <Card.Title>The first tank</Card.Title>
            <Card.Text>British Mark IV</Card.Text>
          </Card>
        </Col>
        <Col sm={12} md={6}>
          <Card bg="black">
            <Card.Img
              variant="top"
              className="img-fluid"
              src={
                "https://upload.wikimedia.org/wikipedia/commons/b/bb/FT-17-argonne-1918.gif"
              }
            />
            <Card.Title>The first turreted tank</Card.Title>
            <Card.Text>French Renault FT</Card.Text>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default TankHistory;
