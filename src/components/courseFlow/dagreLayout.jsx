import dagre from "dagre";

const nodeWidth = 280;
const nodeHeight = 120;

export const getLayoutedElements = (nodes, edges) => {
  const dagreGraph = new dagre.graphlib.Graph();
  dagreGraph.setDefaultEdgeLabel(() => ({}));

  // Define graph direction (Top-Bottom) and increase spacing between nodes
  dagreGraph.setGraph({
    rankdir: "TB",
    align: "UL",
    ranksep: 80, // Increase vertical space between nodes
    nodesep: 50, // Increase horizontal space between nodes
  });

  // Set node dimensions
  nodes.forEach((node) => {
    dagreGraph.setNode(node.id, { width: nodeWidth, height: nodeHeight });
  });

  // Set edges between nodes
  edges.forEach((edge) => {
    dagreGraph.setEdge(edge.source, edge.target);
  });

  // Apply Dagre layout
  dagre.layout(dagreGraph);

  // Update node positions based on Dagre's calculations
  const layoutedNodes = nodes.map((node) => {
    const nodeWithPosition = dagreGraph.node(node.id);
    return {
      ...node,
      position: {
        x: nodeWithPosition.x - nodeWidth / 2,
        y: nodeWithPosition.y - nodeHeight / 2,
      },
    };
  });

  return { nodes: layoutedNodes, edges };
};
