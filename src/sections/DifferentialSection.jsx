import { Row, Col, Carousel } from "react-bootstrap";
import { differential } from "../constants/differential";
import styles from "./DifferentialSection.module.css";

const DifferentialSection = () => {

  // FUNCIÓN AUXILIAR: Agrupar los items en paquetes de 3
  const chunkArray = (array, size) => {
    const chunked = [];
    for (let i = 0; i < array.length; i += size) {
      chunked.push(array.slice(i, i + size));
    }
    return chunked;
  };

  const slides = chunkArray(differential, 3);

  return (
    <>
      <div className="section-header">
        <h2 className="section-title">Nuestro Diferencial</h2>
        <h3 className="section-subtitle">
          "Compromiso legal y ético en seguridad privada"
        </h3>            
      </div>

      <div>
        <Carousel 
          indicators={true} 
          interval={null}
          controls={true} 
          className="pb-5" 
        >
          {slides.map((group, slideIndex) => (
            <Carousel.Item key={slideIndex}>
              <Row className="justify-content-center">
                {group.map((item) => {
                  const Wrapper = item.isLink ? 'a' : 'div';
                  const linkProps = item.isLink ? {
                    href: item.link, 
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: `${styles.itemWrapper} ${styles.interactiveItem}`
                  } : {
                    className: styles.itemWrapper
                  };

                  return (
                    <Col xs={12} md={4} key={item.id} className="mb-4">
                      <Wrapper {...linkProps}>
                        <img
                          src={item.logo}
                          alt={item.title}
                          className={styles.iconImage}
                        />
                        <h5 className="silver-metallic text-center px-3">
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
      </div>
    </>
  );
};

export default DifferentialSection;