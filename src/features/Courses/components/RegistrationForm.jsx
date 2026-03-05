import { useState, useRef } from "react";
import { Row, Col, Form, Button, Spinner, Alert } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Turnstile } from "@marsidev/react-turnstile";
import { useContactForm } from "../../Contact/hooks/useContactForm";
import { validateAge } from "../../Contact/utils/validation";
import { useAvailableCourses } from "../hooks/useAvailableCourses";
import { useAvailableDates } from "../hooks/useAvailableDates";

const RegistrationForm = () => {
  const [token, setToken] = useState(null);
  const turnstileRef = useRef();
  const { sendData, status } = useContactForm("tu_id_aqui"); // TODO: Poner ID real de Formspree

  // 1. Extraemos los hooks y watch
  const {
    watch,
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // 2. Traemos las categorías simulando API
  const { availableCourses, loadingAvailableCoursess } = useAvailableCourses();

  // 3. Observamos el curso seleccionado
  const selectedCursoTitle = watch("curso");

  // 4. Traemos las fechas dinámicas según el curso
  const { availableDates, loadingDates } =
    useAvailableDates(selectedCursoTitle);

  const onSubmit = async (data) => {
    const isSuccess = await sendData(data, token);
    if (isSuccess) {
      reset();
      setToken(null);
      turnstileRef.current?.reset();
    }
  };

  return (
    <div
      className="p-3 p-lg-5 bg-black border rounded shadow d-flex flex-column justify-content-center"
      style={{ minHeight: "550px" }}
    >
      {/* Alertas de Feedback */}
      {status === "success" && (
        <Alert variant="success" className="text-uppercase small fw-bold">
          Transmisión Exitosa. Nos comunicaremos a la brevedad.
        </Alert>
      )}
      {status === "error" && (
        <Alert variant="danger" className="text-uppercase small fw-bold">
          Fallo en la conexión. Por favor, intente nuevamente.
        </Alert>
      )}

      <Form onSubmit={handleSubmit(onSubmit)}>        
        {/* FILA 1: NOMBRE Y APELLIDO */}
        <Row className="mb-3">
          <Col xs={12} sm={6} className="mb-3 mb-md-0">
            <Form.Group controlId="formNombre">
              <Form.Label className="text-white">Nombre</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese su nombre"
                {...register("nombre", {
                  required: "El nombre es obligatorio",
                })}
                isInvalid={!!errors.nombre}
              />
              <Form.Control.Feedback type="invalid">
                {errors.nombre?.message}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>

          <Col xs={12} sm={6}>
            <Form.Group controlId="formApellido">
              <Form.Label className="text-white">Apellido</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese su apellido"
                {...register("apellido", {
                  required: "El apellido es obligatorio",
                })}
                isInvalid={!!errors.apellido}
              />
              <Form.Control.Feedback type="invalid">
                {errors.apellido?.message}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>

        {/* FILA 2: FECHA DE NACIMIENTO Y SEXO */}
        <Row className="mb-3">
          <Col xs={12} sm={6} className="mb-3 mb-md-0">
            <Form.Group controlId="formNacimiento">
              <Form.Label className="text-white">
                Fecha de Nacimiento
              </Form.Label>
              <Form.Control
                type="date"
                {...register("fechaNacimiento", {
                  required: "La fecha de nacimiento es obligatoria",
                  validate: validateAge,
                })}
                isInvalid={!!errors.fechaNacimiento}
              />
              <Form.Control.Feedback type="invalid">
                {errors.fechaNacimiento?.message}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>

          <Col xs={12} sm={6}>
            <Form.Group controlId="formSexo">
              <Form.Label className="text-white">Sexo</Form.Label>
              <Form.Select
                {...register("sexo", {
                  required: "Debe seleccionar una opción",
                })}
                isInvalid={!!errors.sexo}
                defaultValue=""
              >
                <option value="" disabled>
                  Seleccione una opción...
                </option>
                <option value="Masculino">Masculino</option>
                <option value="Femenino">Femenino</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                {errors.sexo?.message}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>

        {/* FILA 3: TELÉFONO Y EMAIL */}
        <Row className="mb-3">
          <Col xs={12} sm={6} className="mb-3 mb-md-0">
            <Form.Group controlId="formTelefono">
              <Form.Label className="text-white">Teléfono</Form.Label>
              <Form.Control
                type="tel"
                placeholder="Ej: 3811234567"
                {...register("telefono", {
                  required: "El número de contacto es obligatorio",
                  minLength: {
                    value: 8,
                    message: "El teléfono debe tener al menos 8 dígitos",
                  },
                  pattern: {
                    value: /^[0-9]+$/,
                    message: "Solo se permiten números",
                  },
                })}
                isInvalid={!!errors.telefono}
              />
              <Form.Control.Feedback type="invalid">
                {errors.telefono?.message}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>

          <Col xs={12} sm={6}>
            <Form.Group controlId="formEmail">
              <Form.Label className="text-white">Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="ejemplo@correo.com"
                {...register("email", {
                  required: "El correo electrónico es obligatorio",
                  pattern: {
                    value: /^\S+@\S+\.\S+$/i,
                    message:
                      "Formato de email no válido (ej: usuario@dominio.com)",
                  },
                })}
                isInvalid={!!errors.email}
              />
              <Form.Control.Feedback type="invalid">
                {errors.email?.message}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>

        {/* FILA 4: CURSO Y FECHA (DEPENDIENTE) */}
        <Row className="mb-4">
          <Col xs={12} sm={6} className="mb-3 mb-md-0">
            <Form.Group controlId="formCurso">
              <Form.Label className="text-white">Curso de Interés</Form.Label>
              <Form.Select
                {...register("curso", {
                  required: "Debe seleccionar un curso",
                })}
                isInvalid={!!errors.curso}
                defaultValue=""
              >
                <option value="" disabled>
                  Seleccione un programa...
                </option>
                {availableCourses.map((course) => (
                  <optgroup key={course.id} label={course.name}>
                    {course.items.map((course, index) => (
                      <option
                        key={`${course.id}-${index}`}
                        value={course.title}
                      >
                        {course.title}
                      </option>
                    ))}
                  </optgroup>
                ))}
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                {errors.curso?.message}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>

          <Col xs={12} sm={6}>
            <Form.Group controlId="formFecha">
              <Form.Label className="text-white">Fecha de Dictado</Form.Label>
              <Form.Select
                {...register("fecha", {
                  required: "Debe seleccionar una fecha disponible",
                })}
                isInvalid={!!errors.fecha}
                defaultValue=""
                disabled={!selectedCursoTitle || availableDates.length === 0}
              >
                <option value="" disabled>
                  {selectedCursoTitle
                    ? availableDates.length > 0
                      ? "Seleccione una fecha..."
                      : "Sin fechas disponibles"
                    : "Seleccione un curso primero..."}
                </option>

                {/* Mapeo dinámico de las fechas encontradas */}
                {availableDates.map((date, index) => (
                  <option key={index} value={date}>
                    {date}
                  </option>
                ))}
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                {errors.fecha?.message}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>

        {/* PROTECCIÓN ANTI-BOT: TURNSTILE */}
        <Turnstile
          ref={turnstileRef}
          siteKey="1x00000000000000000000AA"
          options={{
            appearance: "interaction-only",
          }}
          onSuccess={(t) => setToken(t)}
          onExpire={() => setToken(null)}
        />

        {/* BOTÓN DE ACCIÓN */}
        <Button
          variant="warning"
          size="lg"
          type="submit"
          disabled={status === "sending"}
          className="w-100 mt-5"
        >
          {status === "sending" ? (
            <>
              <Spinner animation="border" size="sm" className="me-2" />{" "}
              PROCESANDO...
            </>
          ) : (
            "SOLICITAR INSCRIPCIÓN"
          )}
        </Button>
      </Form>
    </div>
  );
};

export default RegistrationForm;