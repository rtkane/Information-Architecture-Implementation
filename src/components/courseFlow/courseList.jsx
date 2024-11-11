// CourseList.js
import React from "react";
import CourseCategory from "./courseCategory";
import "./courseList.css";

// const CourseList = () => {
//   const coreCourses = [
//     {
//       code: "CS 111",
//       credits: 3,
//       semester: "W S S F",
//       title: "Intro to Computer Science",
//       status: "Completed Fall 2022",
//       isElective: false,
//     },
//     {
//       code: "CS 235",
//       credits: 3,
//       semester: "W S S F",
//       title: "Intro to Computer Science",
//       status: "Completed Winter 2023",
//       isElective: false,
//     },
//     {
//       code: "CS 236",
//       credits: 3,
//       semester: "W S S F",
//       title: "Discrete Structures",
//       status: "Completed Winter 2023",
//       isElective: false,
//     },
//     {
//       code: "CS 252",
//       credits: 3,
//       semester: "W S S F",
//       title: "Intro to Computer Theory",
//       status: "Completed Winter 2023",
//       isElective: false,
//     },
//     {
//       code: "CS 224",
//       credits: 3,
//       semester: "W S S F",
//       title: "Intro to Computer Systems",
//       status: "Completed Winter 2023",
//       isElective: false,
//     },
//     {
//       code: "CS 240",
//       credits: 3,
//       semester: "W S S F",
//       title: "Advanced Programming",
//       status: "Add Course",
//       isElective: false,
//     },
//     {
//       code: "CS 340",
//       credits: 3,
//       semester: "W S S F",
//       title: "Design and Testing",
//       status: "Completed Winter 2023",
//       isElective: false,
//     },
//     {
//       code: "CS 324",
//       credits: 3,
//       semester: "W S S F",
//       title: "System Programming",
//       status: "Prerequisites Needed",
//       isElective: false,
//       hasPrerequisite: true,
//     },
//     {
//       code: "CS 312",
//       credits: 3,
//       semester: "W S S F",
//       title: "Algorithm Analysis",
//       status: "Prerequisites Needed",
//       isElective: false,
//       hasPrerequisite: true,
//     },
//   ];

//   const electiveCourses = [
//     {
//       code: "CS 111",
//       credits: 3,
//       semester: "W S S F",
//       title: "Intro to Computer Science",
//       status: "Add Course",
//       isElective: true,
//     },
//   ];

//   return (
//     <div className="course-list-container">
//       <h1>Computer Science Course List</h1>
//       <div className="cs-courses-banner">CS Courses</div>
//       <div className="categories">
//         <CourseCategory title="CS Core" courses={coreCourses} />
//         <CourseCategory title="Elective" courses={electiveCourses} />
//       </div>
//     </div>
//   );
// };

export default CourseList;
