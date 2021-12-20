import Card from "react-bootstrap/Card";
import Col  from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const Tanks = (props) => {
    const tanks = props.tanks
    const setTankDetails = props.setTankDetails
    const makeApiCall = props.makeApiCall

    const tankList = tanks.map((tank) => {
        return(
            <Col sm={6} md={4} lg={3}>
                <Card border="success">
                    <Card.Title>{tank.model}</Card.Title>    
                </Card>            
            </Col>        
        )
    })

    return(
        <Row>
            { tankList }
        </Row>
    )
}

export default Tanks