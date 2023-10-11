import { React } from "react";
import "./WordEmotion.css";

function UnusedEmojiEmotions(props) {
  const emojis = props.emotions;

  function handleOnDrag(e, emoji) {
    e.dataTransfer.setData("emotion", JSON.stringify(emoji));
    //console.log(emoji.symbol);
    //console.log(emoji);
    console.log(e.dataTransfer.getData("emotion"));
  }

  //console.log(emojis);

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
