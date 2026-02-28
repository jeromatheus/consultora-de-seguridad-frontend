export const PAGE_PATHS = {
  HOME: "/",
  COURSES: "/cursos",
};

export const SECTION_IDS = {
  START: "inicio",
  ABOUT_US: "nosotros",
  SERVICES: "servicios",
  DIFFERENTIAL: "diferencial",
  CONTACT: "contacto",
};

export const routes = [
  { 
    id: SECTION_IDS.START, 
    label: "Inicio", 
    path: `${PAGE_PATHS.HOME}#${SECTION_IDS.START}` 
  },
  { 
    id: SECTION_IDS.ABOUT_US, 
    label: "Nosotros", 
    path: `${PAGE_PATHS.HOME}#${SECTION_IDS.ABOUT_US}` 
  },
  { 
    id: SECTION_IDS.SERVICES, 
    label: "Servicios", 
    path: `${PAGE_PATHS.HOME}#${SECTION_IDS.SERVICES}` 
  },
  { 
    id: SECTION_IDS.DIFFERENTIAL, 
    label: "Diferencial", 
    path: `${PAGE_PATHS.HOME}#${SECTION_IDS.DIFFERENTIAL}` 
  },
  { 
    id: SECTION_IDS.CONTACT, 
    label: "Contacto", 
    path: `${PAGE_PATHS.HOME}#${SECTION_IDS.CONTACT}` 
  },
];