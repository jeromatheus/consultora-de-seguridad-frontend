// TODO: niveles de dificultad, pdf, duración, modalidad, formulario de pre-inscripción
import { Container } from "react-bootstrap";
// import StartSection from "../sections/StartSection";
import CoursesSection from "../features/Services/components/CoursesSection";
import RegistrationSection from "../features/Contact/components/RegistrationSection";

const CoursesPage = () => {
  return (
    <Container fluid className="px-0">       
        {/* <StartSection /> */}
        <CoursesSection />
        <RegistrationSection />
    </Container>
  );
};

export default CoursesPage;