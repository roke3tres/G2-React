import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "../CSS/Header.css";

function Header() {
  return (
    <Navbar bg="light" expand="lg" className="Header">
      <Container>
        <Navbar.Brand href="#home">G2 Master BIM Management</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <NavDropdown title="Planos" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                Arquitectura
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Estructura</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Instalaciónes
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link">Modelo 3D</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
