// src/components/StudentDashboard.js
import React, { useState, useEffect } from "react";
import EnrolledCourseCard from "./EnrolledCourseCard";

const StudentDashboard = () => {
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  useEffect(() => {
    // Simulated fetching enrolled courses data
    const data = [
      {
        id: 1,
        title: "React Basics",
        description:
          "Strong start of React to make command on frontend framework.",
      },
      {
        id: 2,
        title: "Advanced React",
        description:
          "Dive deeper into React. Master React.js with notes & completion Certificate will be provided.",
      },
    ];
    setEnrolledCourses(data);
  }, []);

  return (
    <div className="dashboard">
      <h1 id="center-align">Student Dashboard</h1>
      <br />
      <h4>
        <strong>
          Lets Start the Journey of <em>Effective Learning</em> Together.⌛
          <br />
          <br /> 🚀 Open the Course you would make strong command on..
        </strong>
      </h4>
      <br />
      <div className="enrolled-courses" id="center-align1">
        {enrolledCourses.map((course) => (
          <EnrolledCourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default StudentDashboard;
