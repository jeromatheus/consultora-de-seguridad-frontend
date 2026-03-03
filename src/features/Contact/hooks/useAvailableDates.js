import { useState, useEffect } from "react";
import { availableCourses as localCourseCategories } from "../../Services/data/courses";

export const useAvailableDates = (selectedCourseTitle) => {
  const [availableDates, setAvailableDates] = useState([]);
  const [loadingDates, setLoadingDates] = useState(false);

  useEffect(() => {
    if (!selectedCourseTitle) {
      setAvailableDates([]);
      return;
    }

    const fetchDatesForCourse = async () => {
      setLoadingDates(true);
      try {
        await new Promise((resolve) => setTimeout(resolve, 500));
        let foundDates = [];
        for (const category of localCourseCategories) {
          const foundCourse = category.items.find((c) => c.title === selectedCourseTitle);
          if (foundCourse && foundCourse.dates) {
            foundDates = foundCourse.dates;
            break;
          }
        }
        setAvailableDates(foundDates);
      } catch (error) {
        console.error("Error al buscar las fechas:", error);
        setAvailableDates([]);
      } finally {
        setLoadingDates(false);
      }
    };

    fetchDatesForCourse();
  }, [selectedCourseTitle]);

  return { availableDates, loadingDates };
};