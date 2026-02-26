import { useState } from "react";
import { Tab, Nav, Row, Col, Card } from "react-bootstrap";
import { FaArrowDown } from "react-icons/fa";
import clsx from "clsx";
import styles from "./CourseCategories.module.css";

// TODO: niveles de dificultad, pdf, duración, modalidad, formulario de pre-inscripción
export const CourseCategories = ({ categories = [] }) => {
  const [activeKey, setActiveKey] = useState(null);

  if (!categories.length) return null;

  return (
    <section>
      <h5
        className={clsx(
          "text-white text-uppercase fw-semibold mb-4 text-start",
          styles.title,
        )}
      >
        Nuestros Programas
      </h5>
      <Tab.Container
        activeKey={activeKey}
        onSelect={(k) => setActiveKey(activeKey === k ? null : k)}
      >
        <Nav
          variant="tabs"
          className={clsx("flex-column border-bottom-0 gap-1")}
        >
          {categories.map((category) => (
            <Nav.Item key={category.name} className="flex-fill">
              <Nav.Link
                eventKey={category.name}
                className={clsx(
                  "d-flex justify-content-between align-items-center px-4 py-3 border-0 rounded-top text-uppercase",
                  styles.navLink,
                  activeKey === category.name && styles.navLinkActive,
                )}
              >
                <span>{category.name}</span>
                <FaArrowDown
                  className={clsx(
                    styles.arrowIcon,
                    activeKey === category.name && styles.arrowIconOpen,
                  )}
                />
              </Nav.Link>
            </Nav.Item>
          ))}
        </Nav>

        <Tab.Content>
          {categories.map((category) => (
            <Tab.Pane eventKey={category.name} key={category.name}>
              <div
                className={clsx(
                  styles.scrollContainer,
                  "custom-scrollbar",
                  styles.tabContentAnimated,
                )}
              >
                <Row className={clsx("mt-1 g-1 me-0")}>
                  {category.items.map((course, index) => (
                    <Col xs={12} key={index}>
                      <Card className={clsx(styles.courseCard, "text-start")}>
                        <Card.Body className={clsx("p-3")}>
                          <Card.Title className={clsx(styles.cardTitle, "text-white fw-semibold")}>
                            {course.title}
                          </Card.Title>
                          <Card.Text className={clsx(styles.cardText)}>
                            {course.description}
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </div>
            </Tab.Pane>
          ))}
        </Tab.Content>
      </Tab.Container>
    </section>
  );
};
