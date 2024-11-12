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

  // Determine the styles based on the category
  const isCSCore = category === "CS Core";
  const labelStyle = isCSCore
    ? {} // Keep the default style for CS Core
    : { backgroundColor: "#59adc4", color: "#eeeeee" }; // Change the background and text color for other categories

  const borderStyle = isCSCore ? {} : { borderColor: "#59adc4" }; // Change border color for non-CS Core categories

  return (
    <div className="course-box" style={borderStyle}>
      <div className="left-label" style={labelStyle}>
        <span>{category}</span>
      </div>
      <div className="right-content">
        <div className="course-info">
          <span className="course-code">{courseCode}</span> |
          <span className="course-credits"> {credits} </span> |
          <span className="course-sessions">
            <span style={getSemesterStyle("W")}>W</span>
            <span style={getSemesterStyle("Sp")}> S</span>
            <span style={getSemesterStyle("Sm")}> S</span>
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
