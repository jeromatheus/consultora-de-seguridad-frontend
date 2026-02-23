import { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { FaRotateLeft } from "react-icons/fa6"; 
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
        "Instrucción Avanzada en Tácticas de Defensa",
        "Veteranos de Malvinas argentinas"
      ],
    },
    {
      image: onuLogo,
      title: "Misiones ONU en Zonas de Conflicto",
      items: [
        "UNIKOM - Misión de Observación de las Naciones Unidas para el Irak y Kuwait (1991)",
        "UNPROFOR - Fuerza de Protección de las Naciones Unidas en Croacia y Bosnia-Herzegovina (1992 - 1993)",
        "UNFICYP - Fuerza de la ONU para el Mantenimiento de la Paz en Chipre (1993)",
        "UNMIH - Misión de Naciones Unidas en Haití (1995)",
        "UNMIK - Misión de Administración Provisional de las Naciones Unidas en Kosovo (1999)",
        "MINUSTAH - Misión de Estabilización de las Naciones Unidas en Haití (2004 - 2008)"
      ],
    },
    {
      image: certificationLogo,
      title: "Certificaciones Internacionales",
      items: [
        "Diplomatura XXX en XXX (XXX)",
        "Diplomatura XXX en XXX (XXX)",
        "Diplomatura XXX en XXX (XXX)",
        "Diplomatura XXX en XXX (XXX)",
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
                    <div className={styles.backArrowWrapper}>
                      <FaRotateLeft size={18} />
                    </div>
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