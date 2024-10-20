import React from "react";
import "./courseFlow.css";
import CourseSquare from "../courseSquare/courseSquare";
import courses from "../../courses.json";

export default function CourseFlow() {
  // Group courses by the number of prerequisites
  const groupedCourses = {
    0: [], // Courses with 0 prerequisites
    1: [], // Courses with 1 prerequisite
    2: [], // Courses with 2 prerequisites
    3: [], // Courses with 3 or more prerequisites
  };

  // Iterate through the courses and categorize them
  courses.forEach((course) => {
    const prereqCount = course.prereqs.length; // Get the number of prerequisites
    if (prereqCount >= 3) {
      groupedCourses[3].push(course);
    } else {
      groupedCourses[prereqCount].push(course);
    }
  });

  return (
    <div className="course-container">
      <h1>Computer Science Course List</h1>
      <div className="core-courses">
        <h2>Core Courses</h2>
        <div className="course-flow">
          {Object.keys(groupedCourses).map((key) => (
            <div className="course-column" key={key}>
              {groupedCourses[key].map((course, index) => (
                <CourseSquare
                  key={index}
                  classNumber={course.classNumber}
                  creditHours={course.creditHours}
                  offered={course.offered}
                  name={course.name}
                  prereqs={course.prereqs}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
