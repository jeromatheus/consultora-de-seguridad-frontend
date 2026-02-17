import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { routes } from "../constants/routes";
import { useScrollTo } from "../hooks/useScrollTo";

function Footer() {
  const scrollTo = useScrollTo(80);

  // Función auxiliar para mantener el código limpio en el JSX
  const handleNavClick = (e, id) => {
    e.preventDefault(); // Evita que el navegador "salte" de golpe
    scrollTo(id); // Ejecuta el scroll suave
  };

  return (
    <footer className="py-3 footer-border bg-tactical-reverse">
      <Container fluid className="px-5">
        <Row>
          {/* COLUMNA 1: LOGO */}
          <Col xs={12} md={4} className="mb-4 mb-md-0 h-100 d-flex">
            {/* <div> */}
              <img
                src="../logo.png"
                alt="Logo Footer"
              />
            {/* </div> */}
          </Col>

          {/* COLUMNA 2: ENLACES RÁPIDOS */}
          <Col md={4} xs={6} className="mb-4 mb-md-0">
            <h5 className="mb-3 text-uppercase fw-bold">Navegación</h5>
            <ul className="list-unstyled d-flex flex-column gap-2">
              {routes.map((route) => (
                <li key={route.id}>
                  <a
                    href={`#${route.id}`}
                    className="nav-link"
                    onClick={(e) => handleNavClick(e, route.id)}
                  >
                    {route.label}
                  </a>
                </li>
              ))}
            </ul>
          </Col>

          {/* COLUMNA 3: CONTACTO */}
          <Col md={4} xs={6}>
            <h5 className="mb-3 text-uppercase fw-bold">Contacto</h5>
            <ul className="list-unstyled d-flex flex-column gap-2">
              <li>Av. Corrientes 1234, CABA</li>
              <li>+54 9 11 1234-5678</li>
              <li>contacto@seguridadortiz.com</li>
              <li>Lunes a Viernes 9hs a 18hs</li>
            </ul>
          </Col>
        </Row>

        {/* SUBTÍTULO: LEGAL */}
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