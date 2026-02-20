import { Row, Col, Carousel } from "react-bootstrap";
import data_protection_logo from "../assets/data_protection_logo.png";
import styles from "./DifferentialSection.module.css";

const DifferentialSection = () => {
  const commonImage = data_protection_logo;
  const commonLink = "https://www.argentina.gob.ar/normativa/nacional/ley-25326-64790/texto";

  const items = [
    { id: 1, title: "Ex-Fuerzas Armadas / ONU", isLink: false },
    { id: 2, title: "Certificaciones de Servicio", isLink: false },
    { id: 3, title: "Ley 25.326 de Seguridad de Datos", isLink: true }, 
    { id: 4, title: "Protocolos de Ciberseguridad", isLink: true },     
    { id: 5, title: "Análisis de Riesgo Corporativo", isLink: false },
    { id: 6, title: "Logística de Valores", isLink: true }              
  ];

  // FUNCIÓN AUXILIAR: Agrupar los items en paquetes de 3
  const chunkArray = (array, size) => {
    const chunked = [];
    for (let i = 0; i < array.length; i += size) {
      chunked.push(array.slice(i, i + size));
    }
    return chunked;
  };

  const slides = chunkArray(items, 3);

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
                    href: commonLink,
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
                          src={commonImage}
                          alt={item.title}
                          className={styles.iconImage}
                        />
                        <h5 className="silver-metallic text-center px-3">
                          {item.title}
                        </h5>
                        {item.isLink && (
                          <small className="text-muted mt-2" style={{fontSize: '0.7rem'}}>
                            (Ver más)
                          </small>
                        )}
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