import { useState, useMemo } from "react";

export const useCourseFilter = (availableCourses) => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const displayedCourses = useMemo(() => {
    if (!availableCourses || availableCourses.length === 0) return [];
    
    return selectedCategory === "all"
      ? availableCourses.flatMap((category) => category.items)
      : availableCourses.find((category) => category.name === selectedCategory)?.items || [];
  }, [availableCourses, selectedCategory]);

  return {
    selectedCategory,
    setSelectedCategory,
    displayedCourses
  };
};