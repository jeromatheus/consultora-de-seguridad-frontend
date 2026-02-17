import { Row, Col, Container } from "react-bootstrap";
import { FaUserShield, FaGlobeAmericas, FaCertificate } from 'react-icons/fa';

const AboutUsSection = () => {
  const iconSize = 50;
  const iconClass = "me-3 text-primary flex-shrink-0"; 

  return (
    <Container fluid className="px-5">
        <div className="text-center border-top border-bottom text-white my-5">
            <h2 className="py-2">El Valor de la Experiencia Certificada</h2>
            <div className="py-2 border-top">
              <h3>"La seguridad no es un servicio, es una ciencia de precisión"</h3>
            </div>
        </div>    
      
      <Row className="mt-5">
        <Col xs={4} className="mb-4 mb-md-0">
          <div className="d-flex align-items-center justify-content-center">
            <FaUserShield size={iconSize} className={iconClass} />
            <h6 className="mb-0 text-start text-white">
              Veteranos de Fuerzas Especiales
            </h6>
          </div>
        </Col>

        <Col xs={4} className="mb-4 mb-md-0">
          <div className="d-flex align-items-center justify-content-center">
            <FaGlobeAmericas size={iconSize} className={iconClass} />
            <h6 className="mb-0 text-start text-white">
              Misiones ONU en Zonas de Conflicto
            </h6>
          </div>
        </Col>

        <Col xs={4} className="mb-4">
          <div className="d-flex align-items-center justify-content-center">
            <FaCertificate size={iconSize} className={iconClass} />
            <h6 className="mb-0 text-start text-white">
              Certificaciones Internacionales
            </h6>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUsSection;