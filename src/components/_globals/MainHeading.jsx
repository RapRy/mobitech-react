import React from "react";
import "./index.css";

const MainHeading = ({ text, color }) => {
  return (
    <h1 className="main-heading" data-heading-color={color}>
      {text}
    </h1>
  );
};

export default MainHeading;
