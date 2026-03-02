import StartSection from '../features/Institucional/components/StartSection';
import AboutUsSection from '../features/Institucional/components/AboutUsSection';
import CoverageAreaSection from '../features/Institucional/components/CoverageAreaSection';
import DifferentialSection from '../features/Institucional/components/DifferentialSection';
import ServicesSection from '../features/Services/components/ServicesSection';
import ContactSection from '../features/Contact/components/ContactSection';
import { Container } from 'react-bootstrap';

const LandingPage = () => {
  return (
    <>
      <StartSection />
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