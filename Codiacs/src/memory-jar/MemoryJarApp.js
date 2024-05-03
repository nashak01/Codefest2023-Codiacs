import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import memoryJarImage from "../images/memory-jar.jpg";
import AppBackground from "../AppBackground";
import Memory from "./Memory";
import Textbox from "../components/Textbox/Textbox.tsx";
import "./MemoryJarApp.css";

function MemoryJarApp() {
  const [memories, setMemories] = useState([]);
  var amounts = [];
  const [memoryToAdd, setMemoryToAdd] = useState("");
  const [memoryColour, setMemoryColour] = useState("#000000");
  const [selectedMemory, setSelectedMemory] = useState(
    "Click on a memory to read it here"
  );

  const [percentages, setPercentages] = useState([]);
  const [cumulativePercentages, setCumulativePercentages] = useState([]);

  const navigate = useNavigate();

  function createPercentages() {
    const total = amounts.reduce((partialSum, a) => partialSum + +a, 0);
    var counter = 0;
    var temp;
    var previous;
    for (const amount of amounts) {
      const percentage = 0.735 * (amount / total) * 100;
      if (counter === 0) {
        temp = percentage + 2.5;
      } else {
        temp = previous + percentage;
      }
      percentages.push(percentage.toString() + "%");
      cumulativePercentages.push(temp.toString() + "%");
      previous = temp;
      counter += 1;
    }
    for (var i = 0; i < memories.length; i++) {
      const item = document.getElementById("overlay" + i);
      item.style.height = percentages[i];
      if (i > 0) {
        item.style.bottom = cumulativePercentages[i - 1];
      }
    }
  }

  function handleClick() {
    setMemories([
      ...memories,
      { memory: memoryToAdd, memoryColour: memoryColour },
    ]);
    setMemoryToAdd("");
  }

  function displayMemory(memoryObj) {
    setSelectedMemory(memoryObj.memory);
  }

  useEffect(() => {
    if (memories.length === 5 || memoryToAdd === "") {
      document.getElementById("memory-input-button").disabled = true;
    } else {
      document.getElementById("memory-input-button").disabled = false;
    }
  }, [memories, memoryToAdd]);

  return (
    <>
      <AppBackground />

      <div className="row" style={{ marginTop: "10%" }}>
        {/* <div className="col-sm-3">
          <div className="memory-container">
            <img
              src={memoryJarImage}
              alt="Memory Jar"
              style={{ height: "300px" }}
            />
            <div className="overlay first" id="overlay0"></div>
            <div className="overlay second" id="overlay1"></div>
            <div className="overlay third" id="overlay2"></div>
            <div className="overlay fourth" id="overlay3"></div>
            <div className="overlay fifth" id="overlay4"></div>
          </div>
        </div> */}

        {/* <div className="col-sm-4">
          {memories.slice(3, 5).map((memory, index) => (
            <Memory memory={memory} amounts={amounts} counter={index + 3} />
          ))}
        </div> */}

        <div className="col-sm-6" style={{ paddingLeft: "5%" }}>
          <Textbox
            size="lg"
            rows="8"
            onChange={(e) => setMemoryToAdd(e.target.value)}
            value={memoryToAdd}
          />
          <div style={{ display: "inline-flex", alignItems: "center" }}>
            <input
              data-testid="color-picker"
              type="color"
              className="js-color-picker color-picker me-4"
              style={{ height: "50px", width: "100px" }}
              aria-label="Select colour for memory"
              value={memoryColour}
              onChange={(e) => setMemoryColour(e.target.value)}
            />
            <div style={{ display: "inline-flex", alignItems: "center" }}>
              <button
                id="memory-input-button"
                className="button"
                style={{ marginTop: "0px" }}
                onClick={handleClick}
              >
                Add
              </button>

              <button
                id="create-jar-button"
                type="submit"
                onClick={createPercentages}
                className="button"
                style={{ marginTop: "0px" }}
              >
                Fill your jar!
              </button>
            </div>
          </div>

          <div>
            {memories.map((memoryObj, index) => (
              <Memory
                memory={memoryObj.memory}
                amounts={amounts}
                counter={index}
                memoryColour={memoryObj.memoryColour}
                showSlider={false}
                onClick={() => displayMemory(memoryObj)}
              />
            ))}
          </div>
        </div>

        <div className="col-sm-5 memory-box-outer">
          <div className="memory-box-inner">{selectedMemory}</div>
        </div>

        <div style={{ display: "flex", justifyContent: "center" }}></div>
        <button className="button back_button" onClick={() => navigate("/")}>
          <i
            className="fas_back_arrow fa-solid fa-arrow-left"
            alt="back button"
          ></i>
          Back
        </button>
      </div>
    </>
  );
}

export default MemoryJarApp;
