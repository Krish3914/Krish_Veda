// src/components/EnrolledCourseCard.js
import React from "react";

const EnrolledCourseCard = ({ course }) => {
  return (
    <div className="enrolled-course-card">
      <h2>{course.title}</h2>
      <p>{course.description}</p>
    </div>
  );
};

export default EnrolledCourseCard;
