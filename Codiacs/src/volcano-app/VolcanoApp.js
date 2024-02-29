import { React, useState, useEffect } from "react";

// importing all of the custom components needed for the page
import ProgressBar from "./ProgressBar";
import volcanoImage from "../images/volcano.png";
import eruptingVolcanoImage from "../images/erupting-volcano.png";
import UnusedEmotions from "./UnusedEmotions";
import UsedEmotions from "./UsedEmotions";
import AppHeader from "../AppHeader";
import Textbox from "../components/Textbox/Textbox.tsx";
import Button from "../components/Button/Button.tsx";
import Modal from "../components/Modal/Modal.tsx";
import Rating from "../components/Rating/Rating.tsx";

function VolcanoApp(props) {
  const [selectedEmotions, setSelectedEmotions] = useState([]);
  const [progress, setProgress] = useState(0);
  const [customEmotion, setCustomEmotion] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [emotionRating, setEmotionRating] = useState(0);
  const [clickedEmotion, setClickedEmotion] = useState("");
  const progressUnit = 4;

  let bubbling = new Audio("volcano-bubbling.mp3");
  let erupting = new Audio("volcano-erupting.wav");

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
  //   const [unusedEmojiEmotions, setUnusedEmojiEmotions] = useState([
  //     { symbol: "😀", label: "happy" },
  //     { symbol: "😢", label: "sad" },
  //     { symbol: "😕", label: "confused" },
  //     { symbol: "😃", label: "excited" },
  //     { symbol: "😟", label: "worried" },
  //     { symbol: "😨", label: "scared" },
  //     { symbol: "😠", label: "angry" },
  //     { symbol: "😴", label: "tired" },
  //   ]);

  // function defining behaviour when a feeling is dropped into the volcano
  function handleItemEnter(emotion) {
    // this adds the word to the relevant list on the right hand side
    const wordIndex = unusedEmotions.indexOf(emotion);
    unusedEmotions.splice(wordIndex, 1);
    setSelectedEmotions([...selectedEmotions, emotion]);

    setShowModal(true);
    setEmotionRating(0);
  }

  function handleOnDrop(e) {
    const emotion = e.dataTransfer.getData("emotion");
    handleItemEnter(emotion);
  }

  useEffect(() => {
    if (clickedEmotion) {
      handleItemEnter(clickedEmotion);
    }
  }, [clickedEmotion]);

  // this ensures the default behaviour is ignored in favour of the behaviour you have coded
  function handleDragOver(e) {
    e.preventDefault();
  }

  function handleAdd() {
    const newUnusedEmotions = [...unusedEmotions, customEmotion];
    setUnusedEmotions(newUnusedEmotions);
    setCustomEmotion("");
  }

  function handleChange(e) {
    setCustomEmotion(e.target.value);
  }

  function handleSubmit() {
    setShowModal(false);

    // this increases the progress of the progress bar
    setProgress(progress + progressUnit * emotionRating);
  }

  useEffect(() => {
    if (progress >= 100) {
      erupting.currentTime = 0; // Reset audio to beginning
      erupting.volume = 0.2;
      erupting.play();
    }
  })

  return (
    <div id="volcano-app">
      {/* first we add the page header, and pass the page title as "Emotion Volcano" */}
      <AppHeader setPageValue={props.setPageValue} title="Emotion Volcano" />

      {/* then we add the main page content here, using the grid system to allocate space */}
      <div className="row align-items-center" style={{ height: "80vh" }}>
        {/* the first two columns of this row are occupied by the word emotion list */}
        <div className="col-sm-3 row" style={{ paddingLeft: "2%" }}>
          <div className="col-sm-8">
            <UnusedEmotions
              emotions={unusedEmotions}
              setClickedEmotion={setClickedEmotion}
            />
          </div>
          <div
            style={{
              paddingTop: "10%",
            }}
          >
            <label id="textbox-label">Add your own emotions!</label>
            <Textbox
              id="textbox"
              size="lg"
              labelledBy="textbox-label"
              value={customEmotion}
              onChange={handleChange}
            />
            <Button media="&#43;" onClick={handleAdd}>
              <nobr>Add emotion</nobr>
            </Button>
          </div>
        </div>

        {/* the next 6 columns of this row are occupied by the volcano image */}
        <div className="col-sm-6">
          <div
            data-testid="volcano-image"
            onDrop={handleOnDrop}
            onDragOver={handleDragOver}
          >
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
          <div style={{ display: "flex", justifyContent: "center" }}>
            <ProgressBar progress={progress} />
          </div>
        </div>

        <div className="col-sm-3 row">
          <div className="col-sm-8">
            <UsedEmotions emotions={selectedEmotions} />
          </div>
        </div>
      </div>

      {showModal && (
        <Modal
          heading="Rate Your Emotion"
          footer={
            <Button light onClick={handleSubmit}>
              Go
            </Button>
          }
          noClose
        >
          <Rating
            amount={10}
            selectedAmount={emotionRating}
            setSelectedAmount={setEmotionRating}
          />
        </Modal>
      )}
    </div>
  );
}

export default VolcanoApp;
