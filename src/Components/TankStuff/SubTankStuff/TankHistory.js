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
            wars. The Russians, now Soviets following the end of the civil war,
            were the first nation to go all in on tanks post WWI.
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
      <Row>
        <Col sm={12} md={6}>
          <h2>Interwar Period</h2>
          <p>
            The post war period was filled with military thinkers trying to fit
            the WWI experience into future war planning. Tank use was debated
            within pretty much every circle around the world. The countries that
            put much thought into developing this new weapon were the USSR,
            Germany and, primarily, the UK. The UK created the experimental
            mechanized unit, a training unit with the purpose of developing the
            doctrinal use of mechanized doctrine using battalion and larger
            exercises, being put up against traditional infantry or cavalry and
            seeing how they compared. These experiences showed that
            mechanization had a large amount of benefits, faster and requiring
            less breaks than traditional cavalry, while still able to bring up
            the infantry and artillery at a similar pace. Recon was faster and
            (due to better communications) able to find and exploit the greater
            manueverability of the vehicles to the fullest extent. Every country
            sent observers, and all of them started their own programs to
            mechanize their armies. The Soviets and Germans cooperated to
            codevelop techonology and tactics together for a short period of
            time. Both countries would take the British experience and suit it
            to their needs. On the hardware front, tank designers tried a large
            variety of designs, with multiple turreted land battleships to small
            utility tracks only fitting one or two crewman. From 1919 to about
            the mid-late 1930s were relatively peaceful, as well as a global
            economic depression that didn't help. The Germans incorporated
            elements of the British experience into their own doctrinal
            development, basing it heavily on storm trooper tactics during the
            first world war.
          </p>
        </Col>
        <Col sm={12} md={6}>
          <h2>Spanish Civil War</h2>
          <p>
            While most of the interwar period was peaceful, the lead up to WWII
            saw a handful of conflicts in the late 1930s. The most "complete" of
            the bunch was the Spanish Civil War. The war saw both Germany and
            the USSR deploy both hardware and large support staffs to train
            local crews in their respective doctrine and equipment sustainment.
            This was probably the first use of modern airpower and the systems
            around it, such as air resupply, radar and strategic bombing
            campaigns. On the tank front, Germany sent a number of their Panzer
            1 light tanks for Nationalist forces under Francisco Franco, as well
            as Flak 88 anti-air guns, where they would gain the tank-killer
            reputation. The Soviets, for their part, sent hundreds of BT and T26
            tanks for the various Spanish Replublican forces (communists,
            socialists, anarchists, etc.). The foreigners used this as an
            opportunity to take notes on how to improve their equipment and
            doctrine (the requirements for the T34 were drawn up based on Soviet
            experience here). The shortcomings of tanks were on full display,
            due in no small part to the lack of cohesion among Spanish forces on
            either side. Infantry would wait for the tanks to advance before
            moving up, leaving them on their own and vulnerable. Tank crews are
            limited in what they can see, so this resulted in not only tank
            losses that were unnecessary and sometimes led to larger routs.
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card>
            <Card.Img
              variant="top"
              className="img-fluid"
              src={
                "https://upload.wikimedia.org/wikipedia/commons/d/d3/Char_de_Bataille_B1.jpg"
              }
            />
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img
              variant="top"
              className="img-fluid"
              src={
                "https://upload.wikimedia.org/wikipedia/commons/7/7e/P68l.jpg"
              }
            />
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card>
            <Card.Img
              variant="top"
              className="img-fluid"
              src={
                "https://upload.wikimedia.org/wikipedia/commons/b/bb/FT-17-argonne-1918.gif"
              }
            />
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img
              variant="top"
              className="img-fluid"
              src={
                "https://upload.wikimedia.org/wikipedia/commons/b/bb/FT-17-argonne-1918.gif"
              }
            />
          </Card>
        </Col>
      </Row>
      <Row>
        <Col></Col>
        <Col></Col>
      </Row>
    </Container>
  );
};

export default TankHistory;
