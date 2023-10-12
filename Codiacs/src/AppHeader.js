import React from "react";
import backArrow from "./images/back-arrow.png";

function AppHeader(props) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "left",
        marginLeft: "2%",
        marginTop: "2%",
      }}
    >
      <button
        style={{ borderRadius: "15px", height: "40px" }}
        onClick={() => props.setPageValue("landing")}
      >
        <img src={backArrow} alt="back arrow" style={{ height: "25px" }} />
        Back
      </button>
      <div className="text-center">
        <img
          src="img/LISTENING EAR CMYK.jpg"
          alt="Listening Ear logo"
          style={{ width: "30%" }}
          className="mb-3"
        />
      </div>
      <h2 className="me-3">{props.title}</h2>
    </div>
  );
}

export default AppHeader;
