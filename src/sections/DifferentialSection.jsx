import { Row, Col } from "react-bootstrap";
import { FaUserShield, FaCertificate, FaFileShield } from "react-icons/fa6";

const DifferentialSection = () => {
  const iconSize = 60;
  const iconClass = "mb-3 text-primary";

  return (
    <div className="section-container">
      {/* <div className="text-center border-top border-bottom text-white my-5">
        <h2 className="py-2">
          Compromiso Legal y Ético
        </h2>
      </div> */}
      <div className="section-container-header">
        <h2 className="section-title">
          Nuestro Diferencial
        </h2>
      </div>      

      <Row className="text-center justify-content-center">
        <Col xs={4} className="mb-4 mb-md-0">
          <FaUserShield size={iconSize} className={iconClass} />
          <h5 className="text-white fw-bold text-uppercase px-4">
            Ex-Fuerzas Armadas / ONU
          </h5>
        </Col>

        <Col xs={4} className="mb-4 mb-md-0">
          <FaCertificate size={iconSize} className={iconClass} />
          <h5 className="text-white fw-bold text-uppercase px-4">
            Certificaciones de Servicio
          </h5>
        </Col>

        <Col xs={4}>
          <FaFileShield size={iconSize} className={iconClass} />
          <h5 className="text-white fw-bold text-uppercase px-4">
            Ley 25.326 de Seguridad de Datos
          </h5>
        </Col>
      </Row>
    </div>
  );
};

export default DifferentialSection;
