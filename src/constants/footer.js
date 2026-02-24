import arcaQr from "../assets/mockup_qr.png";

export const footerConfig = {
  arcaLink: "https://www.arca.gob.ar",

  logos: {
    desktop: "./logo_nameless.png",
    mobile: "./logo_named.png",
  },

  businessInfo: {
    schedule: "Lunes a Viernes 09:00 a 18:00 HS",
    location: "Yerba Buena, Tucumán, Argentina.",
    companyName: "Consultora de Seguridad Ortiz",
  },

  legalLinks: [
    {
      label: "Política de Privacidad",
      url: "https://www.argentina.gob.ar/aaip/datospersonales",
      title:
        "Agencia de Acceso a la Información Pública (Ley 25.326)",
    },
    {
      label: "Términos del Servicio",
      url: "https://www.argentina.gob.ar/produccion/defensadelconsumidor",
      title: "Dirección Nacional de Defensa del Consumidor",
    },
    {
      label: "Compliance y Ética",
      url: "https://www.argentina.gob.ar/anticorrupcion/rite",
      title:
        "Registro de Integridad y Transparencia para Empresas (Ley 27.401)",
    },
  ],

  arcaQr,
};