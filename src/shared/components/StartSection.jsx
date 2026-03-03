import Carousel from "react-bootstrap/Carousel";
import clsx from "clsx";
import styles from "./StartSection.module.css";

function StartSection({ slides, sectionId, children, heroHeight = "100vh" }) {
  return (
    <section id={sectionId} style={{ height: heroHeight } }>
      <Carousel
        fade
        controls={false}
        indicators
        interval={5000}
        pause={false}
        className={clsx("position-relative w-100 overflow-hidden", styles.heroCarousel)}
        style={{height: heroHeight}}
      >
        {slides.map((slide) => (
          <Carousel.Item key={slide.id} className={clsx("position-relative w-100", styles.carouselItem)}>
            <img
              className={clsx(styles.heroImage)}
              src={slide.image}
              alt={slide.title}
              style={{height: heroHeight}}
            />

            <div className={clsx("position-absolute top-0 start-0 w-100 h-100", styles.overlay)} />

            <div className={clsx("position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-end align-items-center", styles.carouselCaptionFix)}>
              <div className={clsx(styles.contentWrapper, "text-center d-flex flex-column align-items-center")}>
                <h1 className={clsx(styles.title, "text-uppercase m-0 fw-bold")}>{slide.title}</h1>
                <p className={clsx(styles.subtitle, "m-0")}>{slide.subtitle}</p>
                {children}
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </section>
  );
}

export default StartSection;