import { Row, Col, Button } from "react-bootstrap";
import { FaWhatsapp, FaEnvelope, FaCalendar } from "react-icons/fa6";
import { 
  emailAddress, 
  rawWhatsappNumber, 
  styledWhatsappNumber,
  defaultWhatsappMessage
} from "../constants/contactInfo";
import styles from "./ContactSection.module.css";
import ContactForm from "./ContactForm";

const ContactSection = () => {

  const whatsappUrl = `https://wa.me/${rawWhatsappNumber}?text=${encodeURIComponent(
    defaultWhatsappMessage
  )}`;

  return (
    <section id="contacto" className="px-4 px-lg-5">
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

              {/* WhatsApp */}
              <div className={styles.contactItem}>
                <Button
                  className={`${styles.btnWhatsapp}`}
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

              {/* Email */}
              <div className={styles.contactItem}>
                <Button
                  className={`${styles.btnEmail}`}
                  href={`mailto:${emailAddress}`}
                >
                  <FaEnvelope size={24} />
                  <span>Email Corporativo</span>
                </Button>
                <small className={styles.contactInfo}>
                  {emailAddress}
                </small>
              </div>
            </div>

            <div className={`${styles.scheduleContainer} my-5 my-lg-0`}>
              <div className={styles.scheduleHeader}>
                <FaCalendar className="text-secondary" />
                <span>Horarios de Atención</span>
              </div>
              
              <div className={styles.scheduleBody}>
                <div className={styles.scheduleLine}>
                  <span>Lunes a Viernes</span>
                  <span className={styles.timeBadge}>09:00 — 18:00 HS</span>
                </div>
                <div className={styles.scheduleLine}>
                  <span>Sábados</span>
                  <span className={styles.timeBadge}>09:00 — 13:00 HS</span>
                </div>
                <div className={styles.scheduleLine}>
                  <span>Domingos</span>
                  <span className="text-danger fw-bold">CERRADO</span>
                </div>
              </div>
            </div>
          </Col>

          <Col lg={7}>
             <h4 className="text-white text-uppercase">
              Hablemos
            </h4>
            <ContactForm />
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default ContactSection;