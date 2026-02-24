import { useState, useCallback } from "react";
import { Row, Col } from "react-bootstrap";
import { FaShieldAlt } from "react-icons/fa";
import { aboutUs } from "../constants/aboutUs";
import clsx from "clsx";
import styles from "./AboutUsSection.module.css";

const AboutUsSection = () => {
  const [flippedCards, setFlippedCards] = useState(() => new Set());

  const handleFlip = useCallback((id) => {
    setFlippedCards((prev) => {
      const newSet = new Set(prev);
      newSet.has(id) ? newSet.delete(id) : newSet.add(id);
      return newSet;
    });
  }, []);

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
          const isFlipped = flippedCards.has(card.id);

          return (
            <Col lg={4} md={12} key={card.id}>
              <div
                className={styles.flipCard}
                onClick={() => handleFlip(card.id)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    handleFlip(card.id);
                  }
                }}
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
                          loading="lazy"
                        />
                      </div>

                      <h4
                        className={clsx("text-silver", styles.aboutCardTitle)}
                      >
                        {card.title}
                      </h4>
                    </div>

                    <span className={styles.cardToggleButton}>Ver más</span>
                  </div>

                  {/* Back */}
                  <div className={styles.flipCardBack}>
                    <h4
                      className={clsx("text-silver", styles.aboutCardTitleBack)}
                    >
                      {card.title}
                    </h4>

                    <div className={styles.aboutCardBody}>
                      <ul
                        className={clsx(
                          styles.aboutCardList,
                          "custom-scrollbar",
                        )}
                      >
                        {card.items.map((item, idx) => (
                          <li
                            key={`${card.id}-${idx}`}
                            className={styles.aboutCardItem}
                          >
                            <FaShieldAlt className="global-icon mt-1" />
                            {item}
                          </li>
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