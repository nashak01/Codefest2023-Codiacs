import { React, useState } from "react";
import "./memory.css";

function Memory(props) {
  const [amount, setAmount] = useState(0);

  var borderColour = props.memoryColour;
  if (props.memoryColour === "#ffffff") {
    borderColour = "#000000";
  }

  return (
    <div
      style={{ display: "flex", justifyContent: "center" }}
      onClick={props.onClick}
    >
      <div
        className="memory-icon"
        style={{
          border: "1px solid " + borderColour,
          backgroundColor: props.memoryColour,
        }}
      >
        <div className="memory-text">{props.memory}</div>

        {props.showSlider && (
          <div className="form-group mt-2">
            <input
              type="range"
              className="form-control-range"
              id="amountSlider"
              value={amount}
              onChange={(e) => {
                setAmount(e.target.value);
                props.amounts[props.counter] = e.target.value;
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default Memory;
