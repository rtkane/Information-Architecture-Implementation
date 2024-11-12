import React from "react";
import ReactFlow, { MiniMap, Controls } from "reactflow";
import "reactflow/dist/style.css";
import CourseBox from "../courseSquare/courseBox";
import { getLayoutedElements } from "./dagreLayout"; // Import Dagre layout function

// Define course data
const courses = [
  {
    id: "1",
    category: "CS Core",
    courseCode: "CS 111",
    credits: 3,
    sessions: "W Sp Sm F",
    title: "Intro to Computer Science",
    completionStatus: "Completed Fall 2022",
  },
  {
    id: "2",
    category: "CS Core",
    courseCode: "CS 235",
    credits: 3,
    sessions: "W Sp F",
    title: "Data Structures",
    completionStatus: "Completed Winter 2023",
  },
  {
    id: "3",
    category: "CS Core",
    courseCode: "CS 236",
    credits: 3,
    sessions: "W Sp F",
    title: "Discrete Structures",
    completionStatus: "Completed Winter 2023",
  },
  {
    id: "4",
    category: "CS Core",
    courseCode: "CS 252",
    credits: 3,
    sessions: "W F",
    title: "Intro to Computer Theory",
    completionStatus: "Completed Winter 2023",
  },
  {
    id: "5",
    category: "CS Core",
    courseCode: "CS 224",
    credits: 3,
    sessions: "W Sm F",
    title: "Computer Systems",
    completionStatus: "Completed Winter 2023",
  },
  {
    id: "6",
    category: "CS Core",
    courseCode: "CS 240",
    credits: 3,
    sessions: "W Sp F",
    title: "Adv Software Construction",
    completionStatus: "Add Course",
  },
  {
    id: "7",
    category: "CS Core",
    courseCode: "CS 324",
    credits: 3,
    sessions: "W F",
    title: "System Programming",
    completionStatus: "Prerequisites Needed",
  },
  {
    id: "8",
    category: "CS Core",
    courseCode: "CS 340",
    credits: 3,
    sessions: "W S S F",
    title: "Software Design",
    completionStatus: "Prerequisites Needed",
  },
  {
    id: "9",
    category: "CS Core",
    courseCode: "CS 312",
    credits: 3,
    sessions: "W F",
    title: "Algorithm Design & Analysis",
    completionStatus: "Prerequisites Needed",
  },
  {
    id: "10",
    category: "CS Core",
    courseCode: "CS 404",
    credits: 2,
    sessions: "W F",
    title: "Ethics & Computers in Society ",
    completionStatus: "Prerequisites Needed",
  },
  {
    id: "11",
    category: "Elective",
    courseCode: "CS 180",
    credits: 3,
    sessions: "W",
    title: "Introduction to Data Science",
    completionStatus: "Add Course",
  },
];

// Generate nodes dynamically
const initialNodes = courses.map((course) => ({
  id: course.id,
  data: {
    label: (
      <CourseBox
        category={course.category}
        courseCode={course.courseCode}
        credits={course.credits}
        sessions={course.sessions}
        title={course.title}
        completionStatus={course.completionStatus}
      />
    ),
  },
  style: { width: "250px", border: "none", padding: "10px" }, // Add padding to increase spacing visually
  type: "default",
  sourcePosition: "bottom",
  targetPosition: "top",
}));

// Define edges between courses
const initialEdges = [
  { id: "e1-2", source: "1", target: "2", type: "smoothstep" }, // CS 111 -> CS 235 (Bottom)
  { id: "e1-180", source: "1", target: "11", type: "smoothstep" }, // CS 111 -> CS 180 (Right)
  { id: "e2-236", source: "2", target: "3", type: "smoothstep" }, // CS 235 -> CS 236 (Bottom)
  { id: "e2-224", source: "2", target: "5", type: "smoothstep" }, // CS 235 -> CS 224 (Right)
  { id: "e3-252", source: "3", target: "4", type: "smoothstep" }, // CS 236 -> CS 252 (Bottom)
  { id: "e5-240", source: "5", target: "6", type: "smoothstep" }, // CS 224 -> CS 240 (Bottom)
  { id: "e5-324", source: "5", target: "7", type: "smoothstep" }, // CS 224 -> CS 324 (Right)
  { id: "e6-340", source: "6", target: "8", type: "smoothstep" }, // CS 240 -> CS 240 (Bottom)
  { id: "e5-324", source: "5", target: "7", type: "smoothstep" }, // CS 240 -> CS 324 (Right)
  { id: "340-312", source: "8", target: "9", type: "smoothstep" }, // CS 340 -> CS 312 (Right)
  { id: "340-404", source: "8", target: "10", type: "smoothstep" }, // CS 340 -> CS 312 (Right)
];

const FlowChart = () => {
  const { nodes, edges } = getLayoutedElements(initialNodes, initialEdges);

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        fitView
        style={{
          backgroundColor: "none",
        }}
      >
        <MiniMap
          nodeColor={(node) =>
            node.data.category === "CS Core" ? "#d0e6f5" : "#f5e0e0"
          }
        />
        <Controls />
      </ReactFlow>
    </div>
  );
};

export default FlowChart;
