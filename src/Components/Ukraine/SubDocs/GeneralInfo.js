import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";

const GeneralInfo = () => {
  return (
    <Container>
      <h1>2022 Russian invasion of Ukraine</h1>
      <Row>
        <Col md={12} lg={6}>
          <h2>What is going on?</h2>
          <p>
            On February 24th, 2022, the Russian military launched an invasion of
            Ukraine. While the exact reasons are known only to Russia (though US
            intel groups probably have much more info), it seems that they were
            going for a quick regime change with minimal resistence. This is
            heavily supported by the lack of any long term planning and limited
            expeditionaary force structure lacking bayonet strength.
            Unfortunately for Moscow, they got bogged down hard, with some
            vanguard units being completely wiped out the first couple weeks.
            The reasons for their failure are pretty expansive, so digging into
            to them will take some time, and a pinch of speculation.
          </p>
        </Col>
        <Col md={12} lg={6}>
          <h2>The Information War</h2>
          <p>
            Both belligerents are attempting to harness the web for propganda
            purposes. The Ukrainians are posting TB-2 drone and artillery
            strikes against disorganized Russian forces, abandoned or destroyed
            armored vehicles and retaking towns. The Russians, having been
            limited to posting to Telegram, a right wing leaning messaging app,
            focusing on Ukrainian casulties and limited successes, while
            attempting to hide atrocities and control the narrative with
            conspiracies involving covid bio weapon labs. Ukraine is winning the
            Information war, taking control and rallying support, both material
            and moral, pushing neutral countries to NATO for protection against
            Russia.
          </p>
        </Col>
      </Row>
      <Row>
        <Col md={12} lg={6}>
          <h2>Whats Next?</h2>
          <p>
            Unfortunately, there is no sign of this war ending anytime in the
            near future. Russia (Putin) seem dead set on accomplishing their
            strategic goals against the odds. Ukraine, flooded with foreign aid,
            and with a huge amount of wlling manpower, can hold out for quite a
            while. War is changing, and as both sides adapt to the changing
            landscape, casualties are extremely high on both sides, especially
            among civilians in the area. There is a real chance this war gets
            much worse before it gets better. Whether there is a peace accord,
            or Ukraine retakes their own territory, is up to the belligerents at
            this time.
          </p>
        </Col>
        <Col md={12} lg={6}>
          <h2>World Impact</h2>
          <p>
            Ukraine and Russia together supply more than a quarter of the worlds
            grain, leading to massive shortages in countries dependent on
            imports. Russia is under massive sanctions, crippling it's economy
            for the foreseeable future. Almost 4 million have left Russia as of
            writing this (May 10th, 2022), mostly among younger, more educated
            people, taking all future productivity to some other country.
            Ukraines economy is projected to shrink as much as 45%, due in large
            part to their economic center being the focus of the Russian
            military as of late. The extensive use of drones by both sides of
            this conflict will change the way militaries structure their
            capabilities to best utilize and counter them, what that looks like
            is to be seen.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default GeneralInfo;
