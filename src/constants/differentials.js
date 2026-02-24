import data_protection_logo from "../assets/differentials/data_protection_logo.png";
import veterans_logo from "../assets/differentials/veterans_logo.png";
import region_logo from "../assets/differentials/region_logo.png";
import license_card_logo from "../assets/differentials/license_card_logo.png";
import intelligence_logo from "../assets/differentials/intelligence_logo.png";
import euseca_logo from "../assets/differentials/euseca_logo.png";

export const differentials = [
  { 
    id: 1, 
    title: "Veteranos Argentinos", 
    isLink: false, 
    logo: veterans_logo 
  },
  {
    id: 2,
    title: "Conocimiento Regional Exclusivo",
    isLink: false,
    logo: region_logo,
  },
  {
    id: 3,
    title: "Inteligencia Estratégica",
    isLink: false,
    logo: intelligence_logo,
  },
  {
    id: 4,
    title: "Instructores Certificados en EUSECA",
    isLink: true,
    logo: euseca_logo,
    link: "https://www.euseca.com/course/combined-firearms/", 
  },
  {
    id: 5,
    title: "Personal con CLU y Portación (ANMaC)",
    isLink: true,
    logo: license_card_logo,
    link: "https://www.argentina.gob.ar/seguridad/renar", 
  },
  {
    id: 6,
    title: "Ley 25.326 de Seguridad de Datos",
    isLink: true,
    logo: data_protection_logo,
    link: "https://www.argentina.gob.ar/normativa/nacional/ley-25326-64790/texto",
  },  
];