import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";
import { welcome_slides } from "../constants/welcome";
import { useScrollTo } from "../hooks/useScrollTo";
import { SECTION_IDS } from "../constants/routes";
import clsx from "clsx";
import styles from "./StartSection.module.css";

function StartSection() {
  const scrollTo = useScrollTo(80);

  return (
    <section id="start">
      <Carousel
        fade
        controls={false}
        indicators
        interval={5000}
        pause={false}
        className={clsx(styles.heroCarousel)}
      >
        {welcome_slides.map((slide) => (
          <Carousel.Item key={slide.id} className={clsx(styles.carouselItem)}>
            <img
              className={clsx(styles.heroImage)}
              src={slide.image}
              alt={slide.title}
            />

            <div className={clsx(styles.overlay)} />

            <div className={clsx(styles.carouselCaptionFix)}>
              <div className={clsx(styles.contentWrapper)}>
                <h1 className={clsx(styles.title)}>{slide.title}</h1>
                <p className={clsx(styles.subtitle)}>{slide.subtitle}</p>
                <Button
                  size="lg"
                  className={clsx("btn-tactical")}
                  onClick={() => scrollTo(SECTION_IDS.CONTACT)}
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