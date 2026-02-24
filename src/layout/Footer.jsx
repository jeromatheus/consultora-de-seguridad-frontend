import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { routes } from "../constants/routes";
import { useScrollTo } from "../hooks/useScrollTo";
import {
  emailAddress,
  rawWhatsappNumber,
  styledWhatsappNumber,
  defaultWhatsappMessage,
} from "../constants/contactInfo";
import arcaQr from "../assets/mockup_qr.png";

function Footer() {
  const arcaLink = "https://www.arca.gob.ar";
  const scrollTo = useScrollTo(80);

  const whatsappUrl = `https://wa.me/${rawWhatsappNumber}?text=${encodeURIComponent(
    defaultWhatsappMessage,
  )}`;

  const handleNavClick = (e, id) => {
    e.preventDefault();
    scrollTo(id);
  };

  return (
    <footer className="mt-5 pt-5 pb-4 footer-border bg-tactical-reverse">
      <Container fluid className="px-3 px-lg-5">
        <Row className="align-items-start justify-content-between">
          {/* COLUMNA 1: LOGO */}
          <Col
            lg={3}
            md={12}
            className="mb-5 mb-lg-0 d-flex align-items-center justify-content-center justify-content-lg-start"
          >
            <img
              src="./logo_nameless.png"
              alt="Logo Footer"
              className="footer-img d-none d-md-block"
              onClick={() => (window.location.href = "/")}
            />
            <img
              src="./logo_named.png"
              alt="Logo Footer"
              className="footer-img d-block d-md-none"
              onClick={() => (window.location.href = "/")}
            />
          </Col>

          {/* COLUMNA 2: NAVEGACIÓN */}
          <Col lg={3} md={4} xs={6} className="mb-4 mb-lg-0">
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
          <Col
            lg={3}
            md={5}
            xs={12}
            className="mb-4 mb-lg-0 order-last order-md-0"
          >
            <h5 className="mb-3 text-uppercase fw-bold">Contacto</h5>
            <ul className="list-unstyled d-flex flex-column gap-2 contact-list">
              <li>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none"
                >
                  {styledWhatsappNumber}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${emailAddress}`}
                  className="text-decoration-none text-break"
                >
                  {emailAddress}
                </a>
              </li>
              <li className="text-secondary">
                Lunes a Viernes 09:00 a 18:00 HS
              </li>
              <li className="text-secondary">
                Yerba Buena, Tucumán, Argentina.
              </li>
            </ul>
          </Col>

          {/* COLUMNA 4: QR AFIP */}
          <Col
            lg={2}
            md={3}
            xs={6}
            className="mb-4 mb-lg-0 d-flex align-items-center justify-content-center justify-content-lg-end"
          >
            <a
              href={arcaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="d-block"
            >
              <img
                src={arcaQr}
                alt="Data Fiscal ARCA"
                className="footer-img"
                style={{ maxWidth: "80px" }}
              />
            </a>
          </Col>
        </Row>

        {/* =========================================
            SECCIÓN LEGAL Y COPYRIGHT
            ========================================= */}
        <hr className="my-4 border-secondary opacity-25" />

        <Row className="align-items-center">
          {/* Copyright y Matrícula */}
          <Col md={6} className="text-center text-md-start mb-3 mb-md-0">
            <p
              className="text-secondary mb-0"
              style={{ fontSize: "var(--fs-body-xs)", lineHeight: "1.5" }}
            >
              &copy; {new Date().getFullYear()} Consultora de Seguridad Ortiz.
              Todos los derechos reservados. <br />
            </p>
          </Col>

          {/* Enlaces Legales */}
          <Col
            md={6}
            className="d-flex flex-wrap justify-content-center justify-content-md-end gap-3 gap-md-4 text-secondary"
            style={{ fontSize: "var(--fs-body-xs)" }}
          >
            <a
              href="https://www.argentina.gob.ar/aaip/datospersonales"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link p-0 text-secondary opacity-75"
              title="Agencia de Acceso a la Información Pública (Ley 25.326)"
            >
              Política de Privacidad
            </a>
            <a
              href="https://www.argentina.gob.ar/produccion/defensadelconsumidor"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link p-0 text-secondary opacity-75"
              title="Dirección Nacional de Defensa del Consumidor"
            >
              Términos del Servicio
            </a>
            <a
              href="https://www.argentina.gob.ar/anticorrupcion/rite"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link p-0 text-secondary opacity-75"
              title="Registro de Integridad y Transparencia para Empresas (Ley 27.401)"
            >
              Compliance y Ética
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
