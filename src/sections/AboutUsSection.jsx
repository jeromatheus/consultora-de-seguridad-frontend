import React from "react";
import { Row, Col } from "react-bootstrap";
import { FaShieldAlt } from "react-icons/fa";
import { aboutUs } from "../constants/aboutUs";
import styles from "./AboutUsSection.module.css";

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
          <Col key={card.title} lg={4} md={12}>
            <div className={styles.aboutCard}>
              <div className={styles.aboutCardHeader}>
                <div className={styles.aboutCardImage}>
                  <img
                    src={card.image}
                    alt={card.title}
                    className={styles.aboutCardLogo}
                  />
                </div>

                <div className={styles.aboutCardText}>
                  {card.subtitle && (
                    <span className={styles.aboutCardTag}>
                      {card.subtitle}
                    </span>
                  )}
                  <h4 className={styles.aboutCardTitle}>
                    {card.title}
                  </h4>
                </div>
              </div>

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
            </div>
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default AboutUsSection;