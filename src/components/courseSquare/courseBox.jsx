import React from "react";
import "./CourseBox.css"; // Import the CSS for styling

const CourseBox = ({
  category,
  courseCode,
  credits,
  sessions,
  title,
  completionStatus,
}) => {
  return (
    <div className="course-box">
      <div className="left-label">
        <span>{category}</span>
      </div>
      <div className="right-content">
        <div className="course-info">
          <span className="course-code">{courseCode}</span> |
          <span className="course-credits"> {credits} </span> |
          <span className="course-sessions"> {sessions}</span>
        </div>
        <div className="course-title">{title}</div>
        <div
          className={`course-completion ${
            completionStatus === "Add Course" ? "add-course" : ""
          }`}
        >
          {completionStatus}
        </div>
      </div>
    </div>
  );
};

export default CourseBox;
