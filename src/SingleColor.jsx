import React from "react";

const SingleColor = ({ hex, weight }) => {
  return (
    <div className="color" style={{ backgroundColor: { hex } }}>
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{hex}</p>
    </div>
  );
};

export default SingleColor;
