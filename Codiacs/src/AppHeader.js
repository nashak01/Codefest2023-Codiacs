import React from "react";
import { useNavigate } from "react-router-dom";
import backArrow from "./images/back-arrow.png";
import SafewordButton from "./safe-word/SafewordButton";

function AppHeader(props) {
  const navigate = useNavigate();

  return (
    <div
      className="row"
      style={{
        marginLeft: "2%",
        marginTop: "2%",
      }}
    >
      <div className="col-2">
        <button
          style={{ borderRadius: "15px", height: "40px" }}
          onClick={() => navigate("/")}
        >
          <img
            src={backArrow}
            alt="back arrow"
            style={{ height: "25px" }}
            draggable="false"
          />
          Back
        </button>
      </div>
      <div className="col-2 text-center">
        <SafewordButton />
      </div>
      <div className="col">
        <div className="text-center">
          <img
            src="img/LISTENING EAR CMYK.jpg"
            alt="Listening Ear logo"
            style={{ width: "100%" }}
            className="mb-3"
            draggable="false"
          />
        </div>
      </div>
      <div className="col">
        <h2 className="me-3">{props.title}</h2>
      </div>
    </div>
  );
}

export default AppHeader;
