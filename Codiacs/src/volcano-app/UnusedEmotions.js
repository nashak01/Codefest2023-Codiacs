import { React } from "react";
import "./WordEmotion.css";

function UnusedEmotions(props) {
  const words = props.emotions;

  function handleOnDrag(e, emotion) {
    e.dataTransfer.setData("emotion", emotion);
  }

  return (
    <>
      {words.map((word) => {
        return (
          <div
            key={word}
            className="unused-emotion box"
            draggable
            onDragStart={(e) => handleOnDrag(e, word)}
          >
            {word}
          </div>
        );
      })}
    </>
  );
}

export default UnusedEmotions;
