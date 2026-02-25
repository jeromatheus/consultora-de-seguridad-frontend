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
  location,
  schedule,
} from "../constants/companyInfo";
import { footerConfig } from "../constants/footer";

function Footer() {
  const scrollTo = useScrollTo(80);

  const openedDays = schedule.filter((d) => !d.isClosed);

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
          <Col
            lg={3}
            md={12}
            className="mb-5 mb-lg-0 d-flex align-items-center justify-content-center justify-content-lg-start"
          >
            <img
              src={footerConfig.logos.desktop}
              alt="Logo Footer"
              className="footer-img d-none d-md-block"
              onClick={() => (window.location.href = "/")}
            />
            <img
              src={footerConfig.logos.mobile}
              alt="Logo Footer"
              className="footer-img d-block d-md-none"
              onClick={() => (window.location.href = "/")}
            />
          </Col>

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

              {openedDays.map((item, index) => (
                <li
                  key={index}
                  className="text-secondary"
                >
                  {item.days}: <span>{item.hours}</span>
                </li>
              ))}

              <li className="text-secondary">
                {location}
              </li>
            </ul>
          </Col>

          <Col
            lg={2}
            md={3}
            xs={6}
            className="mb-4 mb-lg-0 d-flex align-items-center justify-content-center justify-content-lg-end"
          >
            <a
              href={footerConfig.arcaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="d-block"
            >
              <img
                src={footerConfig.arcaQr}
                alt="Data Fiscal ARCA"
                className="footer-img"
                style={{ maxWidth: "80px" }}
              />
            </a>
          </Col>
        </Row>

        <hr className="my-4 border-secondary opacity-25" />

        <Row className="align-items-center">
          <Col md={6} className="text-center text-md-start mb-3 mb-md-0">
            <p
              className="text-secondary mb-0"
              style={{ fontSize: "var(--fs-body-xs)", lineHeight: "1.5" }}
            >
              &copy; {new Date().getFullYear()}{" "}
              {footerConfig.businessInfo.companyName}. Todos los derechos
              reservados.
            </p>
          </Col>

          <Col
            md={6}
            className="d-flex flex-wrap justify-content-center justify-content-md-end gap-3 gap-md-4 text-secondary"
            style={{ fontSize: "var(--fs-body-xs)" }}
          >
            {footerConfig.legalLinks.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="nav-link p-0 text-secondary opacity-75"
                title={link.title}
              >
                {link.label}
              </a>
            ))}
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;