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
    <section id="contact" className="px-4 px-lg-5">
      <div className="section-header">
        <h2 className="section-title">Contactanos</h2>
      </div>

      <div className={clsx("p-4 p-md-5 rounded", styles.contactWrapper)}>
        <Row>
          <Col lg={5}>
            <div className="d-flex flex-column gap-3 mb-4">
              <h4 className="text-white text-uppercase m-0 pb-2">
                Canales de Comunicación
              </h4>

              {/* Item de WhatsApp */}
              <div className="d-flex flex-column gap-1">
                <Button
                  className={clsx("w-100 d-flex align-items-center justify-content-center gap-2 py-3 border-0", styles.btnWhatsapp)}
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp size={24} />
                  <span>WhatsApp Operativo</span>
                </Button>
                <small className={clsx("ms-1", styles.contactHelperText)}>
                  {styledWhatsappNumber}
                </small>
              </div>

              {/* Item de Email */}
              <div className="d-flex flex-column gap-1">
                <Button
                  className={clsx("w-100 d-flex align-items-center justify-content-center gap-2 py-3", styles.btnEmail)}
                  href={`mailto:${emailAddress}?subject=Consulta%20Servicios%20de%20Seguridad`}
                >
                  <FaEnvelope size={24} />
                  <span>Email Corporativo</span>
                </Button>
                <small className={clsx("ms-1", styles.contactHelperText)}>
                  {emailAddress}
                </small>
              </div>

              {/* Item de Ubicación */}
              <div className="d-flex flex-column gap-1 mt-2">
                <Button
                  variant="dark"
                  className={clsx("w-100 d-flex align-items-center justify-content-center gap-2 py-3 border-0 rounded-0", styles.btnLocation)}
                >
                  <FaLocationDot size={24} />
                  <span>{location}</span>
                </Button>            
              </div>
            </div>

            {/* Contenedor de Horarios */}
            <div className={clsx("d-flex flex-column gap-3 p-4 mt-5 mt-lg-0", styles.scheduleContainer)}>
              <div className="d-flex align-items-center gap-2 title-tactical">
                <FaCalendar className="text-secondary" />
                <span>Horarios de Atención</span>
              </div>
              
              <div className="d-flex flex-column gap-2">
                {schedule.map((item, index) => (
                  <div 
                    key={index} 
                    className={clsx("d-flex justify-content-between pb-1", styles.scheduleLine)}
                  >
                    <span>{item.days}</span>
                    <span className={item.isClosed ? "text-danger fw-bold" : ""}>
                      {item.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Col>

          <Col lg={7} className="mt-5 mt-lg-0">
            <h4 className="text-white text-uppercase mb-4">Hablemos</h4>
            <ContactForm />
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default ContactSection;