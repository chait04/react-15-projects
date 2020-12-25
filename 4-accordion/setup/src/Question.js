import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const Question = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <div onClick={() => setShowInfo(!showInfo)} className="btn">
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </div>
      </header>
      {/* <p>{showInfo ? info : ""}</p> */}
      {showInfo && <p>{info}</p>}
    </article>
  );
};

export default Question;
