import service_personal_protection from "../assets/service_personal_protection.png";
import service_asset_custody from "../assets/service_asset_custody.png";
import service_capacitation from "../assets/service_capacitation.png";
import service_information from "../assets/service_information.png";
import { availableCourses } from "../../Courses/data/courses";

export const services = [
  {
    id: "proteccion-personal",
    title: "Protección Personal de Alto Perfil",
    description:
      "Brindamos soluciones de protección diseñadas para ejecutivos, empresarios, figuras públicas y personas con alta exposición...",
    features: [
      "Custodia Ejecutiva",
      "Análisis de Rutas Seguras",
      "Continuidad Operativa y Protección Reputacional",
    ],
    billingType: "Arancel por hora",
    minPrice: "$15.000,00",
    img: service_personal_protection,
  },
  {
    id: "custodia-activos",
    title: "Custodia y Logística de Activos Críticos",
    description:
      "Garantizamos la protección, supervisión y traslado seguro de activos estratégicos...",
    features: [
      "Evaluación Integral de Amenazas",
      "Logística Segura con Trazabilidad Controlada",
      "Respuesta Táctica ante Incidentes",
    ],
    billingType: "Arancel por kilómetro / escala",
    minPrice: "$45.000,00",
    img: service_asset_custody,
  },
  {
    id: "gestion-informacion",
    title: "Gestión de Información y Análisis",
    description:
      "Inteligencia estratégica aplicada a la gestión de información para la toma de decisiones críticas...",
    features: [
      "Análisis Integral de Riesgos",
      "Inteligencia Estratégica para Decisiones Críticas",
      "Gestión de Información de Alto Impacto",
    ],
    billingType: "Honorarios por auditoría",
    minPrice: "$120.000,00",
    img: service_information,
  },
  {
    id: "capacitacion-tactica",
    title: "Capacitación Táctica Especializada",
    description:
      "Desarrollamos programas de entrenamiento diseñados para profesionales que operan en entornos de alto riesgo...",
    features: [
      "Preparación Integral del Personal",
      "Modalidad Presencial",
      "Cursos para Principiantes y Avanzados",
    ],
    billingType: "Arancel por jornada / cursante",
    minPrice: "$25.000,00",
    img: service_capacitation,
    categories: availableCourses,
  },
];