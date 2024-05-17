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
        title: "HTML: Basic-to-Advanced",
        description:
          "All the Html tag and notes are given with proper explaination and a completion Certificate will be provided.",
      },
      {
        id: 2,
        title: "Complete CSS Bootcamp",
        description:
          "CSS Bootcamp to master styling from scratch with notes & completion Certificate will be provided.",
      },
      {
        id: 3,
        title: "JS: Zero-to-Hero",
        description:
          "Master JavaScript from scratch with notes & completion Certificate will be provided.",
      },
      {
        id: 4,
        title: "Basic React",
        description:
          "Strong start of React to make command on frontend framework.",
      },
      {
        id: 5,
        title: "Advanced React",
        description:
          "Dive deeper into React. Master React.js with notes & completion Certificate will be provided.",
      },
      {
        id: 6,
        title: "Basic Node.js",
        description:
          "Strong base of Node to make command on Backend framework.",
      },
      {
        id: 7,
        title: "Advanced Node.js",
        description:
          "Dive deeper into Node. Master Node.js with notes & completion Certificate will be provided.",
      },
      {
        id: 8,
        title: "MongoDB Wrap-up",
        description:
          "Have your Hold on DB using MongoDB with notes & completion Certificate will be provided.",
      },
    ];
    setCourses(data);
  }, []);

  return (
    <div className="course-listing-page">
      <h1 id="center-align">List of Courses</h1>
      <br />
      <h4>
        <strong>Are You Ready to Enroll ⌛</strong>
      </h4>
      <br />
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
