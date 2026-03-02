import { Row, Col } from "react-bootstrap";
import CourseCard from "../components/CourseCard";
import { courseCategories } from "../data/services";

const CoursesSection = () => {
  return (
    <section className="px-4 px-lg-5">
      <div className="section-header">
        <h2 className="section-title">PROGRAMAS DISPONIBLES</h2>
      </div>  
      <Row className="g-4 justify-content-center">
        {courseCategories.map((course) => (
          <Col lg={4} md={6} key={course.id}>
            <CourseCard course={course} />
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default CoursesSection;
