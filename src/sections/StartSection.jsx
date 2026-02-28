import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";
import { HashLink } from "react-router-hash-link";
import { scrollWithOffset } from "../utils/scrollUtils";
import { welcome_slides } from "../constants/welcome";
import { SECTION_IDS } from "../constants/routes";
import clsx from "clsx";
import styles from "./StartSection.module.css";

function StartSection() {
  return (
    <section id={SECTION_IDS.START}>
      <Carousel
        fade
        controls={false}
        indicators
        interval={5000}
        pause={false}
        className={clsx("position-relative w-100 overflow-hidden", styles.heroCarousel)}
      >
        {welcome_slides.map((slide) => (
          <Carousel.Item key={slide.id} className={clsx("position-relative w-100", styles.carouselItem)}>
            <img
              className={clsx(styles.heroImage)}
              src={slide.image}
              alt={slide.title}
            />

            <div className={clsx("position-absolute top-0 start-0 w-100 h-100", styles.overlay)} />

            <div className={clsx("position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-end align-items-center", styles.carouselCaptionFix)}>
              <div className={clsx(styles.contentWrapper, "text-center d-flex flex-column align-items-center")}>
                <h1 className={clsx(styles.title, "text-uppercase m-0 fw-bold")}>{slide.title}</h1>
                <p className={clsx(styles.subtitle, "m-0")}>{slide.subtitle}</p>
                <Button
                  as={HashLink}
                  smooth
                  to={`/#${SECTION_IDS.CONTACT}`}
                  scroll={scrollWithOffset}
                  size="lg"
                  className={clsx("btn-tactical")}
                >
                  Agendar Consulta de Diagnóstico
                </Button>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </section>
  );
}

export default StartSection;