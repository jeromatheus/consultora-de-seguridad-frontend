import { Container, Row, Col } from "react-bootstrap";
import PreRegistrationForm from "./RegistrationForm";

const RegistrationSection = () => {
  return (
    <section className="px-4 px-lg-5">
      <div className="section-header">
        <h2 className="section-title">Formulario de Inscripción</h2>
      </div>      
      <Container fluid className="px-0 px-lg-5">
        <Row className="justify-content-center">
          <Col lg={4} md={2}>
            <div className="border border-danger w-100 h-100"></div>
          </Col>          
          <Col lg={8} md={10}>
            <PreRegistrationForm />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default RegistrationSection;