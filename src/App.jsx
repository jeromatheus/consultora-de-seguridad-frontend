import Layout from './layout/Layout';
import StartSection from './sections/StartSection';
import DifferentialSection from './sections/DifferentialSection';
import ServicesSection from './sections/ServicesSection';
import ContactSection from './sections/ContactSection';

function App() {
  return (
    <Layout>
      <section id="inicio">
        <StartSection />
      </section>
      <section id="diferenciales">        
        <DifferentialSection />
      </section>
      <section id="servicios">
        <ServicesSection />
      </section>
      <section id="contacto">
        <ContactSection />
      </section>
    </Layout>
  );
}

export default App;