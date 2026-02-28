import { Row, Col, Button } from "react-bootstrap";
import { FaShieldAlt } from "react-icons/fa";
import { HashLink } from "react-router-hash-link"; 
import { scrollWithOffset } from "../utils/scrollUtils"; 
import { useScrollReveal } from "../hooks/useScrollReveal";
import { services } from "../constants/services";
import { CourseCategories } from "./CourseCategories";
import { SECTION_IDS } from "../constants/routes";
import clsx from "clsx";
import styles from "./ServicesSection.module.css";

const ServicesSection = () => {
  const rowRefs = useScrollReveal(0.15);

  return (
    <section id={SECTION_IDS.SERVICES}>
      <div className={clsx("section-header", "px-4", "px-lg-5")}>
        <h2 className="section-title">SERVICIOS</h2>
        <h3 className="section-subtitle">
          "La seguridad no es un servicio, es una ciencia de precisión"
        </h3>
      </div>

      <div className="overflow-hidden">
        {services.map((service, index) => {
          const isEven = index % 2 === 0;
          return (
            <Row
              ref={(el) => (rowRefs.current[index] = el)}
              key={index}
              className={clsx(
                "m-0 align-items-stretch p-4",
                styles.serviceRow,
                isEven ? styles.fromLeft : styles.fromRight,
                !isEven && "flex-md-row-reverse"
              )}
            >
              <Col md={4} className={clsx("p-0 position-relative overflow-hidden", styles.imgCol)}>
                <img
                  src={service.img}
                  alt={service.title}
                  className={clsx("w-100 h-100 d-block", styles.serviceImage)}
                />
              </Col>

              <Col
                md={8}
                className={clsx(
                  "d-flex flex-column justify-content-between py-0 mt-4 mt-md-0",
                  isEven ? "ps-md-5" : "pe-md-5",
                  styles.textCol
                )}
              >
                <div className={clsx("text-center", isEven ? "text-md-start" : "text-md-end")}>
                  <h4 className={clsx("title-tactical mt-3 mt-md-0", styles.serviceTitle)}>
                    {service.title}
                  </h4>

                  <div
                    className={clsx(
                      "mx-auto my-4",
                      isEven ? "ms-md-0 me-md-auto" : "ms-md-auto me-md-0",
                      styles.separator
                    )}
                  />

                  <p className={clsx(styles.serviceDescription, "ps-3")}>
                    {service.description}
                  </p>

                  <div className="my-4">
                    {service.features?.map((feature, fIndex) => (
                      <div
                        key={fIndex}
                        className={clsx(
                          "d-flex align-items-center gap-2 text-uppercase fw-semibold m-2 ms-0 ms-lg-3",
                          styles.featureItem
                        )}
                      >
                        <FaShieldAlt className="global-icon flex-shrink-0" />
                        <span className="text-start">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {service.categories && (
                  <CourseCategories categories={service.categories} />
                )}

                <div
                  className={clsx(
                    "d-flex flex-column mt-4",
                    isEven ? "align-items-center align-items-md-start" : "align-items-center align-items-md-end ms-md-auto",
                    styles.commercialWrapper
                  )}
                >
                  <small
                    className={clsx(
                      "text-uppercase fw-bold d-block w-100 py-3 px-4",
                      styles.commercialText,
                      !isEven && styles.commercialTextEnd
                    )}
                  >
                    Tipo de Canon: {service.billingType}
                  </small>

                  <Button
                    as={HashLink}
                    smooth
                    to={`/#${SECTION_IDS.CONTACT}`}
                    scroll={scrollWithOffset}
                    className="btn-tactical mt-2 w-100 rounded-0"
                  >
                    Consultar Ahora
                  </Button>
                </div>
              </Col>
            </Row>
          );
        })}
      </div>
    </section>
  );
};

export default ServicesSection;