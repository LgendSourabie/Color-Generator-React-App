import React, { useState } from "react";
import Values from "values.js";
import ColorList from "./ColorList";
import { ToastContainer, toast } from "react-toastify";
const Form = () => {
  const [color, setColor] = useState("#000000");
  const [text, setText] = useState(color);
  const [list, setList] = useState([]);

  const handleChange = (e) => {
    setColor(e.target.value);
    setText(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const newList = new Values(text).all(10);

      setList(newList);
      toast.success("awesome");
    } catch (err) {
      toast.error("error message");
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="color-form"
        style={{ alignItems: "center" }}
      >
        <label className="form-label" htmlFor="color">
          Color generator
        </label>
        <input
          type="color"
          name="color"
          id="color"
          value={color}
          onChange={handleChange}
        />
        <input
          type="text"
          name="text"
          id="text"
          value={text}
          onChange={handleChange}
        />
        <button className="btn">submit</button>
      </form>
      <ColorList list={list} />
    </>
  );
};

export default Form;
