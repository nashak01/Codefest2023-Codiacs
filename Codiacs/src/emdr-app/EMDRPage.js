import React, { useState, useEffect } from "react";
import "./EMDR.css";
import AppBackground from "../AppBackground";

const EMDRPage = (props) => {
  const [speed, setSpeed] = useState("5");
  const [size, setSize] = useState(50);
  const [theme, setTheme] = useState("light");
  const [fullScreen, setFullScreen] = useState(false);
  const [isMoving, setIsMoving] = useState(true);

  // useEffect(() => {
  // const dot = document.getElementById("dot");
  // let direction = 1; // 1 for right, -1 for left
  // let speed = 1; // Adjust this value for the speed
  // function moveDot() {
  //   const currentLeft = parseInt(getComputedStyle(dot).left, 10);
  //   const currentRight = parseInt(getComputedStyle(dot).right, 10);
  //   if (direction === 1) {
  //     if (currentLeft + speed >= window.innerWidth - 75 - size * 2) {
  //       direction = -1;
  //       dot.style.left = window.innerWidth - 75 - size * 2 + "px";
  //     } else {
  //       dot.style.left = currentLeft + speed + "px";
  //     }
  //   } else {
  //     if (currentLeft - speed <= 0) {
  //       direction = 1;
  //       dot.style.left = "0px";
  //     } else {
  //       dot.style.left = currentLeft - speed + "px";
  //     }
  //   }
  //   requestAnimationFrame(moveDot);
  // }
  // moveDot();
  // }, []);

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
    // Get the element by ID
    const dotElement = document.getElementById("dot");

    // Change the value of --animdur
    dotElement.style.setProperty("--animdur", `${11 - speed}s`);
  }, [speed]);

  useEffect(() => {
    let dot = document.getElementById("dot");

    // Set the size of the dot
    dot.style.setProperty("--w", `${size * 1.5}px`);
    // dot.style.width = `${size * 1.5}px`;
    // dot.style.height = `${size * 1.5}px`;

    // Set the animation speed
    // dot.style.animation = `moveRight ${speed}s linear infinite`;
  }, [size]);

  useEffect(() => {
    let dot = document.getElementById("dot");

    if (theme === "dark") {
      dot.style.backgroundColor = "white";
    } else {
      dot.style.backgroundColor = "black";
    }
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
            {fullScreen ? (
              <></>
            ) : (
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
                  />
                </div>
                <span>Speed: {speed}</span>

                {/* <div className="form-group my-2">
                  <label htmlFor="speedSelect">
                    <b>Speed</b>
                  </label>
                  <select
                    className="form-control"
                    id="speedSelect"
                    value={speed}
                    onChange={(e) => setSpeed(e.target.value)}
                  >
                    <option value="slow">Slow</option>
                    <option value="medium">Medium</option>
                    <option value="fast">Fast</option>
                  </select>
                </div> */}

                <div className="form-group my-2">
                  <label htmlFor="themeSelect">
                    <b>Background</b>
                  </label>
                  <select
                    className="form-control"
                    id="themeSelect"
                    value={theme}
                    onChange={(e) => setTheme(e.target.value)}
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
            >
              {isMoving ? "Stop" : "Start"}
            </button>
            <button
              className="btn btn-primary m-2 mb-5"
              onClick={() => setFullScreen(!fullScreen)}
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
                ></div>
              </div>
            </div>
          </div>
          <div class="back_button_container">
            <button
            class="back_button"
            onClick={() => props.setPageValue("landing")}
            >
            <i class="fas_back_arrow fa-solid fa-arrow-left" alt="back button"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default EMDRPage;
