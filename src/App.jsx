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
      <section id="inicio">
        <StartSection />
      </section>
      <Container fluid className="px-5">
        <section id="nosotros">        
          <AboutUsSection />
        </section>
        <section id="servicios">
          <ServicesSection />
        </section>
        <section id="diferencial">
          <DifferentialSection />
        </section>      
        <section id="contacto">
          <ContactSection />
        </section>
      </Container>
    </Layout>
  );
}

export default App;