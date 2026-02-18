import { Row, Col, Button } from "react-bootstrap";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa6";
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
    <>
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
                  className={`${styles.btnWhatsapp} py-3 d-flex align-items-center justify-content-center gap-2`}
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
                  className={`${styles.btnEmail} py-3 d-flex align-items-center justify-content-center gap-2`}
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
          </Col>
          <Col lg={7}>
             <h4 className="text-white text-uppercase">
              Hablemos
            </h4>
            <ContactForm />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default ContactSection;