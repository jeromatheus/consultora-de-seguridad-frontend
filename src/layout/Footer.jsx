import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useScrollTo } from "../hooks/useScrollTo";

function Footer() {
  const scrollTo = useScrollTo(80);

  // Función auxiliar para mantener el código limpio en el JSX
  const handleNavClick = (e, id) => {
    e.preventDefault(); // Evita que el navegador "salte" de golpe
    scrollTo(id); // Ejecuta el scroll suave
  };

  return (
    <footer className="py-3 footer-border bg-tactical">
      <Container fluid className="px-5">
        <Row>
          {/* COLUMNA 1: LOGO */}
          <Col md={4} className="mb-4 mb-md-0">
            <img
              src="https://placehold.co/100x50"
              alt="Logo Footer"
              className="d-block mb-3"
            />
          </Col>

          {/* COLUMNA 2: ENLACES RÁPIDOS */}
          <Col md={4} xs={6} className="mb-4 mb-md-0">
            <h5 className="mb-3">Navegación</h5>
            <ul className="list-unstyled d-flex flex-column gap-2">
              <li>
                <a
                  href="#inicio"
                  className="nav-link"
                  onClick={(e) => handleNavClick(e, "inicio")}
                >
                  Inicio
                </a>
              </li>
              <li>
                <a
                  href="#nosotros"
                  className="nav-link"
                  onClick={(e) => handleNavClick(e, "nosotros")}
                >
                  Nosotros
                </a>
              </li>
              <li>
                <a
                  href="#servicios"
                  className="nav-link"
                  onClick={(e) => handleNavClick(e, "servicios")}
                >
                  Servicios
                </a>
              </li>
              <li>
                <li>
                  <a
                    href="#diferencial"
                    className="nav-link"
                    onClick={(e) => handleNavClick(e, "diferencial")}
                  >
                    Diferencial
                  </a>
                  <a
                    href="#contacto"
                    className="nav-link"
                    onClick={(e) => handleNavClick(e, "contacto")}
                  >
                    Contacto
                  </a>
                </li>
              </li>
            </ul>
          </Col>

          {/* COLUMNA 3: CONTACTO */}
          <Col md={4} xs={6}>
            <h5 className="mb-3">Contacto</h5>
            <ul className="list-unstyled d-flex flex-column gap-2">
              <li>Av. Corrientes 1234, CABA</li>
              <li>+54 9 11 1234-5678</li>
              <li>contacto@seguridadortiz.com</li>
              <li>Lunes a Viernes 9hs a 18hs</li>
            </ul>
          </Col>
        </Row>

        {/* LEGAL */}
        <hr className="my-3" />
        <Row>
          <Col className="text-center">
            <p className="small text-secondary mb-0">
              &copy; {new Date().getFullYear()} Todos los derechos reservados.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;