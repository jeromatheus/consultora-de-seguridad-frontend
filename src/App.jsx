import Layout from './layout/Layout';
import StartSection from './sections/StartSection';
import AboutUsSection from './sections/AboutUsSection';
import ServicesSection from './sections/ServicesSection';
import ContactSection from './sections/ContactSection';
import DifferentialSection from './sections/DifferentialSection';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <Layout>
      <StartSection />
      <Container fluid className="px-0">
        <AboutUsSection />
        <ServicesSection />
        <DifferentialSection />
        <ContactSection />
      </Container>
    </Layout>
  );
}

export default App;