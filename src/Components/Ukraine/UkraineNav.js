import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const UkraineNav = () => {
    return(
        <Navbar className="nav-bar" bg="black" expand="md">
      <Container>
        <Nav className="ms-auto">
          <Link className="nav-link" to="/tank/ukraine">
            <span className="nav-text">General Info</span>
          </Link>  
          <Link className="nav-link" to="/tank/ukraine/nagorno-karabakh">
            <span className="nav-text">2020 Nagorno-Karabakh War</span>
          </Link>     
          <Link className="nav-link" to="/tank/ukraine/russian-plan">
            <span className="nav-text">Russian Plan</span>
          </Link>  
          <Link className="nav-link" to="/tank/ukraine/russian-plan">
            <span className="nav-text">Russian Organization</span>
          </Link>    
          <Link className="nav-link" to="/tank/ukraine/information-war">
            <span className="nav-text">Information War</span>
          </Link> 
        </Nav>
      </Container>
    </Navbar>
    )
}

export default UkraineNav