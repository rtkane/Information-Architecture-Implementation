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
  // Helper function to get the style for each semester based on data
  const getSemesterStyle = (term) => {
    console.log(sessions);
    return sessions.includes(term) ? { color: "black" } : { color: "grey" };
  };

  const getCompletionStyle = () => {
    if (completionStatus === "Completed") {
      return { color: "black" };
    } else if (completionStatus === "Prerequisites Needed") {
      return { color: "red" };
    }
    return {};
  };

  return (
    <div className="course-box">
      <div className="left-label">
        <span>{category}</span>
      </div>
      <div className="right-content">
        <div className="course-info">
          <span className="course-code">{courseCode}</span> |
          <span className="course-credits"> {credits} </span> |
          {/* Display each term with conditional styling */}
          <span className="course-sessions">
            <span style={getSemesterStyle("W")}>W</span>
            <span style={getSemesterStyle("S")}> S</span>
            <span style={getSemesterStyle("S")}> S</span>
            <span style={getSemesterStyle("F")}> F</span>
          </span>
        </div>
        <div className="course-title">{title}</div>

        <div className="course-completion" style={getCompletionStyle()}>
          {completionStatus === "Add Course" ? (
            <button className="add-course-button">Add Course</button>
          ) : (
            completionStatus
          )}
        </div>
      </div>
    </div>
  );
};

export default CourseBox;
