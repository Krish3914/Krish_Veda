// src/components/CourseCard.js
import React from "react";

const CourseCard = ({ course }) => {
  return (
    <div className="course-card">
      <h2>{course.title}</h2>
      <p>{course.description}</p>
    </div>
  );
};

export default CourseCard;
