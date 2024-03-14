import React from "react";
import { Routes, Route } from "react-router-dom"

import "./App.css";
import "./canvas-app/canvas_script.js";

import LandingPage from "./landing-page/landing";
import Canvas from "./canvas-app/canvas";
import VolcanoApp from "./volcano-app/VolcanoApp";
import EMDRPage from "./emdr-app/EMDRPage";
import MemoryJarApp from "./memory-jar/MemoryJarApp";
import MonsterPage from "./monster-app/MonsterPage";
import LoginPage from "./login/login.js";
function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/">
          <Route index element={<LandingPage />}/>
          <Route path="login" element={<LoginPage />}/>
          <Route path="memory-jar" element={<MemoryJarApp />}/>
          <Route path="canvas" element={<Canvas />}/>
          <Route path="emotion-volcano" element={<VolcanoApp />}/>
          <Route path="worry-monster" element={<MonsterPage />}/>
          <Route path="emdr" element={<EMDRPage />}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
