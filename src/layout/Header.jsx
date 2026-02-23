import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button"; 
import { routes } from "../constants/routes";
import { useScrollTo } from "../hooks/useScrollTo";
import { useSmartHeader } from "../hooks/useSmartHeader";
import "./Layout.css";

function Header() {
  const scrollTo = useScrollTo(80);
  const isVisible = useSmartHeader(15); // Sensibilidad

  return (
    <Navbar 
      expand="lg" 
      className={`bg-tactical header-border fixed-top smart-navbar ${
        isVisible ? "nav-visible" : "nav-hidden"
      }`}>
      <Container fluid className="px-5">
        <Navbar.Brand onClick={() => window.location.href = "/"}>
          <img
            alt="Logo"
            src="../logo_named.png"
            // width="150"
            height="50"
            className="d-inline-block align-top me-2"
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto text-center gap-4">
            {routes.map((route) => (
              <Nav.Link
                key={route.id}
                className="nav-link"
                onClick={() => scrollTo(route.id)}
              >
                {route.label}
              </Nav.Link>
            ))}
          </Nav>

          <div className="d-flex justify-content-center mt-3 mt-lg-0">
            <Button 
              size="sm"             
              className="btn-tactical px-3"
              onClick={() => scrollTo("contacto")}
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