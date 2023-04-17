import React from "react";
import { Typography } from "antd";
import { Dropdown } from "./dropdown";

const { Title } = Typography;

export const Navbar = () => {
  const items = [
    { label: "Selection Sort", key: 1 },
    { label: "Bubble Sort", key: 2 },
    { label: "Insertion Sort", key: 3 },
    { label: "Merge Sort", key: 4 },
    { type: "divider" },
    { label: "Run", key: 5, danger: true },
  ];

  const childrenStyles: React.CSSProperties = {
    display: "inline-flex",
    margin: "20px 15px",
    width: "auto",
  };

  return (
    <div>
      <Title level={4} style={childrenStyles}>
        Sorting Visualizer
      </Title>
      <Dropdown items={items} />
    </div>
  );
};
