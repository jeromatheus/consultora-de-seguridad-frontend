import { Row, Col, Form, Button } from "react-bootstrap";

const ContactForm = () => {
  return (
    <div className="p-4 bg-black border rounded shadow">
      <Form>
        <Row className="mb-3">
          <Col md={6}>
            <Form.Group controlId="formNombre">
              <Form.Label>Nombre</Form.Label>
              <Form.Control type="text" placeholder="Ingrese su nombre" />
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group controlId="formTelefono">
              <Form.Label>Teléfono</Form.Label>
              <Form.Control type="tel" placeholder="Ingrese su teléfono" />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col>
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Ingrese su email" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="formServicio">
              <Form.Label>Servicio de Interés</Form.Label>
              <Form.Select>
                <option>Seleccione un servicio</option>
                <option>Seguridad Física</option>
                <option>Custodia Personal</option>
                <option>Monitoreo</option>
                <option>Otro</option>
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-4">
          <Col>
            <Form.Group controlId="formMensaje">
              <Form.Label>Mensaje</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                placeholder="Escriba su mensaje"
              />
            </Form.Group>
          </Col>
        </Row>

        <div className="d-grid">
          <Button variant="warning" size="lg">
            Enviar Consulta
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default ContactForm;