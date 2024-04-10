import { React } from "react";
import "../components/Button/Button.css";

function UsedEmotions(props) {
  const words = props.emotions;

  return (
    <>
      {words.map((word) => {
        return (
          <div key={word} className="used-emotion button">
            {word}
          </div>
        );
      })}
    </>
  );
}

export default UsedEmotions;
