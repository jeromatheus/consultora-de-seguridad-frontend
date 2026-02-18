import { Row, Col, Card } from "react-bootstrap";
import styles from "./ServicesSection.module.css";

const ServicesSection = () => {
  const services = [
    {
      title: "Protección Personal de Alto Perfil",
      text: "Seguridad ejecutiva para líderes y personalidades.",
      img: "https://placehold.co/600x600/1a1a1a/FFF?text=Protección+Personal",
    },
    {
      title: "Custodia y Logística de Activos Críticos",
      text: "Transporte seguro de valores empresariales.",
      img: "https://placehold.co/600x600/1a1a1a/FFF?text=Custodia+Logística",
    },
    {
      title: "Capacitación Táctica Especializada",
      text: "Entrenamiento avanzado para fuerzas especiales.",
      img: "https://placehold.co/600x600/1a1a1a/FFF?text=Capacitación+Táctica",
    },
    {
      title: "Gestión de Información y Análisis",
      text: "Inteligencia estratégica para decisiones clave.",
      img: "https://placehold.co/600x600/1a1a1a/FFF?text=Gestión+Información",
    },
  ];

  return (
    <>
      <div className="section-header">
        <h2 className="section-title">SERVICIOS</h2>
      </div>

      <Row className="g-4">
        {services.map((service, index) => (
          <Col xs={12} md={6} lg={3} key={index}>
            <Card className={`${styles.serviceCard} h-100`}>
              <Card.Img
                variant="top"
                src={service.img}
                alt={service.title}
                className={styles.cardImage}
              />
              <Card.Body className={styles.cardBody}>
                <Card.Title className={styles.cardTitle}>
                  {service.title}
                </Card.Title>
                <hr className={styles.separator} />
                <Card.Text className={`${styles.cardText} silver-metallic`}>
                  {service.text}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default ServicesSection;
