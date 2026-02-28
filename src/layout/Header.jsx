import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button"; 
import { routes } from "../constants/routes";
import { useScrollTo } from "../hooks/useScrollTo";
import { useSmartHeader } from "../hooks/useSmartHeader";
import { clsx } from "clsx";
import styles from "./Header.module.css"

function Header() {
  const scrollTo = useScrollTo(80);
  const isVisible = useSmartHeader(15);
  const [expanded, setExpanded] = useState(false);

  const handleClick = (id) => {
    scrollTo(id);
    setExpanded(false); 
  };

  return (
    <Navbar 
      expand="lg"
      expanded={expanded}
      onToggle={() => setExpanded(!expanded)}
      className={clsx("fixed-top", styles.headerWrapper, {
        [styles.navbarVisible]: isVisible,
        [styles.navbarHidden]: !isVisible
      })}
    >
      <Container fluid className="px-3 px-lg-5">
        
        <Navbar.Brand onClick={() => window.location.href = "/"}>
          <img
            alt="Logo"
            src="../logo_named.png"
            height="50"
            className={clsx("d-inline-block align-top me-2", styles.headerLogo)}
          />
        </Navbar.Brand>

        <Navbar.Toggle 
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(!expanded)}
        />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto text-center gap-4">
            {routes.map((route) => (
              <Nav.Link
                key={route.id}
                className="hover-item text-uppercase fw-semibold text-white text-uppecase"
                onClick={() => handleClick(route.id)}
              >
                {route.label}
              </Nav.Link>
            ))}
          </Nav>

          <div className="d-flex justify-content-center mt-3 mt-lg-0">
            <Button 
              size="sm"
              className="btn-tactical px-3"
              onClick={() => handleClick("contacto")}
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