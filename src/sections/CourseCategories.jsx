  import { useState } from "react";
  import { Tab, Nav, Row, Col, Card } from "react-bootstrap";
  import styles from "./CourseCategories.module.css";

  export const CourseCategories = ({ categories = [] }) => {
    const [activeKey, setActiveKey] = useState(null);

    if (!categories.length) return null;

    return (
      <section className={styles.section}>
        <h5 className={styles.title}>Nuestros Programas</h5>
        <Tab.Container
          activeKey={activeKey}
          onSelect={(k) => setActiveKey(activeKey === k ? null : k)}
          className={styles.coursesContainer}
        >
          <Nav variant="tabs" className={styles.tabsNav}>
            {categories.map((category) => (
              <Nav.Item key={category.name} className={styles.navItem}>
                <Nav.Link
                  eventKey={category.name}
                  className={`${styles.navLink} ${
                    activeKey === category.name ? styles.navLinkActive : ""
                  }`}
                >
                  {category.name}
                </Nav.Link>
              </Nav.Item>
            ))}
          </Nav>

          <Tab.Content>
            {categories.map((category) => (
              <Tab.Pane eventKey={category.name} key={category.name}>
                <div className={styles.scrollContainer}>
                  <Row className="mt-1 g-1 me-0">
                    {category.items.map((course, index) => (
                      <Col xs={12} key={index}>
                        <Card className={styles.courseCard}>
                          <Card.Body className="p-3">
                            <Card.Title className={styles.cardTitle}>
                              {course.title}
                            </Card.Title>
                            <Card.Text className={styles.cardText}>
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
