import { React, useState } from "react";
//import "./memory.css";

function Memory(props) {
  const [amount, setAmount] = useState(0);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div
        key={props.counter}
        id={props.counter}
        className="box"
        style={{ height: "80px" }}
      >
        {props.memory}
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
      </div>
      {/* <div>
        <input type="color" style={{ height: "80px" }} />
      </div> */}
    </div>
  );
}

export default Memory;
