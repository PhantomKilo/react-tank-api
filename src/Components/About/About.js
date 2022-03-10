import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

const About = () => {
    return(
        <Container>
            <Row>
                <Col>
                <Card bg="black">
                    <Card.Title></Card.Title>
                    <Card.Body>
                        
                    </Card.Body>
                </Card>
                </Col>
                <Col>
                 <Card bg="black">
                    <Card.Title></Card.Title>
                 </Card>
                </Col>
            </Row>
            <Row>
                <Col>
                <Card bg="black">
                    <Card.Title></Card.Title>
                </Card>
                </Col>
                <Col>
                <Card bg="black">
                    <Card.Title></Card.Title>
                </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default About