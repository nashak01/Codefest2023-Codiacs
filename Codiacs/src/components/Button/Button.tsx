import React from "react";
import "./Button.css";

export interface ButtonComponentProps {
  media?: any;
  children: string;
  onClick: Function;
}

function Button({ media, children, onClick }: ButtonComponentProps) {
  return (
    <button className="button" onClick={() => onClick()}>
      {media && <span className="media-span">{media}</span>}
      <span>{children}</span>
    </button>
  );
}

export default Button;
