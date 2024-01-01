import React from "react";

import { nanoid } from "nanoid";
import SingleColor from "./SingleColor";
const ColorList = ({ list }) => {
  return (
    <div className="colors">
      {list.map((color, i) => {
        const val = color.hexString();
        return <SingleColor key={nanoid()} hex={val} weight={color.weight} />;
      })}
    </div>
  );
};

export default ColorList;
