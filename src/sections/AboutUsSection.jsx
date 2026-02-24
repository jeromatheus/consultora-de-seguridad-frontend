import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { FaShieldAlt } from "react-icons/fa";
import { aboutUs } from "../constants/aboutUs";
import clsx from "clsx";
import styles from "./AboutUsSection.module.css";

const AboutUsSection = () => {
  const [flippedCards, setFlippedCards] = useState([]);

  const handleFlip = (title) => {
    setFlippedCards((prev) =>
      prev.includes(title)
        ? prev.filter((t) => t !== title) 
        : [...prev, title] 
    );
  };

  return (
    <section id="nosotros" className="px-3 px-lg-5">
      <div className="section-header">
        <h2 className="section-title">Nuestra Trayectoria</h2>
        <h3 className="section-subtitle">
          "Más de 20 años de experiencia continua en Seguridad"
        </h3>
      </div>

      <Row className="gy-5">
        {aboutUs.map((card) => {
          const isFlipped = flippedCards.includes(card.title);

          return (
            <Col lg={4} md={12} key={card.title}>
              <div
                className={styles.flipCard}
                onClick={() => handleFlip(card.title)}
              >
                <div
                  className={clsx(styles.flipCardInner, {
                    [styles.flipped]: isFlipped,
                  })}
                >
                  {/* Front */}
                  <div
                    className={clsx(styles.flipCardFront, "hover-light-scan")}
                  >
                    <div className={styles.cardContentWrapper}>
                      <div className={styles.aboutCardImage}>
                        <img
                          src={card.image}
                          alt={card.title}
                          className={styles.aboutCardLogo}
                        />
                      </div>

                      <h4
                        className={clsx(
                          "silver-metallic",
                          styles.aboutCardTitle,
                        )}
                      >
                        {card.title}
                      </h4>
                    </div>

                    <span className={styles.cardToggleButton}>Ver más</span>
                  </div>

                  {/* Back */}
                  <div className={styles.flipCardBack}>
                    <h4
                      className={clsx(
                        "silver-metallic",
                        styles.aboutCardTitleBack,
                      )}
                    >
                      {card.title}
                    </h4>

                    <div className={styles.aboutCardBody}>
                      <ul className={clsx(styles.aboutCardList, "custom-scrollbar")}>
                        {card.items.map((item, idx) => (
                          <React.Fragment key={`${card.title}-${idx}`}>
                            <li className={styles.aboutCardItem}>
                              <FaShieldAlt className="global-icon" />
                              {item}
                            </li>
                            {idx < card.items.length - 1 && (
                              <div className={styles.aboutCardDivider} />
                            )}
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
        })}
      </Row>
    </section>
  );
};

export default AboutUsSection;