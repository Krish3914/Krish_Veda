// src/components/Sidebar.js
import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaBook, FaUserGraduate } from "react-icons/fa";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <h2>CourseApp</h2>
      </div>
      <nav className="sidebar-nav">
        <ul>
          <li>
            <Link to="/">
              <FaHome /> Home
            </Link>
          </li>
          <li>
            <Link to="/dashboard">
              <FaUserGraduate /> Dashboard
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
