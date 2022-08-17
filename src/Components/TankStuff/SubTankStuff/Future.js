import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

const Future = () => {
  return (
    <Container>
      <h1>The Future of Armored Fighting Vehicles</h1>
      <Row>
        <Col md={12} lg={6}>
          <h2>Tanks on Todays Battlefield</h2>
          <p>
            The Global War on Terror (GWOT) led casual observers to belive that
            tanks were overated, too expensive and could be replaced by
            something lighter that could carry the infantry they needed
            directly. The Marines even deactivated their tank units, reforming
            to fight China through island hopping campaigns. Europe was looking
            to replace or dump tanks altogether in an attempt to become a more
            expedition focused military, using airmobile and amphibious forces
            to act as a quick reaction task force. Until Ukraine was invaded by
            Russia of course, which completely changed everything. Now, this was
            already starting to change around 2016, with tank modernization
            programs and restructuring by the US Army to become more tank heavy,
            and countries like Poland buying every modern tank they can get
            their ands on. All of Europe is making similar moves to be prepared
            for the next big war, realising they couldn't stand against what
            Ukraine has survived to this point. The realisation was that there
            wasn't really anything to replace the tank with. Nothing exists
            today that brings the mixture of firepower, protection and mobility
            that a tank brings. Fighting on a European battlefield means long
            sight ranges, where as urban environments need something powerful to
            punch holes in walls. Infantry can do a lot, but tanks allow them to 
            travel lighter due to the weapons mounted. They can aquire and hit 
            targets at a much higher rate than missiles, harder to kill than 
            helicopters and can advance side by side with infantry through most
            terrain. 
          </p>
        </Col>
        <Col md={12} lg={6}>
          <h2>Are Tanks Obsolete?</h2>
          <p>
            Fuck no. Every decade, since 1919, critics of tanks have called for
            them to be decommissioned and replaced with something else to do the
            job. The idea that tanks are vulnerable is something of a surprise
            to people that don't understand the strengths and weaknesses of
            them, especially when pictures of destroyed tanks crop up on social
            media. It's really no secret that tanks require a lot of support,
            like every other asset (shocking, I konw) on the battlefield. The
            Ukraine War and the recent Nagoro-Karabakh War in 2020 saw multiple
            videos of drones or ATGMs knocking them out, proving that missiles
            that cost as much as a small house can due its job. The reasons for
            the failures come down to a few things such as lack of infantry,
            going off without support on their own, or an incorrect perception
            due to limited information available. Gpvernments know what tanks
            mean to laymen, being symbols of power, so when someone destorys
            them it tends to make the news. A lack of proper air defense leads
            to drones or aircraft being able to knock them out with little
            effort. A lack of infantry and recon leads to tanks with no close
            support, going in blind like the Russians during the battle of Kyiv
            just back in February. These things have been known for the last
            century, unsupported tanks, like every other battlefield asset, is a
            sitting duck without support. ATGMs have been in the news lately,
            but the AT-3 Sagger did similar things to Israeli tankers back in
            1973 during their first counter attacks on Egyptian forces. They
            lost close to 200 tanks in less than 24 hours, but then adapted and
            eventually won the war. Newer active defense systems are being
            rolled out that may negate most of the ATGM systems out there today,
            so to say tanks are going away is short sighted. Besides, in order
            to be considered obsolete there would have to be something to do the
            job better, which there isn't at this time.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Future;
