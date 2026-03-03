import { Card, Button, Badge, ListGroup } from "react-bootstrap";

const CourseCard = ({ course, categoryName, image }) => {
  return (
    <Card className="h-100 shadow-sm border-0">
      {image && (
        <Card.Img
          variant="top"
          src={image}
          alt={course.title}
          style={{ height: "220px", objectFit: "cover" }}
        />
      )}
      <Card.Body className="d-flex flex-column">
        {categoryName && (
          <Badge bg="dark" className="mb-2 align-self-start">
            {categoryName}
          </Badge>
        )}
        <Card.Title className="fw-bold">{course.title}</Card.Title>
        <Card.Text className="text-muted" style={{ fontSize: "0.95rem" }}>
          {course.description}
        </Card.Text>
        {course.dates && course.dates.length > 0 && (
          <>
            <h6 className="mt-3">Próximas fechas:</h6>
            <ListGroup variant="flush" className="mb-3">
              {course.dates.map((date, index) => (
                <ListGroup.Item key={index} className="px-0 py-1 border-0">
                  {date}
                </ListGroup.Item>
              ))}
            </ListGroup>
          </>
        )}
        <div className="mt-auto">
          <Button variant="dark" className="w-100">
            Ver Detalles
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CourseCard;