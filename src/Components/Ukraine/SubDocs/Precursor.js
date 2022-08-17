import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const Precursor = () => {
  return (
    <>
      <Row>
        <h1>2020 Nagorno-Karabakh war</h1>
      </Row>
      <Row>
        <h3>This will be longish, but it needs to be</h3>
      </Row>
      <Row>
        <Col md={12} lg={6}> 
          <h2>Background</h2>
          <p>
            The years immediately following the fall of the USSR saw a massive
            wave of violence across a large part of former soviet territory (the
            term "balkanization" was coined to describe 90s eastern europe).
            Yugoslavia broke into a three way civil war, Chechnya made a move to
            break from Russia, and Armenia seized the Nagorno-Karabakh region
            from Azerbaijan. From 1994, until 2020, the region was governed over
            by an Armenian puppet government, the Republic of Artsakh. In 2020,
            Azerbaijan attacked and retook a majority of the region, achieving a
            total victory. The combination of a better funded military, serious
            modernization and integration of drones to support the more
            conventional forces gave Azerbaijan the edge it needed.
          </p>
        </Col> 
        <Col md={12} lg={6}> 
          <h2>How is this war connected to Ukraine?</h2>
          <p>
            The 2020 Nagorno-Karabakh war showcased much of the technology and
            tactics currently used during the fighting in Ukraine. Wide spread
            use of drones to both dirctly engage targets and spot for artillery,
            the use of social media by both governments that engaged in
            Information warfare, and newer tactics by Azerbaijan against older
            soviet tactics and force structure. This war, somewhat of a
            precursor to the current war in Ukraine, is a good reference point
            in many ways to show how the lanscape of war has changed. Much of
            what happend in this war, factoring for cultural and regonal
            differences, is being repeated in Ukraine by both sides.
          </p>
        </Col> 
      </Row>
      <Row>
        <Col md={12} lg={6}> 
          <h2>Azerbaijani side</h2>
          <p>
            Following the first Nagorno-Karabakh war, which saw Azerbaijan lose
            territory without much ability to compete, a real effort to
            modernize was undertaken to eventualy take back their land. With
            heavy investments in new technology such as drones on the hardware
            end, and updating their doctrine and force structure to match a more
            fluid organization, so as to adapt faster to a changing reality. The
            focus was on being light and mobile, a change from the wide front of
            Soviet times. This allowed Azerbaijani forces to out maneuver
            Armenian forces. The use of drones allowed accurate artillery fire
            and direct strikes with little delay, as well as the recon benefits.
            Azerbaijan enjoyed a large amount of foreign support, getting large
            amounts of their drones from Turkey (with rumors of Turkey directly
            piloting the TB2s) and Syrian mercenaries. Just the important base
            info at this time.
          </p>
        </Col> 
        <Col md={12} lg={6}> 
          <h2>Armenian side</h2>
          <p>
            Armenia's military was based around old Soviet doctrine and
            equipment. The country enjoyed an advantage over their Azerbaijani
            neighbors in both cordination and hardware in 1994, during the first
            Nagorno-Karabakh war. For whatever reason, they decided to keep
            their military nearly identical, foregoing modernization or force
            structure oerhaul. Armenia did integrate drones into their
            inventory, but at much more limited use compared to Azerbaijan. The
            focus was mostly on heavier, mechanized forces with large
            concentration of tanks, mostly T-72s. Air defense systems were
            limited to older, shorter range platforms due to deploying most of
            their modern platforms along their northern border. Armenia was also
            isolated in ways from the world, not getting the foreign support
            that Azerbaijon was able to get. There are more indepth views of
            Armenian weaknesses so I will just stick with the most important
            stuff.
          </p>
        </Col> 
      </Row>
      <Row>
        <Col md={12} lg={6}> 
          <h2>Use of technology</h2>
          <p>
            The heavy use of drones by the Azerbaijani side was a major factor,
            being able to pretty much see and hit much of the Armenian forces
            before ground contact.
          </p>
        </Col> 
        <Col md={12} lg={6}> 
          <h2>Information warfare</h2>
          <p>
            Both Armenia and Azerbaijan took to social media to grab support and
            crush the opposition. Once again, Azerbaijan jumped ahead to take
            control of the cyber realm. Supported by Turkey, with bot farms in
            many different countries, they dominated the narrative. Bot farms
            were used to downvote, hack and overwhelm pro-Armenian social media
            accounts, drowning them out. Armenia, being completely reliant on
            old soviet doctrine and unable to adapt, was left completely
            defenseless against this newish aspect of warfare. 
          </p>
        </Col> 
      </Row>
    </>
  );
};

export default Precursor;
