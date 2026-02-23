import { Row, Col, Button } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";
import { useScrollTo } from "../hooks/useScrollTo";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { services } from "../constants/services";
import { CourseCategories } from "./CourseCategories";
import styles from "./ServicesSection.module.css";

const ServicesSection = () => {
  const scrollTo = useScrollTo(80);
  const rowRefs = useScrollReveal(0.15);

  return (
    <>
      <div className="section-header">
        <h2 className="section-title">SERVICIOS</h2>
        <h3 className="section-subtitle">
          "La seguridad no es un servicio, es una ciencia de precisión"
        </h3>
      </div>

      <div className={styles.container}>
        {services.map((service, index) => {
          const isEven = index % 2 === 0;

          return (
            <Row
              ref={(el) => (rowRefs.current[index] = el)}
              key={index}
              className={`${styles.serviceRow} ${isEven ? styles.fromLeft : styles.fromRight} ${!isEven ? "flex-md-row-reverse" : ""}`}
            >
              <Col md={4} className={styles.imgCol}>
                <div className={styles.imageFrame}>
                  <img
                    src={service.img}
                    alt={service.title}
                    className={styles.serviceImage}
                  />
                  <div className={styles.imageOverlay}></div>
                </div>
              </Col>

              <Col
                md={8}
                className={`${styles.textCol} ${isEven ? "ps-md-5" : "pe-md-5"}`}
              >
                <div className={isEven ? "" : "text-md-end"}>
                  <h4 className={styles.serviceTitle}>{service.title}</h4>
                  <div
                    className={`${styles.separator} ${isEven ? "" : "ms-md-auto"}`}
                  ></div>
                  <p className={styles.serviceDescription}>
                    {service.description}
                  </p>
                  {service.features?.map((feature, fIndex) => (
                    <div key={fIndex} className={styles.featureItem}>
                      <FaCheck className={styles.checkIcon} />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* {service.slogan && (
                  <p className={styles.innerSlogan}>"{service.slogan}"</p>
                )}                      */}

                {service.categories && (
                  <CourseCategories categories={service.categories} />
                )}

                <div
                  className={`${styles.commercialWrapper} ${!isEven ? styles.commercialEnd : ""}`}
                >
                  <small className={styles.commercialText}>
                    Tipo de Canon: {service.billingType}
                  </small>
                  <small className={styles.commercialText}>
                    Base imponible desde: {service.minPrice}
                  </small>
                  <Button
                    className="btn-tactical mt-3"
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
    </>
  );
};

export default ServicesSection;