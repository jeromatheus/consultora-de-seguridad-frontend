import { useState, useEffect } from "react";

export const useSmartHeader = (threshold = 10) => {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Determinamos la dirección del scroll
      const scrollingUp = currentScrollY < lastScrollY;
      const scrollDifference = Math.abs(currentScrollY - lastScrollY);

      // Solo actualizamos si el movimiento supera el umbral (evita parpadeos)
      if (scrollDifference > threshold) {
        if (currentScrollY < 100) {
          setVisible(true); // Siempre visible arriba de todo
        } else {
          setVisible(scrollingUp);
        }
        setLastScrollY(currentScrollY);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, threshold]);

  return visible;
};