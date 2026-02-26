import { Container, Row, Col, Badge } from "react-bootstrap";
import { FaMapLocationDot, FaLocationCrosshairs } from "react-icons/fa6";
import { coverageAreas, coverageMessage } from "../constants/companyInfo";
import { useCoverageMap } from "../hooks/useCoverageMap";
import clsx from "clsx";
import styles from "./CoverageAreaSection.module.css";

const CoverageAreaSection = () => {
  const { selectedArea, setSelectedArea, mapSrc, isActive } = useCoverageMap();

  return (
    <section id="covertura" className="px-4 px-lg-5">
      <Container
        fluid="sm"
        className={clsx(styles.coverageContainer, "p-3 p-lg-5")}
      >
        <div className="d-flex justify-content-center gap-3">
          <FaMapLocationDot size={32} />
          <h2 className="text-uppercase fw-semibold">Áreas de Cobertura</h2>
        </div>
        <p className={clsx("text-secondary text-center my-4")}>
          {coverageMessage}
        </p>
        <Row className="g-4 align-items-stretch">
          <Col lg={5} className={clsx("d-flex flex-column gap-3")}>
            {coverageAreas.map((area, index) => {
              const active = selectedArea === area;

              return (
                <div
                  key={index}
                  onClick={() => setSelectedArea(area)}
                  role="button"
                  className={clsx(
                    "d-flex align-items-center justify-content-between p-3 rounded-3 shadow-sm",
                    styles.areaCard,
                    active && styles.areaCardActive,
                  )}
                >
                  <div className="d-flex align-items-center gap-3">
                    <FaLocationCrosshairs
                      className="text-secondary"
                      size={20}
                    />
                    <span className="text-white fw-semibold">{area}</span>
                  </div>

                  <Badge
                    bg="secondary"
                    text="dark"
                    className="px-3 py-2 fw-bold opacity-75"
                  >
                    OPERATIVO
                  </Badge>
                </div>
              );
            })}
          </Col>
          <Col lg={7}>
            <div
              className={clsx(
                "h-100 rounded-3 overflow-hidden shadow",
                styles.mapContainer,
              )}
            >
              <iframe
                title="Mapa de Operaciones Tucumán"
                width="100%"
                height="100%"
                className={clsx(
                  styles.mapFrame,
                  !isActive && styles.mapDisabled,
                  isActive && styles.mapActive,
                )}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src={mapSrc}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CoverageAreaSection;