// src/components/EnrolledCourseCard.js
import React from "react";

const EnrolledCourseCard = ({ course }) => {
  return (
    <div className="enrolled-course-card" id="big">
      Enrolled ✅
      <br />
      <br />
      <h2 id="center-align">{course.title}</h2>
      <h3 id="center-align">
        <em>.....⌛.....</em>
      </h3>
      <br />
      <p>{course.description}</p>
    </div>
  );
};

export default EnrolledCourseCard;
