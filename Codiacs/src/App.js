import { useState } from "react";
import LandingPage from "./landing-page/landing";
import Canvas from "./canvas-app/canvas";
import "./App.css";
import VolcanoApp from "./volcano-app/VolcanoApp";

function App() {
  const [pageValue, setPageValue] = useState("landing");

  return (
    <div className="App">
      {pageValue === "landing" ? (
        <LandingPage setPageValue={setPageValue} />
      ) : pageValue === "canvas" ? (
        <Canvas setPageValue={setPageValue} />
      ) : pageValue === "volcano" ? (
        <VolcanoApp setPageValue={setPageValue} />
      ) : (
        <LandingPage setPageValue={setPageValue} />
      )}
    </div>
  );
}

export default App;
