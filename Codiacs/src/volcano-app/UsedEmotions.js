import { React } from "react";
import "./WordEmotion.css";

function UsedEmotions(props) {
  const words = props.emotions;

  return (
    <>
      {words.map((word) => {
        return (
          <div key={word} className="used-emotion box">
            {word}
          </div>
        );
      })}
    </>
  );
}

export default UsedEmotions;
