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
          <h2>Why Invade Ukraine?</h2>
          <p>
            There are probably a variety of reasons to actually lauunch an
            invasion of Ukraine that make some sense to Russia. Putin, as well
            as many Russians, believe that Ukraine does not have the right to
            exist as independent to Russia. Having written an essay on the
            subject, Putin argues that Russians, Belorussians and Ukrainians are
            the same people and should be part of Russia. Ukraine disagrees, but
            this leads to the bigger issue. Russia has major oil and gas
            pipelines going through Ukrainian territory, as well as Ukraine
            having enough of their own for Europe to cut Russia out of the
            equation entirely. This wasn't much of a problem until Ukraine threw
            out their president, Viktor Yanukovych, in 2014 after he turned his
            back on a European free trade agreement to sign one with Moscow
            instead. Since this threatens the Russian economy, they invaded the
            Dombas and annexed Crimea, most likely to prevent Ukraine from
            developing their resources. Allowing that to happen would let Europe
            to bypass Russia for gas and oil, which would kill their economy. It
            didn't help that their info and cyber operations were successful to
            a point, as well as having conventional success in previous wars,
            adding to the ego of the Kremlin.
          </p>
        </Col>
      </Row>
      <Row>
        <Col sm={12} md={6}>
          <Card bg="black">
            <Card.Img
              variant="top"
              className="img-fluid"
              src="https://i.redd.it/tjaha0kcv7k81.png"
            />
            <Card.Title>Ukrainian oil and natural gas deposits</Card.Title>
          </Card>
        </Col>
        <Col sm={12} md={6}>
          <h2>The "Plan"</h2>
          <p>
            The Russian army seemed to have two main objectives, hit Kyiv asap,
            and cripple Ukraines economic ability by siezing their energy
            deposits through Crimea and the Dombass. The VDV (Russian airborne)
            were charged with grabbing Hostomel airport to create an airbridge
            for follow up forces. Spetsnaz operators were to take out the head
            of the Ukrainian government and force a quick surrender. Rosgvardia
            (Russian national guard, military police) had the job of going into
            population centers, such as Kyiv, to deal with the people. With a
            new group in charge of Ukraine, favorable deals could be put in
            place to ease Moscow and ensure a weakened rival state. After
            Ukraine is more "Russified", the insult of an independent Ukraine
            and the threat to Russias economy could be put behind them.
            Ofcourse, whether a plan is successful or not relies on multiple
            factors, one of which is actually making sure the people carrying it
            out know there is a plan to begin with...
          </p>
        </Col>
      </Row>
      <Row>
        <Col sm={12} md={6}>
          <h2>WTF happened?</h2>
          <p>
            So, as it turns out, the Russian brass decided to not inform anyone
            until the days leading up to the invasion. POWs report that they
            were not even aware that an operation was taking place, thinking
            that the prep was a training exercise. US and UK intelligence knew
            about the invasion, including where the Russians were planning to
            move in, before their own troops. Russian troops selling their fuel
            in Belorus, failing to train properly, lying about readiness levels
            and personnel numbers, and stealing new equiment (body armor, spare
            parts, etc.) to sell fo extra money for themselves. Part of the
            force modernization was getting encripted radios for the troops to
            avoid getting communications intercepted in the field, only few
            units, which were gutted during the first weeks, were able to get
            the new radio equipment. Due to conscripts not being allowed to be
            used in foreign operations without a state of war declared, manpower
            shortages started to show themselves in not so obvious ways. There 
            were not enough troops for dismounted infantry and truck drivers. A
            lack of infantry makes combined operations impossible, while a lack 
            of drivers killed any consistent road logistics involving trucks. 
          </p>
        </Col>
        <Col sm={12} md={6}>
          <h2>False Assumptions</h2>
          <p>
            Something that is common in nationalistic military planning is the
            overestimating of their own ability and underestimating the clearly
            "inferior" enemy (See: Winter War, Barbarossa, Iran-Iraq War). Why
            would anoher, lesser society put up a fight, let alone not collapse
            entirely on first contact? They would probably be better off being
            absorbed into our culture directly. Except, this almost never
            happens like how nationalists want it to. Putin sees Ukraine as an
            illegitimate country, temporary seporated from the greater Russia.
            He was fed typical "yes man" BS that confimed this, because he fired
            anyone who said otherwise. The whole invasion was to take 72 hours
            at the most, with logistical planning to match. The entire "plan"
            hinged on being able to take control of Kyiv and replace the current
            government with one more favorable to Moscow.
          </p>
        </Col>
      </Row>
      <Row>
        <Col sm={12} md={6}>
          <Card bg="black">
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
