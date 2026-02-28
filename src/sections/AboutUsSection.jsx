import { useState, useCallback } from "react";
import { Row, Col } from "react-bootstrap";
import { FaShieldAlt } from "react-icons/fa";
import { aboutUs } from "../constants/aboutUs";
import { SECTION_IDS } from "../constants/routes";
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
    <section id={SECTION_IDS.ABOUT_US} className="px-3 px-lg-5">
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
                  className={clsx(
                    styles.flipCardInner,
                    "position-relative w-100 h-100 text-center",
                    {
                      [styles.flipped]: isFlipped,
                    },
                  )}
                >
                  {/* Front */}
                  <div
                    className={clsx(
                      styles.flipCardFront,
                      "position-absolute d-flex flex-column w-100 h-100 hover-light-scan align-items-center justify-content-center",
                    )}
                  >
                    <div
                      className={clsx(
                        "d-flex flex-column align-items-center justify-content-center flex-fill",
                      )}
                    >
                      <div className={clsx(styles.aboutCardImage, "mb-3")}>
                        <img
                          src={card.image}
                          alt={card.title}
                          className={styles.aboutCardLogo}
                          loading="lazy"
                        />
                      </div>

                      <h4
                        className={clsx(
                          "text-silver text-uppercase m-0",
                          styles.aboutCardTitle,
                        )}
                      >
                        {card.title}
                      </h4>
                    </div>

                    <span
                      className={clsx(
                        styles.cardToggleButton,
                        "text-uppercase position-absolute",
                      )}
                    >
                      Ver más
                    </span>
                  </div>

                  {/* Back */}
                  <div
                    className={clsx(
                      styles.flipCardBack,
                      "position-absolute d-flex flex-column w-100 h-100 justify-content-center align-items-center text-start",
                    )}
                  >
                    <h4
                      className={clsx(
                        "text-silver pb-3 w-100 text-center text-uppercase",
                        styles.aboutCardTitleBack,
                      )}
                    >
                      {card.title}
                    </h4>

                    <div
                      className={clsx(
                        "d-flex flex-column flex-fill w-100",
                        styles.aboutCardBody,
                      )}
                    >
                      <ul className={clsx("custom-scrollbar px-2 m-0")}>
                        {card.items.map((item, idx) => (
                          <li
                            key={`${card.id}-${idx}`}
                            className={clsx(
                              styles.aboutCardItem,
                              "d-flex gap-3 align-items-start py-2",
                            )}
                          >
                            <FaShieldAlt className="global-icon mt-1" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <span
                      className={clsx(
                        styles.cardToggleButton,
                        "text-uppercase position-absolute",
                      )}
                    >
                      Ver menos
                    </span>
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