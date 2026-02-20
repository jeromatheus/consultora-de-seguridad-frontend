import { Row, Col, Container } from "react-bootstrap";
import styles from "./ServicesSection.module.css";

const ServicesSection = () => {
  const services = [
    {
      title: "Protección Personal de Alto Perfil",
      description:
        "Despliegue de anillos de seguridad para ejecutivos, diplomáticos y personalidades en entornos de riesgo. Implementamos protocolos de extracción, contravigilancia y movilidad blindada bajo estándares militares internacionales.",
      img: "https://placehold.co/600x400/1a1a1a/FFF?text=Protección+Personal",
    },
    {
      title: "Custodia y Logística de Activos Críticos",
      description:
        "Aseguramiento de la cadena de suministro y transporte de valores. Utilizamos tecnología de rastreo satelital en tiempo real y equipos de respuesta rápida para mitigar riesgos de intercepción en rutas hostiles.",
      img: "https://placehold.co/600x400/1a1a1a/FFF?text=Custodia+Logística",
    },
    {
      title: "Capacitación Táctica Especializada",
      description:
        "Programas de entrenamiento avanzado en tiro táctico, combate en espacios cerrados (CQB) y medicina de combate. Formación diseñada por veteranos de fuerzas especiales para equipos de seguridad corporativa y estatal.",
      img: "https://placehold.co/600x400/1a1a1a/FFF?text=Capacitación+Táctica",
    },
    {
      title: "Gestión de Información y Análisis",
      description:
        "Servicios de inteligencia estratégica y auditorías de vulnerabilidad. Analizamos amenazas híbridas y ciberseguridad para blindar la toma de decisiones críticas y la integridad de la información empresarial.",
      img: "https://placehold.co/600x400/1a1a1a/FFF?text=Gestión+Información",
    },
  ];

  return (
    <>
      <div className="section-header">
        <h2 className="section-title">SERVICIOS</h2>
        <h3 className="section-subtitle">
          "La seguridad no es un servicio, es una ciencia de precisión"
        </h3>
      </div>

      <div className={styles.servicesWrapper}>
        {services.map((service, index) => {
          const isEven = index % 2 === 0;

          return (
            <Row
              key={index}
              className={`mb-4 g-0 gy-5 gy-md-0 ${isEven ? "" : "flex-md-row-reverse"}`}>
              {/* COLUMNA IMAGEN (4 COLS) */}
              <Col md={4} className={styles.imgCol}>
                <div className={styles.imageFrame}>
                  <img
                    src={service.img}
                    alt={service.title}
                    className={styles.serviceImage}
                  />
                  <div className={styles.imageOverlay}></div>
                </div>
              </Col>

              {/* COLUMNA TEXTO (8 COLS) */}
              <Col
                md={8}
                className={`${styles.textCol} ${isEven ? "ps-md-5" : "pe-md-5"}`}
              >
                <div className={isEven ? "" : "text-md-end"}>
                  <h4
                    className={`${styles.serviceTitle} silver-metallic text-uppercase`}
                  >
                    {service.title}
                  </h4>
                  <div
                    className={`${styles.separator} ${isEven ? "" : "ms-md-auto"}`}
                  ></div>
                  <p className={styles.serviceDescription}>
                    {service.description}
                  </p>
                </div>
              </Col>
            </Row>
          );
        })}
      </div>
    </>
  );
};

export default ServicesSection;