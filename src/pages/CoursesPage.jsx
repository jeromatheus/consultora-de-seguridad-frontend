// TODO: niveles de dificultad, pdf, duración, modalidad, formulario de pre-inscripción
import { Container } from "react-bootstrap";
import StartSection from "../shared/components/StartSection";
import CoursesSection from "../features/Services/components/CoursesSection";
import RegistrationSection from "../features/Contact/components/RegistrationSection";
import { courses_slides } from "../features/Services/data/courses";
import { SECTION_IDS } from "../shared/data/routes";

const CoursesPage = () => {
  return (
    <>
      <StartSection
        sectionId={SECTION_IDS.COURSES}
        slides={courses_slides}
        heroHeight="50vh"
      />
      <Container fluid className="px-0">
        <CoursesSection/>
        <RegistrationSection />
      </Container>
    </>
  );
};

export default CoursesPage;
