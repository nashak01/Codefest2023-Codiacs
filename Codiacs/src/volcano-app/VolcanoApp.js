import { React, useState } from "react";

// importing all of the custom components needed for the page
import ProgressBar from "./ProgressBar";
import volcanoImage from "../images/volcano.png";
import eruptingVolcanoImage from "../images/erupting-volcano.png";
import UnusedEmotions from "./UnusedEmotions";
import UsedEmotions from "./UsedEmotions";
import UnusedEmojiEmotions from "./UnusedEmojiEmotions";
import UsedEmojiEmotions from "./UsedEmojiEmotions";
import AppHeader from "../AppHeader";

function VolcanoApp(props) {
  const [selectedEmotions, setSelectedEmotions] = useState([]);
  const [selectedEmojiEmotions, setSelectedEmojiEmotions] = useState([]);
  const [progress, setProgress] = useState(0);

  // sets the initial word emotions on the left hand side
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

  // sets the initial emoji emotions on the left hand side
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

  // function defining behaviour when a feeling is dropped into the volcano
  function handleOnDrop(e) {
    const emotion = e.dataTransfer.getData("emotion");

    // this adds the word/emoji to the relevant list on the right hand side
    const wordIndex = unusedEmotions.indexOf(emotion);
    // if the dropped item is a word, then it gets removed from the left hand side word array
    // and added to the right hand side word array
    if (wordIndex > -1) {
      unusedEmotions.splice(wordIndex, 1);
      setSelectedEmotions([...selectedEmotions, emotion]);
    }
    // else the dropped emoji gets removed from the left hand side emoji array and
    // added to the right hand side emoji array
    else {
      const chosenEmoji = JSON.parse(emotion);
      const emojiIndex = unusedEmojiEmotions.findIndex(
        (emoji) => emoji.symbol === chosenEmoji.symbol
      );
      unusedEmojiEmotions.splice(emojiIndex, 1);
      setSelectedEmojiEmotions([...selectedEmojiEmotions, chosenEmoji]);
    }

    // this increases the progress of the progress bar
    setProgress(progress + 15);
  }

  // this ensures the default behaviour is ignored in favour of the behaviour you have coded
  function handleDragOver(e) {
    e.preventDefault();
  }

  return (
    <>
      {/* first we add the page header, and pass the page title as "Emotion Volcano" */}
      <AppHeader setPageValue={props.setPageValue} title="Emotion Volcano" />

      {/* then we add the main page content here, using the grid system to allocate space */}
      <div className="row align-items-center">
        {/* the first two columns of this row are occupied by the word emotion list */}
        <div className="col-sm-2" style={{ paddingLeft: "2%" }}>
          <UnusedEmotions emotions={unusedEmotions} />
        </div>

        {/* the next column of this row is occupied by the emoji emotion list */}
        <div className="col-sm-1">
          <UnusedEmojiEmotions emotions={unusedEmojiEmotions} />
        </div>

        {/* the next 6 columns of this row are occupied by the volcano image */}
        <div className="col-sm-6">
          <div onDrop={handleOnDrop} onDragOver={handleDragOver}>
            {/* if the progress bar is not full, it shows the unexploded volcano image */}
            {/* else if the progress bar is full, it shows the exploding volcano image */}
            {/* this is called conditional rendering */}
            {progress < 100 ? (
              <img
                src={volcanoImage}
                alt="Non-erupting volcano"
                style={{ height: "380px", marginTop: "10%" }}
                draggable="false"
              />
            ) : (
              <img
                src={eruptingVolcanoImage}
                alt="Erupting volcano"
                style={{ height: "380px", marginTop: "10%" }}
                draggable="false"
              />
            )}
          </div>
        </div>

        {/* then we have two columns which display the word emotions which have been selected */}
        <div className="col-sm-2">
          <UsedEmotions emotions={selectedEmotions} />
        </div>

        {/* and the last column displays the emoji emotions which have been selected */}
        <div className="col-sm-1">
          <UsedEmojiEmotions emotions={selectedEmojiEmotions} />
        </div>
      </div>

      {/* underneath we have the progress bar, which is on its own row */}
      <div style={{ display: "flex", justifyContent: "center" }}>
        <ProgressBar progress={progress} />
      </div>
    </>
  );
}

export default VolcanoApp;
