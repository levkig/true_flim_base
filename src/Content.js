import React from "react";

const Content = ({ countries, index }) => {
  return (
    <div style={{ height: "200px" }}>
      <p>{countries?.[index]?.name}</p>
    </div>
  );
};

export default Content;
