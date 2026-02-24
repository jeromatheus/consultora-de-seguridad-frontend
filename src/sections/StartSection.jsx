import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";
import styles from "./StartSection.module.css";
import { useScrollTo } from "../hooks/useScrollTo";
import hero_1 from "../assets/heros/hero_1.png";
import hero_2 from "../assets/heros/hero_2.png";
import hero_3 from "../assets/heros/hero_3.png";

function StartSection() {
  const scrollTo = useScrollTo(80);

  const slides = [
    {
      id: 1,
      image: hero_1, 
      title: "Capacidad Estratégica y Despliegue Táctico Global",
      subtitle:
        "Consultoría de alta especialización integrada por profesionales de las Fuerzas Armadas y Organismos Internacionales (ONU).",
    },
    {
      id: 2,
      image: hero_2,
      title: "Protección de Activos Críticos y Logística",
      subtitle:
        "Soluciones integrales en seguridad personal, custodia de valores y prevención de riesgos corporativos.",
    },
    {
      id: 3,
      image: hero_3,
      title: "Análisis de Información para la Toma de Decisiones",
      subtitle:
        "Gestión de crisis y análisis de inteligencia estratégica para anticiparse a las amenazas.",
    },
  ];

  return (
    <section id="inicio">
      <Carousel
        fade
        controls={false}
        indicators={true}
        interval={5000}
        pause={false}
        className={styles.heroCarousel} 
      >
        {slides.map((slide) => (
          <Carousel.Item key={slide.id} className={styles.carouselItem}>
            <img
              className={styles.heroImage}
              src={slide.image} 
              alt={slide.title}
            />

            <div className={styles.overlay}></div>

            <div className={styles.carouselCaptionFix}>
              <div className={styles.contentWrapper}>
                <h1 className={styles.title}>{slide.title}</h1>
                <p className={styles.subtitle}>{slide.subtitle}</p>
                <Button
                  size="lg"
                  className="btn-tactical"
                  onClick={() => scrollTo("contacto")}
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