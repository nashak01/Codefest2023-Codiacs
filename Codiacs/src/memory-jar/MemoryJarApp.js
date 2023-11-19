import { React, useState, useEffect } from "react";

import memoryJarImage from "../images/memory-jar.jpg";
import AppHeader from "../AppHeader";
import Memory from "./Memory";
import "./MemoryJarApp.css";

function MemoryJarApp(props) {
  const [memories, setMemories] = useState([]);
  var amounts = [];

  const [percentages, setPercentages] = useState([]);
  const [cumulativePercentages, setCumulativePercentages] = useState([]);

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
    setMemories([...memories, document.getElementById("memory-input").value]);
    document.getElementById("memory-input").value = "";
  }

  useEffect(() => {
    if (memories.length === 5) {
      document.getElementById("memory-input-button").disabled = true;
    }
  }, [memories]);

  return (
    <>
      <AppHeader
        setPageValue={props.setPageValue}
        title="Add memories, thoughts and feelings to the jar below"
      />

      <div className="row align-items-center">
        <div className="col-sm-5" style={{ paddingLeft: "2%" }}>
          {memories.slice(0, 3).map((memory, index) => (
            <Memory memory={memory} amounts={amounts} counter={index} />
          ))}
        </div>
        <div className="col-sm-3">
          <div class="memory-container">
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
        </div>
        <div className="col-sm-4">
          {memories.slice(3, 5).map((memory, index) => (
            <Memory memory={memory} amounts={amounts} counter={index + 3} />
          ))}
        </div>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <textarea id="memory-input" rows="4"></textarea>
          <button id="memory-input-button" type="submit" onClick={handleClick}>
            Add
          </button>

          <button
            id="create-jar-button"
            type="submit"
            onClick={createPercentages}
          >
            Fill your jar!
          </button>
        </div>

        <div style={{ display: "flex", justifyContent: "center" }}></div>
      </div>
    </>
  );
}

export default MemoryJarApp;
