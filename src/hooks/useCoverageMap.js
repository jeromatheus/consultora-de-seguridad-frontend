import { useState, useMemo } from "react";

const GOOGLE_MAP_BASE =
  "https://maps.google.com/maps?output=embed&z=13";

export const useCoverageMap = () => {
  const [selectedArea, setSelectedArea] = useState(null);

  const mapSrc = useMemo(() => {
    if (!selectedArea) {
      return `${GOOGLE_MAP_BASE}&q=San%20Miguel%20de%20Tucum%C3%A1n`;
    }

    return `${GOOGLE_MAP_BASE}&q=${encodeURIComponent(selectedArea)}`;
  }, [selectedArea]);

  const isActive = !!selectedArea;

  return {
    selectedArea,
    setSelectedArea,
    mapSrc,
    isActive,
  };
};