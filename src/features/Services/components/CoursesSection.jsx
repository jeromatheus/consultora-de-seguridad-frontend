import { Form, Container } from "react-bootstrap";
import { useAvailableCourses } from "../../Contact/hooks/useAvailableCourses";
import { useCourseFilter } from "../hooks/useCourseFilter";

const CoursesSection = () => {
  const { availableCourses, loadingAvailableCourses, errorAvailableCourses } =
    useAvailableCourses();

  const { selectedCategory, setSelectedCategory, displayedCourses } =
    useCourseFilter(availableCourses);

  return (
    <section>
      <div className="section-header">
        <h2 className="section-title text-center">Programas Disponibles</h2>
      </div>

      <Container fluid className="p-4 p-lg-5 bg-black text-white">
        <div className="w-100 w-md-75 w-lg-50 mb-5">
          <Form.Select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            disabled={loadingAvailableCourses}
          >
            <option value="all">
              {loadingAvailableCourses
                ? "Cargando categorías..."
                : "Todos los Programas"}
            </option>
            {availableCourses.map((category) => (
              <option key={category.id} value={category.name}>
                {category.name}
              </option>
            ))}
          </Form.Select>
        </div>

      </Container>
    </section>
  );
};

export default CoursesSection;