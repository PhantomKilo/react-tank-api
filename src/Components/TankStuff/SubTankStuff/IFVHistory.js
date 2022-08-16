import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

const IFVHistory = () => {
  return (
    <Container>
      <h1>The (Very Abridged) History of IFVs</h1>
      <Row>
        <Col md={12} lg={6}>
          <h2>The First Infantry Fighting Vehicle (IFV)</h2>
          <p>
            Thw world was shocked when the BMP, which literally translates to
            Infantry Fighting Vehicle, made its debut in 1967 during a military
            parade. The BMP stood out due to its heavy firepower, meant to
            assault side by side with the infantry directly instead of staying
            behind. APCs, such as the M113, had already been upguned and used in
            a similar way in other wars, such as Vietnam, but was not purpose
            built for the role. The doctrinal implications of a heavily armed
            vehicle to transport and support the infantry shifted development to
            match the Soviets in the west. The vehicle was fully CBRNE enclosed,
            with firing ports for the dismounts inside. So, in the event of
            nukes being let loose, the Soviet military would be able to continue
            with as little pause as possible. Another inovation was the use of
            some of the first ATGMs, the AT-3 Sagger, for longer range anti tank
            use. The dismount version would prove revolutionary during both its
            own and the BMPs debut during the Yom Kippor war in both Syrian and
            Egyption service. Problems were found with the BMP though, with the
            2A28 Grom, its main gun, proved to be inaccurate and unreliable, and
            the ATGM was hard to aim from the turret, unlike its dismount
            sibling. The vehicle itself was liked for its speed, though needed
            some help to deal with desert conditions. Other issues the Soviets
            themselves found were poor protection from mines and the gun having
            limited evelvation, both found to be important when used in the
            Afghan War. The improved version, the BMP 2, would be designed and
            produced with improvements such as a 30mm autocannon to replace the
            previous cannon, setting a standard for modern IFV design that
            largely stands today.
          </p>
        </Col>
        <Col md={12} lg={6}>
          <h2>Western Developments</h2>
          <p>
            While the BMP is the official beginning of a new category, there
            were other attempts to achieve something similar by other countries.
            American docrine saw armored carriers as battle taxis, as such most
            western projects were designed with this in mind. The Germans,
            probably based on their WWII experience, developed the HS. 30 to
            work in close cooperation with tanks and assault along side the
            infantry directly. The vehicle was not very good, but would be a
            good indication of what was to come. The HS. 30 was armored, and
            came equiped with a 20mm autocannon, allowing it to engage other
            light vehicles while carrying or supporting infantry. While other
            NATO countries began adding 20mms to their own vehicles, the BMP
            being revealed in 1967 completely shifted the focus from a future
            design and doctrine direction. The M2 Bradley began development in
            the late 60s, going through many interations and upgrades that
            delayed its adoption until the early 80s, bringing a 25mm
            autocannon, TOW missiles, and able to carry almost a full squad.
            Germany and Britain adopted their own Marder and Warrior,
            respectively. By the 80s the design of IFVs have becaome mostly
            standardized, carrying some combo of autocannon and missiles, for
            pretty much every country developing them. Most tend to be tracked
            and assigned to armored or mechanized units, and replaced the APCs
            that used to accompany tanks to battle, while APCs themselves have
            become lighter. IFVs are typically tracked these days, while APCs by
            comparison are usually wheeled and issued to infantry and second
            line units.
          </p>
        </Col>
      </Row>
      <Row>
        <Col md={12} lg={6}></Col>
        <Col md={12} lg={6}></Col>
      </Row>
      <Row>
        <Col md={12} lg={6}></Col>
        <Col md={12} lg={6}></Col>
      </Row>
      <Row>
        <Col md={12} lg={6}></Col>
        <Col md={12} lg={6}></Col>
      </Row>
    </Container>
  );
};

export default IFVHistory;
