import { React } from "react";
import "./WordEmotion.css";

function UnusedEmojiEmotions(props) {
  const emojis = props.emotions;

  function handleOnDrag(e, emoji) {
    e.dataTransfer.setData("emotion", JSON.stringify(emoji));
  }

  return (
    <>
      {emojis.map((emoji) => {
        return (
          <div
            key={emoji.label}
            className="box"
            draggable
            onDragStart={(e) => handleOnDrag(e, emoji)}
          >
            <span
              className="emoji"
              role="img"
              aria-label={emoji.label ? emoji.label : ""}
              aria-hidden={emoji.label ? "false" : "true"}
            >
              {emoji.symbol}
            </span>
          </div>
        );
      })}
    </>
  );
}

export default UnusedEmojiEmotions;
