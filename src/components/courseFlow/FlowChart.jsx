import React, { useEffect, useState } from "react";
import ReactFlow, { MiniMap, Controls } from "reactflow";
import "reactflow/dist/style.css";
import CourseBox from "../courseSquare/courseBox";
import { getLayoutedElements } from "./dagreLayout";

const FlowChart = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("/courses.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log("Fetched course data:", data); // Check if data is loaded
        setCourses(data);
      })
      .catch((error) => console.error("Error loading course data:", error));
  }, []);

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
    style: { width: "250px", border: "none", padding: "10px" },
    type: "default",
    sourcePosition: "bottom",
    targetPosition: "top",
  }));

  // Define edges (this should be present in your component or imported)
  const initialEdges = [
    {
      id: "e1-2",
      source: "1",
      target: "2",
      type: "smoothstep",
      animated: true,
    },
    {
      id: "e2-3",
      source: "2",
      target: "3",
      type: "smoothstep",
      animated: true,
    },
    // Add other edges as needed
  ];

  const { nodes, edges } = getLayoutedElements(initialNodes, initialEdges);

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        fitView
        style={{ backgroundColor: "#f0f4f8" }}
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
