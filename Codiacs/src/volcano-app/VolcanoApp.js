import { React, useState } from "react";

import UnusedEmotions from "./UnusedEmotions";
import ProgressBar from "./ProgressBar";
import volcanoImage from "../images/volcano.png";
import eruptingVolcanoImage from "../images/erupting-volcano.png";
import UsedEmotions from "./UsedEmotions";

function VolcanoApp() {
  const [selectedEmotions, setSelectedEmotions] = useState([]);
  const [progress, setProgress] = useState(0);

  const [unusedEmotions, setUnusedEmotions] = useState([
    "happy",
    "sad",
    "confused",
    "excited",
    "worried",
    "scared",
    "angry",
  ]);

  function handleOnDrop(e) {
    const emotion = e.dataTransfer.getData("emotion");
    console.log("emotion", emotion);

    const index = unusedEmotions.indexOf(emotion);
    unusedEmotions.splice(index, 1);
    setSelectedEmotions([...selectedEmotions, emotion]);

    setProgress(progress + 15);
  }

  function handleDragOver(e) {
    e.preventDefault();
  }

  return (
    <>
      <UnusedEmotions emotions={unusedEmotions} />
      <div onDrop={handleOnDrop} onDragOver={handleDragOver}>
        {progress < 100 ? (
          <img
            src={volcanoImage}
            alt="Erupting volcano"
            style={{ height: "300px" }}
          />
        ) : (
          <img
            src={eruptingVolcanoImage}
            alt="Erupting volcano"
            style={{ height: "300px" }}
          />
        )}
      </div>
      <UsedEmotions emotions={selectedEmotions} />
      <ProgressBar progress={progress} />

      {/* <div className="row">
        <div className="col-sm-3">
          <UnusedEmotions emotions={unusedEmotions} />
        </div>
        <div className="col-sm-4">
          <div onDrop={handleOnDrop} onDragOver={handleDragOver}>
            {progress < 100 ? (
              <img
                src={volcanoImage}
                alt="Erupting volcano"
                style={{ height: "300px" }}
              />
            ) : (
              <img
                src={eruptingVolcanoImage}
                alt="Erupting volcano"
                style={{ height: "300px" }}
              />
            )}
          </div>
        </div>
        <div className="col-sm-2">
          <ProgressBar progress={progress} />
        </div>
        <div className="col-sm-3">
          <UsedEmotions emotions={selectedEmotions} />
        </div>
      </div> */}
    </>
  );
}

export default VolcanoApp;
