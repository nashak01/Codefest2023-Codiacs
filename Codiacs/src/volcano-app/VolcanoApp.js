import { React, useState } from "react";

import UnusedEmotions from "./UnusedEmotions";
import ProgressBar from "./ProgressBar";
import volcanoImage from "../images/volcano.png";
import eruptingVolcanoImage from "../images/erupting-volcano.png";
import UsedEmotions from "./UsedEmotions";
import UnusedEmojiEmotions from "./UnusedEmojiEmotions";
import UsedEmojiEmotions from "./UsedEmojiEmotions";
import AppHeader from "../AppHeader";

function VolcanoApp(props) {
  const [selectedEmotions, setSelectedEmotions] = useState([]);
  const [selectedEmojiEmotions, setSelectedEmojiEmotions] = useState([]);
  const [progress, setProgress] = useState(0);

  const [unusedEmotions, setUnusedEmotions] = useState([
    "happy",
    "sad",
    "confused",
    "excited",
    "worried",
    "scared",
    "angry",
    "tired",
  ]);

  const [unusedEmojiEmotions, setUnusedEmojiEmotions] = useState([
    { symbol: "😀", label: "happy" },
    { symbol: "😢", label: "sad" },
    { symbol: "😕", label: "confused" },
    { symbol: "😃", label: "excited" },
    { symbol: "😟", label: "worried" },
    { symbol: "😨", label: "scared" },
    { symbol: "😠", label: "angry" },
    { symbol: "😴", label: "tired" },
  ]);

  //console.log(unusedEmojiEmotions[0]);

  function handleOnDrop(e) {
    const emotion = e.dataTransfer.getData("emotion");
    //console.log("emotion", emotion);
    //console.log(emotion.symbol);

    //console.log(e);

    const wordIndex = unusedEmotions.indexOf(emotion);
    if (wordIndex > -1) {
      unusedEmotions.splice(wordIndex, 1);
      setSelectedEmotions([...selectedEmotions, emotion]);
    } else {
      const chosenEmoji = JSON.parse(emotion);
      const emojiIndex = unusedEmojiEmotions.findIndex(
        (emoji) => emoji.symbol === chosenEmoji.symbol
      );
      unusedEmojiEmotions.splice(emojiIndex, 1);
      setSelectedEmojiEmotions([...selectedEmojiEmotions, chosenEmoji]);
    }

    setProgress(progress + 15);
  }

  function handleDragOver(e) {
    e.preventDefault();
  }

  return (
    <>
      <AppHeader setPageValue={props.setPageValue} />
      <div className="row align-items-center">
        <div className="col-sm-2" style={{ paddingLeft: "2%" }}>
          <UnusedEmotions emotions={unusedEmotions} />
        </div>
        <div className="col-sm-1">
          <UnusedEmojiEmotions emotions={unusedEmojiEmotions} />
        </div>
        <div className="col-sm-6">
          <div onDrop={handleOnDrop} onDragOver={handleDragOver}>
            {progress < 100 ? (
              <img
                src={volcanoImage}
                alt="Erupting volcano"
                style={{ height: "400px", marginTop: "10%" }}
              />
            ) : (
              <img
                src={eruptingVolcanoImage}
                alt="Erupting volcano"
                style={{ height: "400px", marginTop: "10%" }}
              />
            )}
          </div>
        </div>
        <div className="col-sm-2">
          <UsedEmotions emotions={selectedEmotions} />
        </div>
        <div className="col-sm-1">
          <UsedEmojiEmotions emotions={selectedEmojiEmotions} />
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <ProgressBar progress={progress} />
      </div>
    </>
  );
}

export default VolcanoApp;
