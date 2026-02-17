import { Row, Col, Container } from "react-bootstrap";
import { FaUserShield, FaGlobeAmericas, FaCertificate, FaFileContract } from 'react-icons/fa';

const DifferentialSection = () => {
  const iconSize = 50;
  const iconClass = "mb-3 text-primary";

  return (
    <Container>
        <div className="text-center border-top border-bottom border-dark">
            <h2 className="py-2">El Valor de la Experiencia Certificada</h2>
            <div className="py-2 border-top border-dark">
              <h3>"La seguridad no es un servicio, es una ciencia de precisión"</h3>
            </div>
        </div>    
      <Row className="text-center mt-5">
        <Col xs={6} md={3} className="mb-4 mb-md-0">
          <FaUserShield size={iconSize} className={iconClass} />
          <h6 className="fw-bold px-3">Veteranos de Fuerzas Especiales</h6>
        </Col>
        <Col xs={6} md={3} className="mb-4 mb-md-0">
          <FaGlobeAmericas size={iconSize} className={iconClass} />
          <h6 className="fw-bold px-3">Misiones ONU en Zonas de Conflicto</h6>
        </Col>
        <Col xs={6} md={3} className="mb-4">
          <FaCertificate size={iconSize} className={iconClass} />
          <h6 className="fw-bold px-3">Certificaciones Internacionales</h6>
        </Col>
        <Col xs={6} md={3} className="mb-4">
          <FaFileContract size={iconSize} className={iconClass} />
          <h6 className="fw-bold px-3">Ley 25.326 de Protección de Datos</h6>
        </Col>
      </Row>
    </Container>
  );
};

export default DifferentialSection;
