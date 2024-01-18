import React from "react";
import "./Textbox.css";

function Textbox(props: { size: string; label?: string; labelledBy?: string }) {
  const size: string = props.size;
  const label: string | undefined = props.label;
  const labelledBy: string | undefined = props.labelledBy;

  return labelledBy && size === "sm" ? (
    <input
      className="textbox"
      type="text"
      aria-multiline={false}
      aria-labelledby={labelledBy}
    />
  ) : labelledBy && size === "lg" ? (
    <textarea
      className="textbox"
      aria-multiline={true}
      aria-labelledby={labelledBy}
    />
  ) : size === "sm" ? (
    <input
      className="textbox"
      type="text"
      aria-multiline={false}
      aria-label={label}
    />
  ) : size === "lg" ? (
    <textarea className="textbox" aria-multiline={true} aria-label={label} />
  ) : (
    <></>
  );
}

export default Textbox;
