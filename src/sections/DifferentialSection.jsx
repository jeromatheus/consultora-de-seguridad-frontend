import { Row, Col, Carousel } from "react-bootstrap";
import { differentials } from "../constants/differentials";
import styles from "./DifferentialSection.module.css";
import { SECTION_IDS } from "../constants/routes";
import clsx from "clsx";

const DifferentialSection = () => {

  const chunkArray = (array, size) => {
    const chunked = [];
    for (let i = 0; i < array.length; i += size) {
      chunked.push(array.slice(i, i + size));
    }
    return chunked;
  };

  const slides = chunkArray(differentials, 3);

  return (
    <section id={SECTION_IDS.DIFFERENTIAL} className="px-4 px-lg-5">
      <div className="section-header">
        <h2 className="section-title">Nuestro Diferencial</h2>
        <h3 className="section-subtitle">
          "Compromiso legal y ético en seguridad privada"
        </h3>            
      </div>

      <Carousel 
        indicators 
        interval={null}
        controls 
        className="pb-5"
      >
        {slides.map((group, slideIndex) => (
          <Carousel.Item key={slideIndex}>
            <Row className="justify-content-center">
              {group.map((item) => {
                const Wrapper = item.isLink ? "a" : "div";

                return (
                  <Col xs={12} md={4} key={item.id} className="mb-4">
                    <Wrapper
                      {...(item.isLink && {
                        href: item.link,
                        target: "_blank",
                        rel: "noopener noreferrer",
                      })}
                      className={clsx(
                        "d-flex flex-column align-items-center justify-content-center text-decoration-none h-100 p-2 p-md-3",
                        styles.itemWrapper,
                        item.isLink && styles.interactiveItem
                      )}
                    >
                      <img
                        src={item.logo}
                        alt={item.title}
                        className={clsx("mb-4", styles.iconImage)}
                      />
                      <h5
                        className="text-silver text-center px-3 m-0"
                      >
                        {item.title}
                      </h5>
                    </Wrapper>
                  </Col>
                );
              })}
            </Row>
          </Carousel.Item>
        ))}
      </Carousel>
    </section>
  );
};

export default DifferentialSection;