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
        description: "Learn the basics of React.",
      },
      {
        id: 2,
        title: "Advanced React",
        description: "Dive deeper into React.",
      },
    ];
    setEnrolledCourses(data);
  }, []);

  return (
    <div className="dashboard">
      <h1>Student Dashboard</h1>
      <div className="enrolled-courses">
        {enrolledCourses.map((course) => (
          <EnrolledCourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default StudentDashboard;
