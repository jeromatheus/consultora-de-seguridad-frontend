import Layout from './layout/Layout';
import StartSection from './sections/StartSection';
import AboutUsSection from './sections/AboutUsSection';
import ServicesSection from './sections/ServicesSection';
import ContactSection from './sections/ContactSection';
import DifferentialSection from './sections/DifferentialSection';

function App() {
  return (
    <Layout>
      <section id="inicio">
        <StartSection />
      </section>
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
    </Layout>
  );
}

export default App;