import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavBar = () => {
  return (
    <Navbar className="nav-bar" bg="black" expand="md">
      <Container>
        <Navbar.Brand>
          <Link to="/tank/home" className="nav-link" style={{textDecoration: "none"}}>
            <span className="nav-text">Tank API</span>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link className="nav-link" to="/tank/tank-api">
              <span className="nav-text">Tanks</span>
            </Link>
            <Link className="nav-link" to="tank/tank-stuff">
              <span className="nav-text">General Abrams Stuff</span>
            </Link>
            <Link className="nav-link" to="tank/about">
              <span className="nav-text">About App</span>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
