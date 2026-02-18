import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";
import styles from "./StartSection.module.css";
import { useScrollTo } from "../hooks/useScrollTo";
import hero1 from "../assets/hero_1.png";

function StartSection() {
  const scrollTo = useScrollTo(80);

  const slides = [
    {
      id: 1,
      image: hero1, 
      title: "Capacidad Estratégica y Despliegue Táctico Global",
      subtitle:
        "Consultoría de alta especialización integrada por profesionales de las Fuerzas Armadas y Organismos Internacionales (ONU).",
    },
    {
      id: 2,
      image: "https://placehold.co/1920x900/1a1a1a/FFF?text=2",
      title: "Protección de Activos Críticos y Logística",
      subtitle:
        "Soluciones integrales en seguridad personal, custodia de valores y prevención de riesgos corporativos.",
    },
    {
      id: 3,
      image: "https://placehold.co/1920x900/1a1a1a/FFF?text=3",
      title: "Análisis de Información para la Toma de Decisiones",
      subtitle:
        "Gestión de crisis y análisis de inteligencia estratégica para anticiparse a las amenazas.",
    },
  ];

  return (
    <>
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
                  className="btn-tactical mt-4"
                  onClick={() => scrollTo("contacto")}
                >
                  Agendar Consulta de Diagnóstico
                </Button>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
}

export default StartSection;