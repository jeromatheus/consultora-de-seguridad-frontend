import { Row, Col, Button } from "react-bootstrap";
import { FaWhatsapp, FaEnvelope, FaCalendar, FaLocationDot } from "react-icons/fa6";
import {
  emailAddress,
  rawWhatsappNumber,
  styledWhatsappNumber,
  defaultWhatsappMessage,
  location,
  schedule, 
} from "../constants/companyInfo";
import styles from "./ContactSection.module.css";
import clsx from "clsx";
import ContactForm from "./ContactForm";
import { useMemo } from "react";

const ContactSection = () => {
  const whatsappUrl = useMemo(
    () =>
      `https://wa.me/${rawWhatsappNumber}?text=${encodeURIComponent(
        defaultWhatsappMessage,
      )}`,
    [],
  );

  return (
    <section id="contact" className="px-4 px-lg-5 bg-tactical-grid">
      <div className="section-header">
        <h2 className="section-title">Contactanos</h2>
      </div>

      <div className={styles.contactContainer}>
        <Row>
          <Col lg={5}>
            <div className="d-flex flex-column gap-3 mb-4">
              <h4 className="text-white text-uppercase">
                Canales de Comunicación
              </h4>

              <div className={styles.contactItem}>
                <Button
                  className={clsx(styles.btnWhatsapp)}
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp size={24} />
                  <span>WhatsApp Operativo</span>
                </Button>

                <small className={styles.contactInfo}>
                  {styledWhatsappNumber}
                </small>
              </div>

              <div className={styles.contactItem}>
                <Button
                  className={clsx(styles.btnEmail)}
                  href={`mailto:${emailAddress}?subject=Consulta%20Servicios%20de%20Seguridad`}
                >
                  <FaEnvelope size={24} />
                  <span>Email Corporativo</span>
                </Button>

                <small className={styles.contactInfo}>{emailAddress}</small>
              </div>

              <div className={styles.contactItem}>
                <Button
                  className={clsx(styles.btnLocation)}
                  variant="dark"
                >
                  <FaLocationDot size={24} className="me-2" />
                  <span>{location}</span>
                </Button>            
              </div>
            </div>

            <div className={clsx(styles.scheduleContainer, "my-5", "my-lg-0")}>
              <div className={clsx(styles.scheduleHeader, "title-tactical")}>
                <FaCalendar className="text-secondary" />
                <span>Horarios de Atención</span>
              </div>
              <div className={styles.scheduleBody}>
                {schedule.map((item, index) => (
                  <div key={index} className={styles.scheduleLine}>
                    <span>{item.days}</span>
                    <span className={item.isClosed ? clsx("text-danger", "fw-bold") : ""}>
                      {item.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Col>

          <Col lg={7}>
            <h4 className="text-white text-uppercase">Hablemos</h4>
            <ContactForm />
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default ContactSection;