import React, { useEffect, useState } from "react";
import AppHeader from "../AppHeader";

function MonsterPage(props) {
  const [isEating, setIsEating] = useState(false);
  const [isText, setIsText] = useState(false);
  const [isDrawing, setIsDrawing] = useState(true);
  const [textEntered, setTextEntered] = useState("");
  const [monstersName, setMonstersName] = useState("");
  const [isDraggable, setIsDraggable] = useState(false);
  const [nameSubmitted, setNameSubmitted] = useState(false);

  let burp = new Audio("burp-37726.mp3");
  const lightBlueHex = "#50c7f2";
  const darkBlueHex = "#3b6db4";
  const monsterMessages = [
    "That was tasty",
    "More please!",
    "Thank you!",
    "Delicious!",
    "Yummy!",
  ];

  useEffect(() => {
    if (nameSubmitted) {
      const paintCanvas = document.querySelector(".js-paint");
      const context = paintCanvas.getContext("2d");
      if (context) {
        context.lineCap = "round";

        const colorPicker = document.querySelector(".js-color-picker");

        colorPicker.addEventListener("change", (event) => {
          context.strokeStyle = event.target.value;
        });

        const lineWidthRange = document.querySelector(".js-line-range");
        const lineWidthLabel = document.querySelector(".js-range-value");

        lineWidthRange.addEventListener("input", (event) => {
          const width = event.target.value;
          lineWidthLabel.innerHTML = width;
          context.lineWidth = width;
        });

        let x = 0,
          y = 0;
        let isMouseDown = false;

        const stopDrawing = () => {
          isMouseDown = false;
        };
        const startDrawing = (event) => {
          isMouseDown = true;
          [x, y] = [event.offsetX, event.offsetY];
        };
        const drawLine = (event) => {
          if (isMouseDown) {
            const newX = event.offsetX;
            const newY = event.offsetY;
            context.beginPath();
            context.moveTo(x, y);
            context.lineTo(newX, newY);
            context.stroke();
            //[x, y] = [newX, newY];
            x = newX;
            y = newY;
          }
        };

        if (!isDraggable && !isEating) {
          paintCanvas.addEventListener("mousedown", startDrawing);
          paintCanvas.addEventListener("mousemove", drawLine);
          paintCanvas.addEventListener("mouseup", stopDrawing);
          paintCanvas.addEventListener("mouseout", stopDrawing);
        } else {
          paintCanvas.removeEventListener("mousedown", startDrawing);
          paintCanvas.removeEventListener("mousemove", drawLine);
          paintCanvas.removeEventListener("mouseup", stopDrawing);
          paintCanvas.removeEventListener("mouseout", stopDrawing);
        }

        // Clean up event listeners when the component unmounts
        return () => {
          paintCanvas.removeEventListener("mousedown", startDrawing);
          paintCanvas.removeEventListener("mousemove", drawLine);
          paintCanvas.removeEventListener("mouseup", stopDrawing);
          paintCanvas.removeEventListener("mouseout", stopDrawing);
        };
      }
    }
  }, [nameSubmitted, isDraggable, isEating]);

  useEffect(() => {
    if (isEating) {
      burp.currentTime = 0; // Reset audio to beginning
      burp.play();

      const canvas = document.getElementById("monster-canvas");
      const context = canvas.getContext("2d");

      // Clear the entire canvas
      if (context) {
        context.clearRect(0, 0, canvas.width, canvas.height);
      }

      setTextEntered("");

      setTimeout(() => {
        setIsEating(false);
        setIsDraggable(false);
      }, 3000);
    }
  }, [isEating]);

  const handleButtonLeave = (e) => {
    e.target.style.backgroundColor = lightBlueHex;
    e.target.style.color = "black";
  };

  const handleButtonHover = (e) => {
    e.target.style.backgroundColor = darkBlueHex;
    e.target.style.color = "white";
  };

  const handleButtonClick = () => {
    setIsDraggable(true);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    //const canvasData = event.dataTransfer.getData('monster-canvas');
    //const canvas = document.getElementById(canvasData);
    //const dropzone = document.getElementById('dropzone');
    //dropzone.appendChild(canvas);
    if (isDraggable) {
      setIsEating(true);
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <AppHeader setPageValue={props.setPageValue} title={"Worry Monster"} />
      <div className="m-4">
        <div className="row">
          <div className="col-md-8 p-1">
            {nameSubmitted ? (
              <>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="drawCheckbox"
                        checked={isDrawing}
                        onChange={() => setIsDrawing(!isDrawing)}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="drawCheckbox"
                      >
                        Draw
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="textCheckbox"
                        checked={isText}
                        onChange={() => setIsText(!isText)}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="textCheckbox"
                      >
                        Text
                      </label>
                    </div>
                  </div>
                  <div className="col-md-6" hidden={!isDrawing}>
                    <input
                      data-testid="color-picker"
                      type="color"
                      className="js-color-picker  color-picker me-1"
                    />
                    <input
                      type="range"
                      id="pixel-size-picker"
                      className="js-line-range"
                      min="1"
                      max="80"
                      defaultValue={"1"}
                    />
                    <label
                      className="js-range-value ms-1"
                      htmlFor="pixel-size-picker"
                    >
                      1
                    </label>
                    px
                  </div>
                </div>
                <div className="row p-0" hidden={!isDrawing}>
                  <div
                    className="col-md-12 p-0"
                    style={{ border: "2px #3b6db4 solid" }}
                  >
                    <canvas
                      id="monster-canvas"
                      data-testid="monster-canvas"
                      className="js-paint  paint-canvas"
                      width="800"
                      height="380"
                      draggable={isDraggable}
                      onDragStart={(event) =>
                        event.dataTransfer.setData(
                          "monster-canvas",
                          event.target.id
                        )
                      }
                      style={{ cursor: isDraggable ? "pointer" : "default" }}
                    ></canvas>
                  </div>
                </div>
                {isText && (
                  <div className="row">
                    <div
                      className="col-md-12 p-0"
                      style={{
                        borderLeft: "2px #3b6db4 solid",
                        borderRight: "2px #3b6db4 solid",
                        borderBottom: "2px #3b6db4 solid",
                        borderTop: isDrawing ? "" : "2px #3b6db4 solid",
                        cursor: isDraggable ? "pointer" : "text",
                      }}
                      draggable={isDraggable}
                    >
                      <textarea
                        className="form-control"
                        placeholder="Enter your worry here"
                        value={textEntered}
                        onChange={(e) => setTextEntered(e.target.value)}
                        style={{
                          textAlign: "center",
                          pointerEvents: isDraggable ? "none" : "auto",
                          fontFamily: "Comic Sans MS, Comic Sans, cursive",
                        }}
                      ></textarea>
                    </div>
                  </div>
                )}
                {(isDrawing || isText) && !isEating ? (
                  <div className="text-center">
                    <button
                      className="btn btn-danger my-2"
                      style={{
                        color: "black",
                        backgroundColor: lightBlueHex,
                        border: lightBlueHex,
                      }}
                      onMouseEnter={(e) => handleButtonHover(e)}
                      onMouseLeave={(e) => handleButtonLeave(e)}
                      onClick={handleButtonClick}
                      disabled={isDraggable}
                    >
                      {isDraggable
                        ? `Now drag your worry to ${monstersName}!`
                        : `Click here when you're ready to feed ${monstersName}!`}
                    </button>
                    {/* <div
                className="alert mt-2"
                style={{ backgroundColor: lightBlueHex }}
                role="alert"
              >
                When you are ready, drag your worry to the monster!
              </div> */}
                  </div>
                ) : (
                  <></>
                )}
              </>
            ) : (
              <div className="text-center">
                <h4 className="mb-4">Name your Worry Monster:</h4>
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="monster-name-input"
                    placeholder="Enter name"
                    aria-label="Enter name"
                    aria-describedby="button-addon2"
                    onChange={(e) => setMonstersName(e.target.value)}
                  />
                  <button
                    className="btn"
                    type="button"
                    style={{
                      color: "black",
                      backgroundColor: lightBlueHex,
                      border: lightBlueHex,
                    }}
                    onMouseEnter={(e) => handleButtonHover(e)}
                    onMouseLeave={(e) => handleButtonLeave(e)}
                    id="button-addon2"
                    disabled={!monstersName}
                    onClick={() => setNameSubmitted(true)}
                  >
                    Submit
                  </button>
                </div>
              </div>
            )}
          </div>
          <div className="col-md-4">
            <div
              className="alert alert-primary"
              style={{
                color: "black",
                backgroundColor: lightBlueHex,
                margin: "0px 10px 10px 10px",
                padding: "10px",
              }}
            >
              Hello!&nbsp;
              {monstersName && (
                <>
                  I am&nbsp;
                  <b>{monstersName}</b>
                </>
              )}
            </div>
            {isEating ? (
              <>
                {/* <div className="alert alert-success" role="alert">
                  "<b>{monsterMessages[Math.floor(Math.random() * 5)]}</b>"
                </div> */}
                <img
                  src="img/worry-eater-mouth-closed.jpeg"
                  alt="Worrying Monster"
                  className="img-fluid"
                  draggable="false"
                  style={{ maxHeight: "405px" }}
                />
              </>
            ) : (
              <>
                {/* <div className="alert alert-primary" role="alert">
                  "<b>I'm hungry</b>"
                </div> */}
                <img
                  id="dropzone"
                  data-testid="monster-hungry-img"
                  src="img/worry-eater-mouth-open.jpg"
                  alt="Worry Monster"
                  className="img-fluid"
                  draggable="false"
                  style={{ maxHeight: "405px" }}
                  onDrop={handleDrop}
                  onDragOver={handleDragOver}
                />
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default MonsterPage;
