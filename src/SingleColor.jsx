import React from "react";

const SingleColor = ({ hex, weight }) => {
  async function copyToClipboard(text) {
    try {
      await navigator.clipboard.writeText(text);
      console.log("Color copied to clipboard");
    } catch (error) {
      console.error("Failed to copy text: ", error);
    }
  }
  copyToClipboard(hex);
  return (
    <div className="color" style={{ backgroundColor: `${hex}` }}>
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{hex}</p>
    </div>
  );
};

export default SingleColor;
