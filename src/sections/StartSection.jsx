import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import styles from "./StartSection.module.css";

function StartSection() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.overlay}></div>
      <Container>
        <div className={styles.contentWrapper}>
          <h1 className={styles.title}>
            Capacidad Estratégica y Despliegue Táctico de Nivel Global
          </h1>
          <p className={styles.subtitle}>
            Consultoría de alta especialización integrada por profesionales de 
            las Fuerzas Armadas y Organismos Internacionales (ONU). Soluciones 
            integrales en seguridad personal, logística de valores y análisis de
            información para la toma de decisiones.
          </p>
          <Button size="lg" className="btn-tactical">
            Agendar Consulta de Diagnóstico de Riesgos
          </Button>
        </div>
      </Container>
    </section>
  );
}

export default StartSection;
