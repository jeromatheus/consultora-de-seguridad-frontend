import { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { FaUserShield, FaGlobeAmericas, FaCertificate } from "react-icons/fa";
import styles from "./AboutUsSection.module.css";

const AboutUsSection = () => {
  const [activeCards, setActiveCards] = useState([]);
  const iconSize = 50;

  const cardsData = [
    {
      icon: "FaUserShield",
      title: "Veteranos de Fuerzas Especiales",
      description:
        "Personal con experiencia real en operaciones especiales y gestión de seguridad estratégica.",
    },
    {
      icon: FaGlobeAmericas,
      title: "Misiones ONU en Zonas de Conflicto",
      description:
        "Participación activa en operaciones internacionales de mantenimiento de paz y gestión de crisis.",
    },
    {
      icon: FaCertificate,
      title: "Certificaciones Internacionales",
      description:
        "Formación certificada bajo estándares internacionales en seguridad, defensa y análisis estratégico.",
    },
  ];

  const handleFlip = (index) => {
    setActiveCards((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index] 
    );
  };

  return (
    <>
      <div className="section-header">
        <h2 className="section-title">¿Quiénes Somos?</h2>
      </div>

      <Row className="mt-5">
        {cardsData.map((card, index) => {
          const IconComponent = card.icon;
          const isFlipped = activeCards.includes(index);

          return (
            <Col key={index} xs={12} md={4} className="mb-4">
              <div
                className={`${styles.flipCard} ${
                  isFlipped ? styles.flipped : ""
                }`}
                onClick={() => handleFlip(index)}
              >
                <div className={styles.flipCardInner}>
                  
                  {/* FRONT */}
                  <div className={styles.flipCardFront}>
                    <IconComponent
                      size={iconSize}
                      className={styles.iconClass}
                    />
                    <h5 className="silver-metallic">{card.title}</h5>
                  </div>

                  {/* BACK */}
                  <div className={styles.flipCardBack}>
                    <p>{card.description}</p>
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