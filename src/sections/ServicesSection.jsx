import { Row, Col, Button } from "react-bootstrap";
import { FaShieldAlt } from "react-icons/fa";
import { useScrollTo } from "../hooks/useScrollTo";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { services } from "../constants/services";
import { CourseCategories } from "./CourseCategories";
import clsx from "clsx";
import styles from "./ServicesSection.module.css";

const ServicesSection = () => {
  const scrollTo = useScrollTo(80);
  const rowRefs = useScrollReveal(0.15);

  return (
    <section id="servicios">
      <div className={clsx("section-header", "px-4", "px-lg-5")}>
        <h2 className={clsx("section-title")}>SERVICIOS</h2>
        <h3 className={clsx("section-subtitle")}>
          "La seguridad no es un servicio, es una ciencia de precisión"
        </h3>
      </div>

      <div className={clsx(styles.container)}>
        {services.map((service, index) => {
          const isEven = index % 2 === 0;

          return (
            <Row
              ref={(el) => (rowRefs.current[index] = el)}
              key={index}
              className={clsx(
                styles.serviceRow,
                isEven ? styles.fromLeft : styles.fromRight,
                !isEven && "flex-md-row-reverse",
              )}
            >
              <Col md={4} className={clsx(styles.imgCol)}>
                <img
                  src={service.img}
                  alt={service.title}
                  className={clsx(styles.serviceImage)}
                />
              </Col>

              <Col
                md={8}
                className={clsx(styles.textCol, isEven ? "ps-md-5" : "pe-md-5")}
              >
                <div className={clsx(!isEven && "text-md-end")}>
                  <h4 className={clsx(styles.serviceTitle, "title-tactical")}>
                    {service.title}
                  </h4>

                  <div
                    className={clsx(styles.separator, !isEven && "ms-md-auto")}
                  />

                  <p className={clsx(styles.serviceDescription)}>
                    {service.description}
                  </p>

                  {service.features?.map((feature, fIndex) => (
                    <div key={fIndex} className={clsx(styles.featureItem)}>
                      <FaShieldAlt className={clsx("global-icon")} />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {service.categories && (
                  <CourseCategories categories={service.categories} />
                )}

                <div
                  className={clsx(
                    styles.commercialWrapper,
                    !isEven && styles.commercialEnd,
                  )}
                >
                  <small className={clsx(styles.commercialText)}>
                    Tipo de Canon: {service.billingType}
                  </small>

                  <Button
                    className={clsx("btn-tactical", "mt-1")}
                    onClick={() => scrollTo("contacto")}
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