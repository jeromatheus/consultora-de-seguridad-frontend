import { useCallback } from 'react';

export const useScrollTo = (offset = 90) => {
  // offset = 90px (ajustable según la altura de tu Header)
  const scrollTo = useCallback((id) => {
    const element = document.getElementById(id);
    
    if (element) {
      // 1. Obtenemos la posición absoluta del elemento
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      
      // 2. Restamos el offset (altura del header)
      const offsetPosition = elementPosition - offset;

      // 3. Ejecutamos el scroll nativo suave
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }, [offset]);

  return scrollTo;
};