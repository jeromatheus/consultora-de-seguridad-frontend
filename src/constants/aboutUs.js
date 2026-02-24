import onuLogo from "../assets/about_us/onu_logo.png";
import certificationLogo from "../assets/about_us/international_certification_logo.png";
import special_forces_logo from "../assets/about_us/special_forces_logo.png";

export const aboutUs = [
  {
    image: special_forces_logo,
    id: 0, 
    title: "Veteranos de Fuerzas Especiales",
    items: [
      "Operaciones de Alta Complejidad",
      "Instrucción Avanzada en Tácticas de Defensa",
      "Ejército Argentino",
      "Policía Federal Argentina",
      "Veteranos de Malvinas Argentinas",
    ],
  },
  {
    image: onuLogo,
    id: 1, 
    title: "Experiencia Internacional en Misiones ONU",
    items: [
      "UNIKOM: Misión de Observación de las Naciones Unidas para el Irak y Kuwait (1991)",
      "UNPROFOR: Fuerza de Protección de las Naciones Unidas en Croacia y Bosnia-Herzegovina (1992 - 1993)",
      "UNFICYP: Fuerza de la ONU para el Mantenimiento de la Paz en Chipre (1993)",
      "UNMIH: Misión de Naciones Unidas en Haití (1995)",
      "UNMIK: Misión de Administración Provisional de las Naciones Unidas en Kosovo (1999)",
      "MINUSTAH: Misión de Estabilización de las Naciones Unidas en Haití (2004 - 2008)",
    ],
  },
  {
    image: certificationLogo,
    id: 2, 
    title: "Personal Certificado",
    items: [
      "Certificaciones en EUSECA (European Security Academy)",
      "Entrenamiento en el CIGS (Centro de Instrucción de Guerra en la Selva)",
      "Credenciales de Legítimo Usuario (CLU) Actualizadas y Vigentes",
      "Permiso de Portación de Armas emitido por la Agencia Nacional de Materiales Controlados (ANMaC)",
    ],
  },
];
