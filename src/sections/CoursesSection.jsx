import CourseCard from "../sections/CourseCard";
import { courseCategories } from "../constants/services";
import { Row, Col } from "react-bootstrap";

const CoursesSection = () => {
  return (
          <section id="lista-cursos" className="py-5 mt-4">
          <div className="text-center mb-5">
            <h2 className="text-uppercase fw-bold text-dark mb-0">Programas Disponibles</h2>
            <div className="mx-auto mt-3 bg-dark" style={{ width: "60px", height: "4px" }}></div>
          </div>
          
          <Row className="g-4 justify-content-center">
            {courseCategories.map((course) => (
              <Col lg={4} md={6} key={course.id}>
                <CourseCard course={course} />
              </Col>
            ))}
          </Row>
      </section>
  )
}

export default CoursesSection