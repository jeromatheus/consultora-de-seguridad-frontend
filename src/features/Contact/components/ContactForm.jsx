import { useState, useRef } from "react";
import { Row, Col, Form, Button, Spinner, Alert } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Turnstile } from "@marsidev/react-turnstile";
import { useContactForm } from "../hooks/useContactForm";

const ContactForm = () => {
  const [token, setToken] = useState(null);
  const turnstileRef = useRef();
  const { sendData, status } = useContactForm("tu_id_aqui"); // TODO: Poner ID real de Formspree

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const isSuccess = await sendData(data, token);
    if (isSuccess) {
      reset();
      setToken(null);
      turnstileRef.current?.reset();
    }
  };

  return (
    <div className="p-4 bg-black border rounded shadow">
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
        <Row className="mb-3">
          {/* CAMPO: NOMBRE */}
          <Col xs={12} md={6} className="mb-3 mb-md-0">
            <Form.Group controlId="formNombre">
              <Form.Label>Nombre</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Ingrese su nombre"
                {...register("nombre", { 
                  required: "El nombre es obligatorio para el registro" 
                })}
                isInvalid={!!errors.nombre}
              />
              <Form.Control.Feedback type="invalid">
                {errors.nombre?.message}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>

          {/* CAMPO: TELÉFONO */}
          <Col xs={12} md={6}>
            <Form.Group controlId="formTelefono">
              <Form.Label>Teléfono</Form.Label>
              <Form.Control 
                type="tel" 
                placeholder="Ej: 3811234567"
                {...register("telefono", { 
                  required: "El número de contacto es obligatorio",
                  minLength: { value: 8, message: "El teléfono debe tener al menos 8 dígitos" },
                  pattern: { value: /^[0-9]+$/, message: "Solo se permiten números" }
                })}
                isInvalid={!!errors.telefono}
              />
              <Form.Control.Feedback type="invalid">
                {errors.telefono?.message}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3">
          {/* CAMPO: EMAIL */}
          <Col xs={12} md={6} className="mb-3 mb-md-0">
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control 
                type="email" 
                placeholder="ejemplo@correo.com"
                {...register("email", { 
                  required: "El correo electrónico es obligatorio",
                  pattern: { 
                    value: /^\S+@\S+\.\S+$/i, 
                    message: "Formato de email no válido (ej: usuario@dominio.com)" 
                  }
                })}
                isInvalid={!!errors.email}
              />
              <Form.Control.Feedback type="invalid">
                {errors.email?.message}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>

          {/* CAMPO: SERVICIO */}
          <Col xs={12} md={6}>
            <Form.Group controlId="formServicio">
              <Form.Label>Servicio de Interés</Form.Label>
              <Form.Select 
                {...register("servicio", { 
                  required: "Debe seleccionar un área de servicio" 
                })}
                isInvalid={!!errors.servicio}
              >
                <option value="">Seleccione un servicio...</option>
                <option value="Protección Personal">Protección Personal de Alto Perfil</option>
                <option value="Custodia de Activos">Custodia y Logística de Activos Críticos</option>
                <option value="Gestión de Información">Gestión de Información y Análisis</option>
                <option value="Capacitación">Capacitación Táctica Especializada</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                {errors.servicio?.message}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>

        {/* CAMPO: MENSAJE */}
        <Form.Group className="mb-4" controlId="formMensaje">
          <Form.Label>Mensaje</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            placeholder="Hola, me gustaría obtener más información sobre el servicio seleccionado."
            {...register("mensaje", { 
              required: "Por favor, detalle el motivo de su consulta",
            })}
            isInvalid={!!errors.mensaje}
          />
          <Form.Control.Feedback type="invalid">
            {errors.mensaje?.message}
          </Form.Control.Feedback>
        </Form.Group>

        {/* PROTECCIÓN ANTI-BOT: TURNSTILE */}
        <Turnstile
          ref={turnstileRef}
          siteKey="1x00000000000000000000AA" 
          options={{ 
            appearance: "interaction-only" 
          }}
          onSuccess={(t) => setToken(t)}
          onExpire={() => setToken(null)}
        />

        {/* BOTÓN DE ACCIÓN */}
        <div className="d-grid">
          <Button 
            variant="warning" 
            size="lg" 
            type="submit" 
            disabled={status === "sending"}
          >
            {status === "sending" ? (
              <><Spinner animation="border" size="sm" className="me-2" /> PROCESANDO...</>
            ) : (
              "ENVIAR CONSULTA"
            )}
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default ContactForm;