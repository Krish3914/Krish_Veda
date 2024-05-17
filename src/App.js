// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CourseListingPage from "./Components/CourseListingPage";
import CourseDetailsPage from "./Components/CourseDetailsPage";
import StudentDashboard from "./Components/StudentDashboard";
import Sidebar from "./Components/Sidebar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <div className="content">
          <Routes>
            <Route path="/" element={<CourseListingPage />} />
            <Route path="/course/:id" element={<CourseDetailsPage />} />
            <Route path="/dashboard" element={<StudentDashboard />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
