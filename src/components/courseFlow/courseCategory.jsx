// CourseCategory.js
import React from "react";
import CourseBox from "../courseSquare/courseBox";
import "./courseList.css";

const CourseCategory = ({ title, courses }) => {
  return (
    <div className="course-category">
      <div className="category-title">{title}</div>
      <div className="course-list">
        {courses.map((course, index) => (
          <CourseBox key={index} {...course} />
        ))}
      </div>
    </div>
  );
};

export default CourseCategory;
