import { useState } from "react";
import { Tab, Nav, Row, Col, Card } from "react-bootstrap";
import { FaArrowDown } from "react-icons/fa";
import clsx from "clsx";
import styles from "./CourseCategories.module.css";

export const CourseCategories = ({ categories = [] }) => {
  const [activeKey, setActiveKey] = useState(null);

  if (!categories.length) return null;

  return (
    <section className={clsx(styles.section)}>
      <h5 className={clsx(styles.title)}>Nuestros Programas</h5>
      <Tab.Container
        activeKey={activeKey}
        onSelect={(k) => setActiveKey(activeKey === k ? null : k)}
      >
        <Nav variant="tabs" className={clsx(styles.tabsNav)}>
          {categories.map((category) => (
            <Nav.Item key={category.name} className={clsx(styles.navItem)}>
              <Nav.Link
                eventKey={category.name}
                className={clsx(
                  "d-flex justify-content-between align-items-center",
                  styles.navLink,
                  activeKey === category.name && styles.navLinkActive
                )}
              >
                <span>{category.name}</span>
                {/* 1. Agregamos la clase de rotación condicional a la flecha */}
                <FaArrowDown
                  className={clsx(
                    styles.arrowIcon,
                    activeKey === category.name && styles.arrowIconOpen
                  )}
                />
              </Nav.Link>
            </Nav.Item>
          ))}
        </Nav>

        <Tab.Content>
          {categories.map((category) => (
            <Tab.Pane eventKey={category.name} key={category.name}>
              {/* 2. Agregamos la clase de animación al contenedor que aparece */}
              <div
                className={clsx(
                  styles.scrollContainer,
                  "custom-scrollbar",
                  styles.tabContentAnimated
                )}
              >
                <Row className={clsx("mt-1", "g-1", "me-0")}>
                  {category.items.map((course, index) => (
                    <Col xs={12} key={index}>
                      <Card className={clsx(styles.courseCard)}>
                        <Card.Body className={clsx("p-3")}>
                          <Card.Title className={clsx(styles.cardTitle)}>
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