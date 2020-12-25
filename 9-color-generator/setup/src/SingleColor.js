import React, { useState, useEffect } from "react";
import rgbToHex from "./utils"; //stack overFlow func to cover rgb to hex

const SingleColor = ({ rgb, weight, index, hexColor }) => {
  const [alert, setAlert] = useState(false);
  const bcg = rgb.join(",");
  const hexcolor = `#${hexColor}`;

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setAlert(false);
    }, 2000);
    return () => clearTimeout(timeOut);
  }, [alert]);
  return (
    <article
      className={`color ${index > 10 && "color-light"}`}
      style={{ backgroundColor: `rgb(${bcg})` }}
      onClick={(e) => {
        setAlert(true);
        navigator.clipboard.writeText(hexcolor);
      }}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{hexcolor}</p>
      {alert && <p className="alert">Copied to clipboard</p>}
    </article>
  );
};

export default SingleColor;
