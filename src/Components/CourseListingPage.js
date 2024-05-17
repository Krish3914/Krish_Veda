// src/components/CourseListingPage.js
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CourseCard from "./CourseCard";

const CourseListingPage = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    // Simulated data fetching
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
    setCourses(data);
  }, []);

  return (
    <div className="course-listing-page">
      <h1>Course Listing Page</h1>
      <div className="course-list">
        {courses.map((course) => (
          <Link key={course.id} to={`/course/${course.id}`}>
            <CourseCard course={course} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CourseListingPage;
