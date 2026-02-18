import { Row, Col, Card } from "react-bootstrap";
import styles from './ServicesSection.module.css';

const ServicesSection = () => {
  const services = [
    {
      title: "PROTECCIÓN PERSONAL DE ALTO PERFIL",
      text: "Seguridad ejecutiva para líderes y personalidades.",
      img: "https://placehold.co/600x600/1a1a1a/FFF?text=Protección+Personal",
    },
    {
      title: "CUSTODIA Y LOGÍSTICA DE ACTIVOS CRÍTICOS",
      text: "Transporte seguro de valores empresariales.",
      img: "https://placehold.co/600x600/1a1a1a/FFF?text=Custodia+Logística",
    },
    {
      title: "CAPACITACIÓN TÁCTICA ESPECIALIZADA",
      text: "Entrenamiento avanzado para fuerzas especiales.",
      img: "https://placehold.co/600x600/1a1a1a/FFF?text=Capacitación+Táctica",
    },
    {
      title: "GESTIÓN DE INFORMACIÓN Y ANÁLISIS",
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
            <Card className={styles.serviceCard}>             
              <Card.Img
                variant="top"
                src={service.img}
                alt={service.title}
                className={styles.cardImage} 
              />
              
              <Card.Body className={styles.cardBody}>
                <div>
                  <Card.Title className={styles.cardTitle}>
                    {service.title}
                  </Card.Title>
                  
                  <hr className={styles.separator} />
                  
                  <Card.Text className={styles.cardText}>
                    {service.text}
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default ServicesSection;