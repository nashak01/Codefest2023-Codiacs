import { React, useState, useEffect } from "react";

import memoryJarImage from "../images/memory-jar.jpg";
import AppHeader from "../AppHeader";
import Memory from "./Memory";

function MemoryJarApp(props) {
  const [memories, setMemories] = useState([]);

  function handleOnDrop(e) {
    const memory = e.dataTransfer.getData("memory");
    const memoryIndex = memories.indexOf(memory);
    memories.splice(memoryIndex, 1);
  }

  function handleDragOver(e) {
    e.preventDefault();
  }

  function handleClick() {
    setMemories([...memories, document.getElementById("memory-input").value]);
    document.getElementById("memory-input").value = "";
  }

  useEffect(() => {
    console.log(memories);
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
      {memories.map((memory) => (
        <Memory memory={memory} />
      ))}
      <div onDrop={handleOnDrop} onDragOver={handleDragOver}>
        <img
          src={memoryJarImage}
          alt="Memory Jar"
          style={{ height: "300px" }}
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <textarea id="memory-input" rows="4"></textarea>
        <button id="memory-input-button" type="submit" onClick={handleClick}>
          Add
        </button>
      </div>
    </>
  );
}

export default MemoryJarApp;
