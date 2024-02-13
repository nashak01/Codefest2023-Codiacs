import { useState } from "react";
import LandingPage from "./landing-page/landing";
import Canvas from "./canvas-app/canvas";
import "./App.css";
import "./canvas-app/canvas_script.js";
//import "./modal.js";
import "./modal.css";
//import "./alertButton"
import React from "react";
//import $ from "jquery";
import VolcanoApp from "./volcano-app/VolcanoApp";
import EMDRPage from "./emdr-app/EMDRPage";
import MemoryJarApp from "./memory-jar/MemoryJarApp";
import MonsterPage from "./monster-app/MonsterPage";
import LoginPage from "./login/login.js";
function App() {
  const [pageValue, setPageValue] = useState("login");

  return (
    <div className="App">
      {pageValue === "login" ? (
        <LoginPage setPageValue={setPageValue} />
      ) : pageValue === "landing" ? (
        <LandingPage setPageValue={setPageValue} />
      ) : pageValue === "canvas" ? (
        <Canvas setPageValue={setPageValue} />
      ) : pageValue === "volcano" ? (
        <VolcanoApp setPageValue={setPageValue} />
      ) : pageValue === "emdr" ? (
        <EMDRPage setPageValue={setPageValue} />
      ) : pageValue === "memory-jar" ? (
        <MemoryJarApp setPageValue={setPageValue} />
      ) : pageValue === "monster" ? (
        <MonsterPage setPageValue={setPageValue} />
      ) : (
        <LandingPage setPageValue={setPageValue} />
      )}
    </div>
  );
}

export default App;
