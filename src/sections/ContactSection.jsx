import { Row, Col, Button, Container } from 'react-bootstrap';
import { FaWhatsapp, FaEnvelope } from 'react-icons/fa6';

const ContactSection = () => {
  const whatsappNumber = "5491112345678"; 
  const emailAddress = "contacto@seguridadortiz.com";
  const whatsappMessage = "Hola, me gustaría recibir más información sobre sus servicios de seguridad.";

  return (
      <Container fluid className="px-5">
        <div className="text-center border-top border-bottom text-white my-5">
          <h2 className="py-2">
            Contactanos
          </h2>
        </div>

        <Row className="justify-content-center g-4">
          {/* BOTÓN WHATSAPP */}
          <Col md={5} lg={4}>
            <div className="d-grid">
              <Button 
                variant="success" 
                size="lg" 
                className="py-3 d-flex align-items-center justify-content-center gap-2"
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp size={28} />
                <span>Contactar por WhatsApp</span>
              </Button>
            </div>
          </Col>

          {/* BOTÓN EMAIL */}
          <Col md={5} lg={4}>
            <div className="d-grid">
              <Button 
                size="lg" 
                className="py-3 d-flex align-items-center justify-content-center gap-2"
                href={`mailto:${emailAddress}`}
              >
                <FaEnvelope size={28} />
                <span>Enviar Correo Electrónico</span>
              </Button>
              <small className="text-center text-muted mt-2">
                {emailAddress}
              </small>
            </div>
          </Col>

        </Row>
      </Container>
  );
}

export default ContactSection;