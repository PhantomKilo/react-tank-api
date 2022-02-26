import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavBar = () => {
  return (
    <Navbar className="nav-bar" bg="black" expand="md">
      <Container>
        <Nav className="ms-auto">
          <Link className="nav-link" to="/tank/tank-stuff">
            <span className="nav-text">General info</span>
          </Link>
          <Link className="nav-link" to="/tank/tank-stuff/loading">
            <span className="nav-text">Loading Debate</span>
          </Link>
          <Link className="nav-link" to="/tank/tank-stuff/gunnery">
            <span className="nav-text">Gunnery Jargon</span>
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
