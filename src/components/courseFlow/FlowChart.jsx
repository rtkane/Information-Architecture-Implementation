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
    sessions: "W S S F",
    title: "Intro to Computer Science",
    completionStatus: "Completed Fall 2022",
  },
  {
    id: "2",
    category: "CS Core",
    courseCode: "CS 235",
    credits: 3,
    sessions: "W S S F",
    title: "Intro to Computer Science",
    completionStatus: "Completed Winter 2023",
  },
  {
    id: "3",
    category: "CS Core",
    courseCode: "CS 236",
    credits: 3,
    sessions: "W S S F",
    title: "Discrete Structures",
    completionStatus: "Completed Winter 2023",
  },
  {
    id: "4",
    category: "CS Core",
    courseCode: "CS 252",
    credits: 3,
    sessions: "W S S F",
    title: "Intro to Computer Theory",
    completionStatus: "Completed Winter 2023",
  },
  {
    id: "5",
    category: "CS Core",
    courseCode: "CS 224",
    credits: 3,
    sessions: "W S S F",
    title: "Intro to Computer Systems",
    completionStatus: "Completed Winter 2023",
  },
  {
    id: "6",
    category: "CS Core",
    courseCode: "CS 240",
    credits: 3,
    sessions: "W S S F",
    title: "Advanced Programming",
    completionStatus: "Add Course",
  },
  {
    id: "7",
    category: "CS Core",
    courseCode: "CS 324",
    credits: 3,
    sessions: "W S S F",
    title: "System Programming",
    completionStatus: "Prerequisites Needed",
  },
  {
    id: "8",
    category: "CS Core",
    courseCode: "CS 340",
    credits: 3,
    sessions: "W S S F",
    title: "Design and Testing",
    completionStatus: "Completed Winter 2023",
  },
  {
    id: "9",
    category: "CS Core",
    courseCode: "CS 312",
    credits: 3,
    sessions: "W S S F",
    title: "Algorithm Analysis",
    completionStatus: "Prerequisites Needed",
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
  { id: "e1-2", source: "1", target: "2", type: "smoothstep", animated: true },
  { id: "e2-3", source: "2", target: "3", type: "smoothstep", animated: true },
  { id: "e3-4", source: "3", target: "4", type: "smoothstep", animated: true },
  { id: "e4-8", source: "4", target: "8", type: "smoothstep", animated: true },
  {
    id: "e5-7",
    source: "5",
    target: "7",
    type: "straight",
    label: "Prerequisites Needed",
    style: { stroke: "red" },
    labelStyle: { fill: "red" },
  },
  {
    id: "e6-9",
    source: "6",
    target: "9",
    type: "straight",
    label: "Prerequisites Needed",
    style: { stroke: "red" },
    labelStyle: { fill: "red" },
  },
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
          backgroundColor: "#f0f4f8",
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
