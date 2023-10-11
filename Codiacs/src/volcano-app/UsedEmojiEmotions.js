import { React } from "react";
import "./WordEmotion.css";

function UsedEmojiEmotions(props) {
  const emojis = props.emotions;

  return (
    <>
      {emojis.map((emoji) => {
        return (
          <div key={emoji} className="box">
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

export default UsedEmojiEmotions;
