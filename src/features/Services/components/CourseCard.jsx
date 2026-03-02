import { HashLink } from "react-router-hash-link";
import { scrollWithOffset } from "../../../shared/utils/scrollUtils";
import { Card, Button } from "react-bootstrap";

const CourseCard = ({ course }) => {
  return (
    <Card className="h-100 shadow border-0 bg-dark text-white">
      <Card.Img
        variant="top"
        src={course.image}
        alt={course.title}
        style={{ height: "220px", objectFit: "cover" }}
      />
      <Card.Body className="d-flex flex-column p-4">
        <Card.Title className="text-uppercase fw-bold mb-3">
          {course.title}
        </Card.Title>

        <div className="mb-3 pb-3 border-bottom border-secondary border-opacity-50">
          <small className="d-block text-light opacity-75">
            <i className="bi bi-geo-alt-fill me-2"></i>
            <strong>Modalidad:</strong> {course.modality}
          </small>
          <small className="d-block text-light opacity-75 mt-1">
            <i className="bi bi-clock-fill me-2"></i>
            <strong>Duración:</strong> {course.duration}
          </small>
        </div>

        <Card.Text className="flex-grow-1 text-light opacity-75">
          {course.description}
        </Card.Text>

        <Button
          as={HashLink}
          smooth
          to="#inscripcion"
          scroll={scrollWithOffset}
          variant="outline-light"
          className="w-100 mt-4 rounded-0 text-uppercase fw-bold"
        >
          Inscribirse
        </Button>
      </Card.Body>
    </Card>
  );
};

export default CourseCard;