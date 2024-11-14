import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useNavigate } from "react-router-dom";
import { removeToken } from "../../utilities/auth";

import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./NavBar.module.scss";

export default function NavBar({ setUser, user }) {
  const navigate = useNavigate();

  function handleSignOut() {
    removeToken();
    setUser(null);
    navigate("/");
  }

  return (
    <main className={styles.container}>
      {user ? (
        <Navbar expand="lg" className="bg-body-tertiary" sticky="top">
          <Container>
            <Navbar.Brand href="/">REPOTTED.</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/rooms/">Rooms</Nav.Link>
                <Nav.Link href="/plants/">Plants</Nav.Link>
                <Nav.Link href="/about/">About</Nav.Link>
                <Nav.Link onClick={handleSignOut}>Sign Out</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      ) : (
        <Navbar expand="lg" className="bg-body-tertiary" sticky="top">
          <Container>
            <Navbar.Brand href="/">REPOTTED.</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/rooms/">Rooms</Nav.Link>
                <Nav.Link href="/plants/">Plants</Nav.Link>
                <Nav.Link href="/about/">About</Nav.Link>
                <NavDropdown title="User" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/signin/">Sign In</NavDropdown.Item>
                  <NavDropdown.Item href="/signup/">Sign Up</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      )}
    </main>
  );
}
