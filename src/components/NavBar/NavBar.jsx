import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useNavigate } from "react-router-dom";
import { removeToken } from "../../utilities/auth";

import styles from "./NavBar.module.scss";

export default function NavBar({ setUser, user }) {
  const navigate = useNavigate();

  function handleSignOut() {
    removeToken();
    setUser(null);
    navigate("/signin");
  }

  return (
    <main className={styles.container}>
      {user ? (
        <Navbar className="bg-body-tertiary1" bg="primary" fixed="top" expand="lg" collapseOnSelect>
          <Container>
            <Navbar.Brand>
              <h1>Repotted.</h1>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/" href="#">
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to="/rooms" href="#">
                  Rooms
                </Nav.Link>
                <Nav.Link as={Link} to="/plants" href="#">
                  Plants
                </Nav.Link>
                <Nav.Link as={Link} to="/about" href="#">
                  About
                </Nav.Link>
                <Nav.Link href="#" onClick={handleSignOut}>
                  Sign Out
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      ) : (
        <Navbar className="bg-body-tertiary1" bg="primary" fixed="top" expand="lg" collapseOnSelect>
          <Container>
            <Navbar.Brand>
              <h1>Repotted.</h1>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/" href="#">
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to="/signup" href="#">
                  Sign Up
                </Nav.Link>
                <Nav.Link as={Link} to="/signin" href="#">
                  Sign In
                </Nav.Link>
                <Nav.Link as={Link} to="/about" href="#">
                  About
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      )}
    </main>
  );
}
