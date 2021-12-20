import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavBar = () => {
  return (
    <Navbar className="nav-bar" bg="light" expand="md">
      <Container>
        <Navbar.Brand>
          <Link to="#">
            Tank API
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link className="nav-link" to="#">
              Home
            </Link>
            <Link className="nav-link" to="/tank/tank-api">
              Tanks
            </Link>
            <Link className="nav-link" to="#">
              General Tank Stuff
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
