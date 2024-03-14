import "./canvas.css";
// import canvas_script from "./canvas_script.js";

import AppBackground from "../AppBackground";

function Canvas(props) {
  window.onload = function () {
    // Definitions
    var canvas = document.getElementById("paint-canvas");
    //   if (canvas) {
    var context = canvas.getContext("2d");
    var boundings = canvas.getBoundingClientRect();
    //   }

    // Specifications
    var mouseX = 0;
    var mouseY = 0;
    //   if (context) {
    context.strokeStyle = "black"; // initial brush color
    context.lineWidth = 1; // initial brush width
    //   }
    var isDrawing = false;

    // Handle Colors
    var colors = document.getElementsByClassName("colors")[0];

    //   if (colors) {
    colors.addEventListener("click", function (event) {
      context.strokeStyle = event.target.value || "black";
    });
    //   }

    // Handle Brushes
    var brushes = document.getElementsByClassName("brushes")[0];

    brushes.addEventListener("click", function (event) {
      context.lineWidth = event.target.value || 1;
    });

    // Mouse Down Event
    canvas.addEventListener("mousedown", function (event) {
      setMouseCoordinates(event);
      isDrawing = true;

      // Start Drawing
      context.beginPath();
      context.moveTo(mouseX, mouseY);
    });

    // Mouse Move Event
    canvas.addEventListener("mousemove", function (event) {
      setMouseCoordinates(event);

      if (isDrawing) {
        context.lineTo(mouseX, mouseY);
        context.stroke();
      }
    });

    // Mouse Up Event
    canvas.addEventListener("mouseup", function (event) {
      setMouseCoordinates(event);
      isDrawing = false;
    });

    // Handle Mouse Coordinates
    function setMouseCoordinates(event) {
      mouseX = event.clientX - boundings.left;
      mouseY = event.clientY - boundings.top;
    }

    // Handle Clear Button
    var clearButton = document.getElementById("clear");

    clearButton.addEventListener("click", function () {
      context.clearRect(0, 0, canvas.width, canvas.height);
    });

    // Handle Save Button
    var saveButton = document.getElementById("save");

    saveButton.addEventListener("click", function () {
      var imageName = prompt("Please enter image name");
      var canvasDataURL = canvas.toDataURL();
      var a = document.createElement("a");
      a.href = canvasDataURL;
      a.download = imageName || "drawing";
      a.click();
    });
  };

  return (
    <>
      <AppBackground setPageValue={props.setPageValue} />

      <main style={{ marginTop: "3%" }}>
        <div className="left-block">
          <div className="colors">
            <button type="button" value="#0000ff"></button>
            <button type="button" value="#009fff"></button>
            <button type="button" value="#0fffff"></button>
            <button type="button" value="#bfffff"></button>
            <button type="button" value="#000000"></button>
            <button type="button" value="#333333"></button>
            <button type="button" value="#666666"></button>
            <button type="button" value="#999999"></button>
            <button type="button" value="#ffcc66"></button>
            <button type="button" value="#ffcc00"></button>
            <button type="button" value="#ffff00"></button>
            <button type="button" value="#ffff99"></button>
            <button type="button" value="#003300"></button>
            <button type="button" value="#555000"></button>
            <button type="button" value="#00ff00"></button>
            <button type="button" value="#99ff99"></button>
            <button type="button" value="#f00000"></button>
            <button type="button" value="#ff6600"></button>
            <button type="button" value="#ff9933"></button>
            <button type="button" value="#f5deb3"></button>
            <button type="button" value="#330000"></button>
            <button type="button" value="#663300"></button>
            <button type="button" value="#cc6600"></button>
            <button type="button" value="#deb887"></button>
            <button type="button" value="#aa0fff"></button>
            <button type="button" value="#cc66cc"></button>
            <button type="button" value="#ff66ff"></button>
            <button type="button" value="#ff99ff"></button>
            <button type="button" value="#e8c4e8"></button>
            <button type="button" value="#ffffff"></button>
          </div>
          <div className="brushes">
            <button type="button" value="1"></button>
            <button type="button" value="2"></button>
            <button type="button" value="3"></button>
            <button type="button" value="4"></button>
            <button type="button" value="5"></button>
          </div>
          <div className="buttons">
            <button id="clear" type="button">
              Clear
            </button>
            <button id="save" type="button">
              Save
            </button>
          </div>
        </div>
        <div className="right-block">
          <canvas id="paint-canvas" width="100000" height="100000"></canvas>
          {/* <script src={canvas_script} defer></script> */}
        </div>
        <button
        class="button back_button"
        onClick={() => props.setPageValue("landing")}
        >
          <i class="fas_back_arrow fa-solid fa-arrow-left" alt="back button"></i>
          Back
        </button>
      </main>

      {/* {document.getElementById("paint-canvas") !== null ? (
        <script src={canvas_script}></script> : null
      )} */}
      {/* <OpenCanvas /> */}
    </>
  );
}
export default Canvas;
