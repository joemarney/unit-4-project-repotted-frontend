import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
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
        <Navbar expand="lg" className="bg-body-tertiary1" fixed="top" bg="primary">
          <Container>
            <Navbar.Brand>
              <h1>Repotted.</h1>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/">
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to="/rooms">
                  Rooms
                </Nav.Link>
                <Nav.Link as={Link} to="/plants">
                  Plants
                </Nav.Link>
                <Nav.Link as={Link} to="/about">
                  About
                </Nav.Link>
                <Nav.Link onClick={handleSignOut}>Sign Out</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      ) : (
        <Navbar expand="lg" className="bg-body-tertiary1" fixed="top" bg="primary">
          <Container>
            <Navbar.Brand>
              <h1>Repotted.</h1>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/">
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to="/about">
                  About
                </Nav.Link>
                <NavDropdown title="User" id="basic-nav-dropdown">
                  <NavDropdown.Item as={Link} to="/signin">
                    Sign In
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/signup">
                    Sign Up
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      )}
    </main>
  );
}
