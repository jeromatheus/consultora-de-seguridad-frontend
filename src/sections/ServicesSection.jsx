import { Row, Col } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";
import styles from "./ServicesSection.module.css";

const ServicesSection = () => {
  const services = [
    {
      title: "Protección Personal de Alto Perfil",
      description: "Despliegue de anillos de seguridad para ejecutivos, diplomáticos y personalidades en entornos de riesgo. Implementamos protocolos de extracción, contravigilancia y movilidad blindada.",
      features: ["Custodia Ejecutiva 24/7", "Análisis de Rutas Seguras", "Conductores de Seguridad Evasiva"],
      billingType: "Arancel por hora",
      minPrice: "$15.000,00",
      img: "https://placehold.co/600x450/1a1a1a/FFF?text=Protección+Personal",
    },
    {
      title: "Custodia y Logística de Activos Críticos",
      description: "Aseguramiento de la cadena de suministro y transporte de valores. Utilizamos tecnología de rastreo satelital y equipos de respuesta rápida para mitigar riesgos en rutas hostiles.",
      features: ["Monitoreo Satelital Real-Time", "Equipos de Reacción Táctica", "Blindaje de Carga Certificado"],
      billingType: "Arancel por kilómetro / escala",
      minPrice: "$45.000,00",
      img: "https://placehold.co/600x450/1a1a1a/FFF?text=Custodia+Logística",
    },
    {
      title: "Capacitación Táctica Especializada",
      description: "Programas de entrenamiento avanzado en tiro táctico y combate en espacios cerrados (CQB). Formación diseñada por veteranos para fuerzas especiales y equipos corporativos.",
      features: ["Tiro Táctico Avanzado", "Medicina de Combate (TCCC)", "Combate en Espacios Cerrados"],
      billingType: "Arancel por jornada / cursante",
      minPrice: "$25.000,00",
      img: "https://placehold.co/600x450/1a1a1a/FFF?text=Capacitación+Táctica",
    },
    {
      title: "Gestión de Información y Análisis",
      description: "Servicios de inteligencia estratégica y auditorías de vulnerabilidad. Analizamos amenazas híbridas para blindar la toma de decisiones críticas.",
      features: ["Inteligencia de Fuentes Abiertas", "Auditorías de Riesgo Físico", "Ciberinteligencia Preventiva"],
      billingType: "Honorarios por auditoría",
      minPrice: "$120.000,00",
      img: "https://placehold.co/600x450/1a1a1a/FFF?text=Gestión+Información",
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

      <div>
        {services.map((service, index) => {
          const isEven = index % 2 === 0;

          return (
            <Row
              key={index}
              className={`${styles.serviceRow} ${isEven ? "" : "flex-md-row-reverse"}`}
            >
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
                  <h4 className={styles.serviceTitle}>
                    {service.title}
                  </h4>
                  <div className={`${styles.separator} ${isEven ? "" : "ms-md-auto"}`}></div>
                  {/* Resumen General */}
                  <p className={styles.serviceDescription}>
                    {service.description}
                  </p>
                  {service.features.map((feature, fIndex) => (
                    <div key={fIndex} className={styles.featureItem}>
                      <FaCheck className={styles.checkIcon} />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                {/* Información Comercial - Posicionada al fondo */}
                <div className={styles.commercialWrapper}>
                  <small className={styles.commercialText}>
                    Tipo de Canon: {service.billingType}
                  </small>
                  <small className={styles.commercialText}>
                    Base imponible desde: {service.minPrice}
                  </small>
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