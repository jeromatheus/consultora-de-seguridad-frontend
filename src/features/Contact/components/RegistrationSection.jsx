import { Container, Row, Col } from "react-bootstrap";
import PreRegistrationForm from "./PreRegistrationForm";

const RegistrationSection = () => {
  return (
    <section id="inscripcion" className="py-5 mt-3">
      <Container>
        <Row className="justify-content-center">
          <Col lg={8} md={10}>
            <PreRegistrationForm />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default RegistrationSection;