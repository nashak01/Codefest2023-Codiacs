import React, { useEffect, useState } from "react";
import AppHeader from "../AppHeader";

function MonsterPage(props) {
  const [isEating, setIsEating] = useState(false);

  const monsterMessages = [
    "That was tasty",
    "More please!",
    "Thank you!",
    "Delicious!",
    "Yummy!",
  ];

  useEffect(() => {
    const paintCanvas = document.querySelector(".js-paint");
    const context = paintCanvas.getContext("2d");
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

    paintCanvas.addEventListener("mousedown", startDrawing);
    paintCanvas.addEventListener("mousemove", drawLine);
    paintCanvas.addEventListener("mouseup", stopDrawing);
    paintCanvas.addEventListener("mouseout", stopDrawing);
  }, []);

  useEffect(() => {
    if (isEating) {
      const canvas = document.getElementById("monster-canvas");
      const context = canvas.getContext("2d");

      // Clear the entire canvas
      context.clearRect(0, 0, canvas.width, canvas.height);

      setTimeout(() => {
        setIsEating(false);
      }, 3000);
    }
  }, [isEating]);

  return (
    <>
      <AppHeader setPageValue={props.setPageValue} />
      <div className="container">
        <h1 className="text-center">Worry Monster</h1>
        <div className="row">
          <div className="col-md-6" style={{ border: "1px black solid" }}>
            <input type="color" class="js-color-picker  color-picker" />
            <input
              type="range"
              class="js-line-range"
              min="1"
              max="72"
              value="1"
            />
            <label class="js-range-value">1</label>Px
            <canvas
              id="monster-canvas"
              class="js-paint  paint-canvas"
              width="600"
              height="350"
            ></canvas>
            <div className="text-center">
              <button
                className="btn btn-danger my-2"
                onClick={() => setIsEating(true)}
              >
                Feed this drawing to the monster!
              </button>
            </div>
          </div>
          <div className="col-md-6">
            {isEating ? (
              <>
                <div class="alert alert-success" role="alert">
                  "<b>{monsterMessages[Math.floor(Math.random() * 5)]}</b>"
                </div>
                <img
                  src="img/worry-eater-mouth-closed.jpeg"
                  alt="Worrying Monster"
                  className="img-fluid"
                  style={{ maxHeight: "400px" }}
                />
              </>
            ) : (
              <>
                <div class="alert alert-primary" role="alert">
                  "<b>I'm hungry</b>"
                </div>
                <img
                  src="img/worry-eater-mouth-open.jpg"
                  alt="Worrying Monster"
                  className="img-fluid"
                  style={{ maxHeight: "400px" }}
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
