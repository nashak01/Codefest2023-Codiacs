import React from "react";
//import "./memory.css";

function Memory(props) {
  return (
    <div
      key="1"
      className="box"
      // draggable
      // onDragStart={(e) => handleOnDrag(e, word)}
    >
      {props.memory}
    </div>
  );
}

export default Memory;
