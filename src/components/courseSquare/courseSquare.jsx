import "./courseSquare.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function CourseSquare({
  classNumber,
  creditHours,
  offered,
  name,
  prereqs,
}) {
  const [showPrereqs, setShowPrereqs] = useState(false);

  let borderColor;
  const prereqCount = prereqs.length;

  // Set border color based on number of prerequisites
  if (prereqCount === 0) {
    borderColor = "green";
  } else if (prereqCount === 1) {
    borderColor = "blue";
  } else if (prereqCount === 2) {
    borderColor = "yellow";
  } else if (prereqCount === 3) {
    borderColor = "purple";
  } else if (prereqCount === 4) {
    borderColor = "orange";
  } else {
    borderColor = "red";
  }

  // Toggle the visibility of prerequisites when the arrow icon is clicked
  const togglePrereqs = () => {
    setShowPrereqs(!showPrereqs);
  };

  // Define the possible seasons
  const seasons = ["Fall", "Winter", "Spring", "Summer"];

  // Helper function to determine if the course is offered in a specific season
  const renderSeason = (season) => {
    const isOffered = offered.includes(season); // Check if the course is offered in the season
    return (
      <span
        key={season}
        style={{ color: isOffered ? "black" : "grey", marginRight: "5px" }}
      >
        {season}
      </span>
    );
  };

  return (
    <div
      className="course-box"
      style={{ borderColor, borderStyle: "solid", borderWidth: "2px" }}
    >
      <p className="courseName">{name}</p>

      <p>
        {classNumber} | {creditHours} credits{" "}
        {seasons.map((season) => renderSeason(season))}
      </p>
      <p>
        Prerequisites: {prereqCount}{" "}
        <FontAwesomeIcon
          icon={showPrereqs ? faAngleUp : faAngleDown}
          onClick={togglePrereqs}
          style={{ cursor: "pointer" }}
        />
      </p>

      {/* Conditionally render the list of prerequisites if showPrereqs is true */}
      {showPrereqs && (
        <ul>
          {prereqs.length > 0 ? (
            prereqs.map((prereq, index) => <li key={index}>{prereq}</li>)
          ) : (
            <li>No prerequisites</li>
          )}
        </ul>
      )}
    </div>
  );
}
