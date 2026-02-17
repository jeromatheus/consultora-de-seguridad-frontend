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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris.
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
