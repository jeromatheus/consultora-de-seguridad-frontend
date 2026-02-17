import { Row, Col, Card } from "react-bootstrap";

const ServicesSection = () => {
  const services = [
    {
      title: "PROTECCIÓN PERSONAL DE ALTO PERFIL",
      text: "Seguridad ejecutiva para líderes y personalidades.",
      img: "https://placehold.co/600x400/1a1a1a/FFF?text=Protección+Personal",
    },
    {
      title: "CUSTODIA Y LOGÍSTICA DE ACTIVOS CRÍTICOS",
      text: "Transporte seguro de valores empresariales.",
      img: "https://placehold.co/600x400/1a1a1a/FFF?text=Custodia+Logística",
    },
    {
      title: "CAPACITACIÓN TÁCTICA ESPECIALIZADA",
      text: "Entrenamiento avanzado para fuerzas especiales.",
      img: "https://placehold.co/600x400/1a1a1a/FFF?text=Capacitación+Táctica",
    },
    {
      title: "GESTIÓN DE INFORMACIÓN Y ANÁLISIS",
      text: "Inteligencia estratégica para decisiones clave.",
      img: "https://placehold.co/600x400/1a1a1a/FFF?text=Gestión+Información",
    },
  ];

  return (
    <div>
      <div className="section-container-header">
        <h2 className="section-title">SERVICIOS</h2>
      </div>
      <Row className="g-4">
        {services.map((service, index) => (
          <Col xs={12} md={6} lg={3} key={index}>
            <Card className="h-100 text-center">
              <Card.Img
                variant="top"
                src={service.img}
                alt={service.title}
                //   style={{ objectFit: 'cover', height: '200px', opacity: 0.8 }}
              />
              <Card.Body className="d-flex flex-column justify-content-center">
                <Card.Title className="fs-6">{service.title}</Card.Title>
                <hr />
                <Card.Text>{service.text}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ServicesSection;