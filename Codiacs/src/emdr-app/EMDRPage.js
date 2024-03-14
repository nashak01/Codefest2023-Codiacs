import React, { useState, useEffect } from "react";
import "./EMDR.css";
import AppBackground from "../AppBackground";

const EMDRPage = (props) => {
  const [speed, setSpeed] = useState(5);
  const [size, setSize] = useState(50);
  const [theme, setTheme] = useState("light");
  const [fullScreen, setFullScreen] = useState(false);
  const [isMoving, setIsMoving] = useState(true);

  const handleStartStop = () => {
    setIsMoving(!isMoving);
    const animations = window.document?.querySelectorAll("[data-animation]");
    animations.forEach((animation) => {
      const running = animation.style.animationPlayState || "running";
      animation.style.animationPlayState =
        running === "running" ? "paused" : "running";
    });
  };

  useEffect(() => {
    const dotElement = document.getElementById("dot");
    dotElement.style.setProperty("--animdur", `${11 - speed}s`);
  }, [speed]);

  useEffect(() => {
    let dot = document.getElementById("dot");
    dot.style.setProperty("--w", `${size * 1.5}px`);
  }, [size]);

  useEffect(() => {
    let dot = document.getElementById("dot");
    dot.style.backgroundColor = theme === "dark" ? "white" : "black";
  }, [theme]);

  return (
    <>
      <AppBackground setPageValue={props.setPageValue}/>
      <div
        data-testid="emdrPage"
        className={`${theme === "dark" ? " bg-dark text-light" : ""}`}
      >
        <div className="row" style={{marginTop: "22vh"}}>
          <div className="col-sm-6 offset-sm-3">
            {!fullScreen && (
              <>
                <div className="form-group mt-2">
                  <label htmlFor="sizeSlider" className="me-2">
                    <b>Size</b>
                  </label>
                  <input
                    type="range"
                    className="form-control-range"
                    id="sizeSlider"
                    value={size}
                    onChange={(e) => setSize(e.target.value)}
                    aria-label="Adjust size"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    aria-valuenow={size}
                  />
                </div>
                <span>Size: {size}</span>

                <div className="form-group m-2">
                  <label htmlFor="speedSlider" className="me-2">
                    <b>Speed</b>
                  </label>
                  <input
                    type="range"
                    className="form-control-range"
                    id="speedSlider"
                    max="10"
                    value={speed}
                    onChange={(e) => setSpeed(e.target.value)}
                    aria-label="Adjust speed"
                    aria-valuemin="0"
                    aria-valuemax="10"
                    aria-valuenow={speed}
                  />
                </div>
                <span>Speed: {speed}</span>

                <div className="form-group my-2">
                  <label htmlFor="themeSelect">
                    <b>Background</b>
                  </label>
                  <select
                    className="form-control"
                    id="themeSelect"
                    value={theme}
                    onChange={(e) => setTheme(e.target.value)}
                    aria-label="Select background theme"
                  >
                    <option value="light">Light</option>
                    <option value="dark">Dark</option>
                  </select>
                </div>
              </>
            )}
            <button
              id="js-toggle"
              className={
                "btn btn-" + (isMoving ? "danger" : "success") + " m-2 mb-5"
              }
              onClick={() => handleStartStop()}
              aria-label={isMoving ? "Stop movement" : "Start movement"}
            >
              {isMoving ? "Stop" : "Start"}
            </button>
            <button
              className="btn btn-primary m-2 mb-5"
              onClick={() => setFullScreen(!fullScreen)}
              aria-label={fullScreen ? "Show settings" : "Hide settings"}
            >
              {fullScreen ? "Show settings" : "Hide settings"}
            </button>
          </div>
          <div className="row mt-5">
            <div className="col">
              <div className="dot-container">
                <div
                  id="dot"
                  className="dot a-slide"
                  data-animation="stop"
                  aria-label="Moving dot"
                  role="img"
                ></div>
              </div>
            </div>
          </div>
          <button
          class="button back_button"
          onClick={() => props.setPageValue("landing")}
          >
            <i class="fas_back_arrow fa-solid fa-arrow-left" alt="back button"></i>
            Back
          </button>
        </div>
      </div>
    </>
  );
};

export default EMDRPage;
