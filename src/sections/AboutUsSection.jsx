import { useState } from "react";
import { Row, Col } from "react-bootstrap";
import onuLogo from "../assets/onu_logo.png";
import certificationLogo from "../assets/international_certification_logo.png";
import special_forces_logo from "../assets/special_forces_logo.png";
import styles from "./AboutUsSection.module.css";

const AboutUsSection = () => {
  const [activeCards, setActiveCards] = useState([]);

  const cardsData = [
    {
      image: special_forces_logo,
      title: "Veteranos de Fuerzas Especiales",
      items: [
        "Operaciones de Alta Complejidad",
        "Especialistas en Contraterrorismo Urbano",
        "Instrucción Avanzada en Tácticas de Defensa",
        "Gestión de Seguridad en Entornos Hostiles"
      ],
    },
    {
      image: onuLogo,
      title: "Misiones ONU en Zonas de Conflicto",
      items: [
        "Misión MINURSO, Sahara Occidental (1990)",
        "Operaciones de Paz UNPROFOR, Balcanes (1992)",
        "Misión de Estabilización MINUSTAH, Haití (2000)",
        "Protocolos Internacionales de Protección Civil (2011)"
      ],
    },
    {
      image: certificationLogo,
      title: "Certificaciones Internacionales",
      items: [
        "Certificación ISO 31000 Gestión de Riesgos",
        "Estándares ANSI/ASIS en Seguridad Privada",
        "Diplomado en Inteligencia Estratégica",
        "Auditoría en Protección de Activos Críticos"
      ],
    },
  ];

  const handleFlip = (index) => {
    setActiveCards((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <>
      <div className="section-header">
        <h2 className="section-title">Nuestra Trayectoria</h2>
      </div>

      <Row className="mt-5">
        {cardsData.map((card, index) => {
          const isFlipped = activeCards.includes(index);

          return (
            <Col key={index} xs={12} md={4} className="mb-4">
              <div
                className={`${styles.flipCard} ${isFlipped ? styles.flipped : ""}`}
                onClick={() => handleFlip(index)}
              >
                <div className={styles.flipCardInner}>
                  
                  {/* FRONT: Logo y Título */}
                  <div className={styles.flipCardFront}>
                    <img 
                      src={card.image} 
                      alt={card.title}
                      className={`mb-3 ${styles.iconClass}`}
                    />
                    <h5 className="silver-metallic">{card.title}</h5>
                  </div>

                  {/* BACK: Lista tipo CV */}
                  <div className={styles.flipCardBack}>
                    <ul className={styles.cvList}>
                      {card.items.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>

                </div>
              </div>
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default AboutUsSection;