import React from "react";

import { nanoid } from "nanoid";
import SingleColor from "./SingleColor";
const ColorList = ({ list }) => {
  //   console.log(list[1].hexString());

  return (
    <div className="colors">
      {list.map((color) => {
        const val = color.hexString();
        return <SingleColor key={nanoid()} hex={val} weight={color.weight} />;
      })}
    </div>
  );
};

export default ColorList;
