import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { FaShieldAlt } from "react-icons/fa";
import { aboutUs } from "../constants/aboutUs";
import styles from "./AboutUsSection.module.css";

const FlipCardItem = ({ card }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <Col lg={4} md={12}>
      <div className={styles.flipCard} onClick={handleFlip}>
        <div
          className={`${styles.flipCardInner} ${
            isFlipped ? styles.flipped : ""
          }`}
        >
          <div className={`${styles.flipCardFront} hover-light-scan`}>
            <div className={styles.cardContentWrapper}>
              <div className={styles.aboutCardImage}>
                <img
                  src={card.image}
                  alt={card.title}
                  className={styles.aboutCardLogo}
                />
              </div>
              <h4 className={`silver-metallic ${styles.aboutCardTitle}`}>
                {card.title}
              </h4>
            </div>
            <span className={styles.cardToggleButton}>Ver más</span>
          </div>

          <div className={styles.flipCardBack}>
              <h4 className={`silver-metallic ${styles.aboutCardTitleBack}`}>
                {card.title}
              </h4>
            <div className={styles.aboutCardBody}>
              <ul className={styles.aboutCardList}>
                {card.items.map((item, idx) => (
                  <React.Fragment key={`${card.title}-${idx}`}>
                    <li className={styles.aboutCardItem}>
                      <FaShieldAlt className={styles.aboutCardIcon} />
                      {item}
                    </li>
                    <div className={styles.aboutCardDivider}></div>
                  </React.Fragment>
                ))}
              </ul>
            </div>
            <span className={styles.cardToggleButton}>Ver menos</span>
          </div>
        </div>
      </div>
    </Col>
  );
};

const AboutUsSection = () => {
  return (
    <section id="nosotros" className="px-3 px-lg-5">
      <div className="section-header">
        <h2 className="section-title">Nuestra Trayectoria</h2>
        <h3 className="section-subtitle">
          "Más de 20 años de experiencia continua en Seguridad"
        </h3>
      </div>

      <Row className="gy-5">
        {aboutUs.map((card) => (
          <FlipCardItem key={card.title} card={card} />
        ))}
      </Row>
    </section>
  );
};

export default AboutUsSection;