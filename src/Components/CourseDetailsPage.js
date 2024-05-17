// src/components/CourseDetailsPage.js
import React from "react";
import { useParams } from "react-router-dom";

const CourseDetailsPage = () => {
  const { id } = useParams();

  // Simulated data fetching
  const course = {
    id: id,
    title: `Course ${id}`,
    description: `Description for Course ${id}`,
  };

  return (
    <div className="course-details-page">
      <h1>{course.title}</h1>
      <p>{course.description}</p>
    </div>
  );
};

export default CourseDetailsPage;
