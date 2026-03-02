export const scrollWithOffset = (el) => {
  const yCoordinate = el.getBoundingClientRect().top + window.scrollY;
  const yOffset = -80; // Altura en px del navbar
  
  window.scrollTo({ 
    top: yCoordinate + yOffset, 
    behavior: 'smooth' 
  });
};