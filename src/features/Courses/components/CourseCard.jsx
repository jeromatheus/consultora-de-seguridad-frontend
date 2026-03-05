import { Card, Button, Badge, OverlayTrigger, Tooltip } from "react-bootstrap";
import styles from "./CourseCard.module.css";

const CourseCard = ({ course, categoryName, image }) => {
  return (
    <Card className={`h-100 shadow-sm border-0 ${styles.courseCard}`}>
      <div className={styles.imageContainer}>
        {image && (
          <Card.Img
            variant="top"
            src={image}
            alt={course.title}
            className={styles.cardImage}
          />
        )}
        
        {/* Ícono para Ver Plan de Estudio (PDF) */}
        <OverlayTrigger
          placement="left"
          overlay={<Tooltip>Ver Plan de Estudio</Tooltip>}
        >
          <a 
            href="/path-to-your-file.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.pdfIconOverlay}
          >
            <i className="bi bi-file-earmark-pdf-fill"></i>
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
          {course.difficulty && (
            <small className="text-warning fw-bold">{course.difficulty}</small>
          )}
        </div>

        <Card.Title className="fw-bold mb-3">{course.title}</Card.Title>
        
        <Card.Text className="text-muted mb-4" style={{ fontSize: "0.9rem" }}>
          {course.description}
        </Card.Text>

        {/* Información Adicional */}
        <div className={styles.infoGrid}>
          <div className="d-flex align-items-center mb-2">
            <i className="bi bi-person-badge me-2 text-secondary"></i>
            <small>
              <strong>Experiencia recomendada:</strong> {course.recommendedExperience || "No requiere"}
            </small>
          </div>
          <div className="d-flex align-items-center mb-3">
            <i className="bi bi-hourglass-split me-2 text-secondary"></i>
            <small>
              <strong>Duración aproximada:</strong> {course.duration || "A definir"}
            </small>
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