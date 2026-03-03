import StartSection from "../shared/components/StartSection";
import AboutUsSection from "../features/Institucional/components/AboutUsSection";
import CoverageAreaSection from "../features/Institucional/components/CoverageAreaSection";
import DifferentialSection from "../features/Institucional/components/DifferentialSection";
import ServicesSection from "../features/Services/components/ServicesSection";
import ContactSection from "../features/Contact/components/ContactSection";

import { Container, Button } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";
import { scrollWithOffset } from "../shared/utils/scrollUtils";
import { welcome_slides } from "../features/Institucional/data/welcome";
import { SECTION_IDS } from "../shared/data/routes";

const LandingPage = () => {
  return (
    <>
      <StartSection slides={welcome_slides} sectionId={SECTION_IDS.START}>
        <Button
          as={HashLink}
          smooth
          to={SECTION_IDS.CONTACT}
          scroll={scrollWithOffset}
          size="lg"
          className="btn-tactical"
        >
          Agendar Consulta de Diagnóstico
        </Button>
      </StartSection>

      <Container fluid className="px-0">
        <AboutUsSection />
        <CoverageAreaSection />
        <ServicesSection />
        <DifferentialSection />
        <ContactSection />
      </Container>
    </>
  );
};

export default LandingPage;
