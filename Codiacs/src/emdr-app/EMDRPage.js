import React, { useState, useEffect } from "react";
import "./EMDR.css";
import AppHeader from "../AppHeader";

const EMDRPage = (props) => {
  const [speed, setSpeed] = useState("medium");
  const [size, setSize] = useState(50);
  const [theme, setTheme] = useState("light");
  const [fullScreen, setFullScreen] = useState(false);

  useEffect(() => {
    const dot = document.getElementById("dot");
    let direction = 1; // 1 for right, -1 for left
    let speed = 1; // Adjust this value for the speed

    function moveDot() {
      const currentLeft = parseInt(getComputedStyle(dot).left, 10);
      const currentRight = parseInt(getComputedStyle(dot).right, 10);
      //   console.log(
      //     direction,
      //     getComputedStyle(dot).left,
      //     getComputedStyle(dot).right
      //   );

      if (direction === 1) {
        if (currentLeft + speed >= window.innerWidth - 75 - size * 2) {
          direction = -1;
          dot.style.left = window.innerWidth - 75 - size * 2 + "px";
        } else {
          dot.style.left = currentLeft + speed + "px";
        }
      } else {
        if (currentLeft - speed <= 0) {
          direction = 1;
          dot.style.left = "0px";
        } else {
          dot.style.left = currentLeft - speed + "px";
        }
      }

      requestAnimationFrame(moveDot);
    }

    moveDot();
  }, []);

  useEffect(() => {
    const dot = document.getElementById("dot2");
    let direction = 1; // 1 for right, -1 for left
    let speed = 4; // Adjust this value for the speed

    function moveDot() {
      const currentLeft = parseInt(getComputedStyle(dot).left, 10);
      const currentRight = parseInt(getComputedStyle(dot).right, 10);
      //   console.log(
      //     direction,
      //     getComputedStyle(dot).left,
      //     getComputedStyle(dot).right
      //   );

      if (direction === 1) {
        if (currentLeft + speed >= window.innerWidth - 75 - size * 2) {
          direction = -1;
          dot.style.left = window.innerWidth - 75 - size * 2 + "px";
        } else {
          dot.style.left = currentLeft + speed + "px";
        }
      } else {
        if (currentLeft - speed <= 0) {
          direction = 1;
          dot.style.left = "0px";
        } else {
          dot.style.left = currentLeft - speed + "px";
        }
      }

      requestAnimationFrame(moveDot);
    }

    moveDot();
  }, []);

  useEffect(() => {
    const dot = document.getElementById("dot3");
    let direction = 1; // 1 for right, -1 for left
    let speed = 8; // Adjust this value for the speed

    function moveDot() {
      const currentLeft = parseInt(getComputedStyle(dot).left, 10);
      const currentRight = parseInt(getComputedStyle(dot).right, 10);
      //   console.log(
      //     direction,
      //     getComputedStyle(dot).left,
      //     getComputedStyle(dot).right
      //   );

      if (direction === 1) {
        if (currentLeft + speed >= window.innerWidth - 75 - size * 2) {
          direction = -1;
          dot.style.left = window.innerWidth - 75 - size * 2 + "px";
        } else {
          dot.style.left = currentLeft + speed + "px";
        }
      } else {
        if (currentLeft - speed <= 0) {
          direction = 1;
          dot.style.left = "0px";
        } else {
          dot.style.left = currentLeft - speed + "px";
        }
      }

      requestAnimationFrame(moveDot);
    }

    moveDot();
  }, []);

  useEffect(() => {
    let dot = document.getElementById("dot");

    // Set the size of the dot
    dot.style.width = `${size}px`;
    dot.style.height = `${size}px`;

    // Set the animation speed
    dot.style.animation = `moveRight ${speed}s linear infinite`;

    dot = document.getElementById("dot2");

    // Set the size of the dot
    dot.style.width = `${size}px`;
    dot.style.height = `${size}px`;

    // Set the animation speed
    dot.style.animation = `moveRight ${speed}s linear infinite`;

    dot = document.getElementById("dot3");

    // Set the size of the dot
    dot.style.width = `${size}px`;
    dot.style.height = `${size}px`;

    // Set the animation speed
    dot.style.animation = `moveRight ${speed}s linear infinite`;
  }, [size, speed]);

  useEffect(() => {
    let dot = document.getElementById("dot");
    if (theme === "dark") {
      dot.style.backgroundColor = "white";
    } else {
      dot.style.backgroundColor = "black";
    }

    dot = document.getElementById("dot2");
    if (theme === "dark") {
      dot.style.backgroundColor = "white";
    } else {
      dot.style.backgroundColor = "black";
    }

    dot = document.getElementById("dot3");
    if (theme === "dark") {
      dot.style.backgroundColor = "white";
    } else {
      dot.style.backgroundColor = "black";
    }
  }, [theme]);

  const handleStartClick = () => {
    setFullScreen(true);
  };

  return (
    <>
      <AppHeader setPageValue={props.setPageValue} title={"EMDR"} />
      <div className={`${theme === "dark" ? " bg-dark text-light" : ""}`}>
        <div className="row">
          {fullScreen ? (
            <div className="col-sm-6 offset-sm-3">
              <button
                className="btn btn-primary m-2 mb-5"
                onClick={() => setFullScreen(false)}
              >
                Stop
              </button>
            </div>
          ) : (
            <>
              <div className="col-sm-6 offset-sm-3">
                {/* <div className="form-group mt-2">
                  <label htmlFor="speedSlider me-2" className="me-2">
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
                <span>Speed: {speed}</span> */}

                <div className="form-group mt-2">
                  <label htmlFor="sizeSlider me-2" className="me-2">
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

                <div className="form-group my-2">
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
                </div>

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

                <button
                  className="btn btn-primary m-2 mb-5"
                  onClick={handleStartClick}
                >
                  Start
                </button>
              </div>
            </>
          )}
          <div className="row mt-5">
            <div className="col">
              <div className="dot-container">
                <div className="dot" id="dot" hidden={speed !== "slow"}></div>
                <div
                  className="dot"
                  id="dot2"
                  hidden={speed !== "medium"}
                ></div>
                <div className="dot" id="dot3" hidden={speed !== "fast"}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EMDRPage;
