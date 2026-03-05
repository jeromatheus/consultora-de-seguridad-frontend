import { Card, Button, Badge, OverlayTrigger, Tooltip } from "react-bootstrap";
import { FaFilePdf, FaClock, FaSignal } from "react-icons/fa";
import styles from "./CourseCard.module.css";

const CourseCard = ({ course, categoryName, image }) => {
  return (
    <Card className={`h-100 shadow-sm border-0 ${styles.courseCard}`}>
      <div className={`position-relative ${styles.imageContainer}`}>
        {image && (
          <Card.Img
            variant="top"
            src={image}
            alt={course.title}
            className={styles.cardImage}
          />
        )}
        <OverlayTrigger
          placement="left"
          overlay={<Tooltip>Ver Plan de Estudio</Tooltip>}
        >
          <a 
            href="/path-to-your-file.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className={`position-absolute rounded-1 d-flex justify-content-center align-items-center fs-5 shadow-md ${styles.pdfIconOverlay}`}
          >
            <FaFilePdf /> 
          </a>
        </OverlayTrigger>
      </div>

      <Card.Body className="d-flex flex-column p-4">
        <div className="d-flex justify-content-between align-items-start mb-2">
          {categoryName && (
            <Badge bg="dark" className="text-uppercase">
              {categoryName}
            </Badge>
          )}         
        </div>

        <Card.Title className="fw-bold mb-3">{course.title}</Card.Title>
        
        <Card.Text className="text-muted mb-4">
          {course.description}
        </Card.Text>

        <div className={styles.infoGrid}>
          <div className="d-flex align-items-center mb-3">
            <FaClock className="me-2 text-secondary" />
            <Card.Text>
              <strong>Duración aproximada:</strong> {course.duration || "A definir"}
            </Card.Text>
          </div>
          <div className="d-flex align-items-center mb-3">
            <FaSignal className="me-2 text-secondary" />
            <Card.Text>
              <strong>Nivel de dificultad:</strong> {course.difficulty || "A definir"}
            </Card.Text>
          </div>        
        </div>

        <div className="mt-auto">
          <Button variant="dark" className="w-100 rounded-0 fw-bold py-2">
            INSCRIBIRSE
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CourseCard;