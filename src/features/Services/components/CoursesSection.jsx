import { Row, Col, ListGroup, Spinner } from "react-bootstrap";
import { useAvailableCourses } from "../../Contact/hooks/useAvailableCourses";
import { useCourseFilter } from "../hooks/useCourseFilter";
import CourseCard from "./CourseCard";
import styles from "./CoursesSection.module.css";

const CoursesSection = () => {
  const { availableCourses, loadingAvailableCourses, errorAvailableCourses } =
    useAvailableCourses();

  const { selectedCategory, setSelectedCategory, displayedCourses } =
    useCourseFilter(availableCourses);

  const getItemClass = (categoryId) => {
    const isActive = selectedCategory === categoryId;
    return `${styles.categoryItem} ${isActive ? styles.categoryItemActive : ""}`;
  };

  return (
    <section className="mb-5 bg-black text-white px-3 px-md-5 py-4">
      <h2 className="section-title">Programas Disponibles</h2>
      <Row className="mt-5">
        <Col xs={12} md={4} className="mb-4 mb-md-0">
          <h3 className="mb-4">Categorías</h3>
          <div>
            {loadingAvailableCourses && (
              <Spinner animation="border" variant="light" />
            )}
            {errorAvailableCourses && (
              <p className="text-danger">Error al cargar las categorías.</p>
            )}

            {!loadingAvailableCourses && !errorAvailableCourses && (
              <ListGroup variant="flush">
                <ListGroup.Item
                  action
                  onClick={() => setSelectedCategory("all")}
                  className={getItemClass("all")}
                >
                  Todas las categorías
                </ListGroup.Item>

                {availableCourses?.map((category) => (
                  <ListGroup.Item
                    key={category.id}
                    action
                    onClick={() => setSelectedCategory(category.id)}
                    className={getItemClass(category.id)}
                  >
                    {category.name}
                  </ListGroup.Item>
                ))}
              </ListGroup>
            )}
          </div>
        </Col>

        <Col xs={12} md={8}>
          {availableCourses.map((category) => (
            <div key={category.id} className="mb-5">
              <h2 className="mb-4">{category.name}</h2>

              <Row>
                {category.items.map((course) => (
                  <Col key={course.id} md={6} lg={4} className="mb-4">
                    <CourseCard
                      course={course}
                      categoryName={category.name}
                      image="https://placehold.co/600x400"
                    />
                  </Col>
                ))}
              </Row>
            </div>
          ))}
        </Col>
      </Row>
    </section>
  );
};

export default CoursesSection;