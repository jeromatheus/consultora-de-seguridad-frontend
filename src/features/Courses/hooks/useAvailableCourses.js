import { useState, useEffect } from "react";
import { availableCourses as localCourseCategories } from "../data/courses"; 

export const useAvailableCourses = () => {
  const [availableCourses, setAvailableCourses] = useState([]);
  const [loadingAvailableCourses, setLoadingAvailableCourses] = useState(true);
  const [errorAvailableCourses, setErrorAvailableCourses] = useState(null);

  useEffect(() => {
    const fetchAvailableCourses = async () => {
      setLoadingAvailableCourses(true);
      try {
        await new Promise((resolve) => setTimeout(resolve, 800));
        setAvailableCourses(localCourseCategories);
      } catch (err) {
        setErrorAvailableCourses("Error al cargar los programas disponibles.");
      } finally {
        setLoadingAvailableCourses(false);
      }
    };

    fetchAvailableCourses();
  }, []);

  return { availableCourses, loadingAvailableCourses, errorAvailableCourses };
};