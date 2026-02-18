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
      description:
        "Personal con experiencia real en operaciones especiales y gestión de seguridad estratégica.",
    },
    {
      image: onuLogo, 
      title: "Misiones ONU en Zonas de Conflicto",
      description:
        "Participación activa en operaciones internacionales de mantenimiento de paz y gestión de crisis.",
    },
    {
      image: certificationLogo, 
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
                    <img 
                      src={card.image} 
                      alt={card.title}
                      className={`mb-3 ${styles.iconClass}`}
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