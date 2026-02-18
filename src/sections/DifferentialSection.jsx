import { Row, Col } from "react-bootstrap";
import { FaUserShield, FaCertificate, FaFileShield } from "react-icons/fa6";

const DifferentialSection = () => {
  const iconSize = 60;
  const iconClass = "mb-3";
  const link = "https://www.argentina.gob.ar/normativa/nacional/ley-25326-64790/texto";

  return (
    <>
      <div className="section-header text-center mb-5">
        <h2 className="section-title text-white">Nuestro Diferencial</h2>
      </div>

      <Row className="text-center justify-content-center">
        
        <Col xs={12} md={4} className="mb-4 d-flex flex-column align-items-center">
          <FaUserShield size={iconSize} className={iconClass} />
          <h5 className="silver-metallic text-center">
            Ex-Fuerzas Armadas / ONU
          </h5>
        </Col>

        <Col xs={12} md={4} className="mb-4 d-flex flex-column align-items-center">
          <FaCertificate size={iconSize} className={iconClass} />
          <h5 className="silver-metallic text-center">
            Certificaciones de Servicio
          </h5>
        </Col>

        <Col xs={12} md={4} className="mb-4 d-flex flex-column align-items-center">
          <FaFileShield size={iconSize} className={iconClass} />
          <h5 className="silver-metallic text-center">
            Ley 25.326 de Seguridad de Datos
          </h5>
        </Col>

      </Row>
    </>
  );
};

export default DifferentialSection;
