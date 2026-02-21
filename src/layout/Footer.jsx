import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { routes } from "../constants/routes";
import { useScrollTo } from "../hooks/useScrollTo";
import { 
  emailAddress, 
  rawWhatsappNumber, 
  styledWhatsappNumber, 
  defaultWhatsappMessage 
} from "../constants/contactInfo";
import qrAfip from "../assets/mockup_qr.png";

function Footer() {
  const arcaLink = "https://www.arca.gob.ar";
  const scrollTo = useScrollTo(80);

  const whatsappUrl = `https://wa.me/${rawWhatsappNumber}?text=${encodeURIComponent(
    defaultWhatsappMessage
  )}`;

  const handleNavClick = (e, id) => {
    e.preventDefault();
    scrollTo(id);
  };

  return (
    <footer className="mt-5 py-4 footer-border bg-tactical-reverse">
      <Container fluid className="px-5">
        <Row className="align-items-start">
          
          {/* COLUMNA 1: LOGO */}
          <Col md={3} xs={6} className="mb-4 mb-md-0 d-flex align-items-center justify-content-center">
            <img 
              src="./logo_nameless.png" 
              alt="Logo Footer" 
              className="footer-img" 
              onClick={(e) => handleNavClick(e, "inicio")}
            />
          </Col>

          {/* COLUMNA 2: NAVEGACIÓN */}
          <Col md={3} xs={6} className="mb-4 mb-md-0">
            <h5 className="mb-3 text-uppercase fw-bold">Navegación</h5>
            <ul className="list-unstyled d-flex flex-column gap-2">
              {routes.map((route) => (
                <li key={route.id}>
                  <a
                    href={`#${route.id}`}
                    className="nav-link p-0"
                    onClick={(e) => handleNavClick(e, route.id)}
                  >
                    {route.label}
                  </a>
                </li>
              ))}
            </ul>
          </Col>

          {/* COLUMNA 3: CONTACTO */}
          <Col md={3} xs={6} className="mb-4 mb-md-0">
            <h5 className="mb-3 text-uppercase fw-bold">Contacto</h5>
            <ul className="list-unstyled d-flex flex-column gap-2 contact-list">
              <li>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {styledWhatsappNumber}
                </a>
              </li>
              <li>
                <a href={`mailto:${emailAddress}`}>
                  {emailAddress}
                </a>
              </li>
              <li>Lunes a Viernes 9hs a 18hs</li>
              <li>Yerba Buena, Tucumán, Argentina.</li>
            </ul>
          </Col>

          {/* COLUMNA 4: QR AFIP */}
          <Col md={3} xs={6} className="mb-4 mb-md-0 d-flex align-items-center justify-content-center">
            <a 
              href={arcaLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="d-block"
            >
              <img
                src={qrAfip}
                alt="Data Fiscal ARCA"
                className="footer-img"
              />
            </a>
          </Col>
        </Row>

        <hr className="my-3 opacity-25" />
        
        <Row>
          <Col className="text-center">
            <p className="small text-secondary mb-0">
        &copy; {new Date().getFullYear()} Consultora de Seguridad Ortiz. Todos los derechos reservados.    </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;