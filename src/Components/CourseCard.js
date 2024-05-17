// src/components/CourseCard.js
import React from "react";

const CourseCard = ({ course }) => {
  return (
    <div className="course-card" id="big1">
      <h2>{course.title}</h2>
      <br/>
      <p>{course.description}</p>
    </div>
  );
};

export default CourseCard;
