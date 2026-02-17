import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button"; 
import { useScrollTo } from "../hooks/useScrollTo";
import "./Layout.css";

function Header() {
  const scrollTo = useScrollTo(80);

  return (
    <Navbar expand="lg" className="bg-tactical header-border">
      <Container fluid className="px-5">
        <Navbar.Brand href="#home">
          <img
            alt="Logo"
            src="https://placehold.co/30x30"
            width="30"
            height="30"
            className="d-inline-block align-top me-2"
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          {/* MENU CENTRAL */}
          <Nav className="mx-auto text-center gap-3">
            <Nav.Link className="nav-link" onClick={() => scrollTo("inicio")}>Inicio</Nav.Link>
            <Nav.Link className="nav-link" onClick={() => scrollTo("nosotros")}>Nosotros</Nav.Link>
            <Nav.Link className="nav-link" onClick={() => scrollTo("servicios")}>Servicios</Nav.Link>
            <Nav.Link className="nav-link" onClick={() => scrollTo("diferencial")}>Diferencial</Nav.Link>
            <Nav.Link className="nav-link" onClick={() => scrollTo("contacto")}>Contacto</Nav.Link>
          </Nav>

          <div className="d-flex justify-content-center mt-3 mt-lg-0">
            <Button 
              size="sm"              
              className="btn-tactical px-3"
            >
              Consulta de Riesgos
            </Button>
          </div>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;