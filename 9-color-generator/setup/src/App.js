import React, { useState } from "react";
import SingleColor from "./SingleColor";

import Values from "values.js";

function App() {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values("#f15025").all(10));

  const handleChange = (e) => {
    e.preventDefault();
    try {
      let colors = new Values("#f15025").all(10); //values is the library we are using values.js
      setList(colors);
    } catch (e) {
      setError(true);
      console.log(e);
    }
  };

  return (
    <>
      <section className="container">
        <h3>Color Genearator</h3>
        <form onSubmit={handleChange}>
          <input
            value={color}
            type="text"
            onChange={(e) => setColor(e.target.value)}
            placeholder="#f15025"
            className={`${error ? "error" : ""}`}
          />
          <button type="submit" className="btn">
            submit
          </button>
        </form>
      </section>
      <section className="colors">
        {list.map((color, index) => {
          return (
            <SingleColor
              key={index}
              {...color}
              index={index}
              hexColor={color.hex}
            />
          );
        })}
      </section>
    </>
  );
}

export default App;
