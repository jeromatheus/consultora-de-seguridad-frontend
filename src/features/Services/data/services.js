import service_personal_protection from "../assets/service_personal_protection.png";
import service_asset_custody from "../assets/service_asset_custody.png";
import service_capacitation from "../assets/service_capacitation.png";
import service_information from "../assets/service_information.png";

export const availableCourses = [
  {
    id: "seguridad-profesional",
    name: "Seguridad Profesional",
    items: [
      {
        id: "tactical-shooting",
        categoryId: "seguridad-profesional",
        title: "Tactical Shooting",
        description:
          "Técnicas avanzadas de tiro defensivo y operativo orientadas a escenarios reales de confrontación.",
        dates: [
          "10 de Abril, 2026",
          "18 de Julio, 2026",
          "12 de Octubre, 2026",
        ],
      },
      {
        id: "vip-protection",
        categoryId: "seguridad-profesional",
        title: "VIP Protection",
        description:
          "Protección ejecutiva y aplicación de protocolos de seguridad para dignatarios y personal de alto perfil.",
        dates: ["15 de Mayo, 2026", "22 de Junio, 2026"],
      },
      {
        id: "high-risk-protection",
        categoryId: "seguridad-profesional",
        title: "High Risk Protection",
        description:
          "Operaciones en entornos de amenaza elevada con planificación estratégica y respuesta táctica.",
        dates: ["05 de Junio, 2026", "14 de Septiembre, 2026"],
      },
      {
        id: "law-enforcement-training",
        categoryId: "seguridad-profesional",
        title: "Law Enforcement Training",
        description:
          "Entrenamiento especializado para fuerzas del orden enfocado en desempeño operativo y control de situaciones críticas.",
        dates: ["20 de Marzo, 2026"],
      },
      {
        id: "knife-fight-training",
        categoryId: "seguridad-profesional",
        title: "Knife Fight Training",
        description:
          "Técnicas de defensa y combate con arma blanca en contexto profesional.",
        dates: ["08 de Agosto, 2026", "21 de Noviembre, 2026"],
      },
    ],
  },
  {
    id: "supervivencia-rescate",
    name: "Supervivencia y Rescate",
    items: [
      {
        id: "paramedic-response",
        categoryId: "supervivencia-rescate",
        title: "Paramedic Response",
        description:
          "Atención médica táctica y respuesta inmediata en situaciones críticas y de alto riesgo.",
        dates: ["12 de Abril, 2026", "30 de Agosto, 2026"],
      },
      {
        id: "mosto",
        categoryId: "supervivencia-rescate",
        title: "Mo.S.T.O.",
        description:
          "Mountain Survival Tactical Operations: Supervivencia y operaciones tácticas en terreno montañoso y agreste.",
        dates: ["17 de Mayo, 2026"],
      },
      {
        id: "jungle-operations",
        categoryId: "supervivencia-rescate",
        title: "Jungle Operations",
        description:
          "Supervivencia y tácticas operativas en entorno selvático.",
        dates: ["09 de Junio, 2026", "19 de Octubre, 2026"],
      },
      {
        id: "basic-ied-awareness",
        categoryId: "supervivencia-rescate",
        title: "Basic IED Awareness",
        description:
          "Conciencia situacional y protocolos de actuación ante amenazas explosivas.",
        dates: ["03 de Julio, 2026", "11 de Diciembre, 2026"],
      },
    ],
  },
  {
    id: "preparacion-autodefensa",
    name: "Preparación y Autodefensa",
    items: [
      {
        id: "esa-bootcamp",
        categoryId: "preparacion-autodefensa",
        title: "ESA Boot Camp",
        description:
          "Programa intensivo de preparación física y mental para entornos exigentes de alto rendimiento.",
        dates: [
          "06 de Abril, 2026",
          "13 de Julio, 2026",
          "02 de Noviembre, 2026",
        ],
      },
      {
        id: "woman-in-danger",
        categoryId: "preparacion-autodefensa",
        title: "Woman in the Face of Danger",
        description:
          "Entrenamiento de autoprotección y gestión de riesgo orientado específicamente a mujeres.",
        dates: ["25 de Abril, 2026", "18 de Septiembre, 2026"],
      },
    ],
  },
];

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