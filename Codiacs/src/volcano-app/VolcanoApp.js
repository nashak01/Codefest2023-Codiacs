import { React, useState, useEffect, useRef } from "react";
import GifPlayer from "react-gif-player";

// importing all of the custom components needed for the page
import ProgressBar from "./ProgressBar";
import volcanoAnimation from "../images/volcano-animation.gif";
import volcanoStill from "../images/volcano-still.gif";
import UnusedEmotions from "./UnusedEmotions";
import UsedEmotions from "./UsedEmotions";
import AppBackground from "../AppBackground.js";
import Textbox from "../components/Textbox/Textbox.tsx";
import Button from "../components/Button/Button.tsx";
import Modal from "../components/Modal/Modal.tsx";
import Rating from "../components/Rating/Rating.tsx";

function VolcanoApp() {
  const [selectedEmotions, setSelectedEmotions] = useState([]);
  const [progress, setProgress] = useState(0);
  const [customEmotion, setCustomEmotion] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [triggerModalOpen, setTriggerModalOpen] = useState(true);
  const [emotionRating, setEmotionRating] = useState(0);
  const [clickedEmotion, setClickedEmotion] = useState("");
  const [triggerPoint, setTriggerPoint] = useState(null);
  const [progressUnit, setProgressUnit] = useState(null);
  const [volcanoFull, setVolcanoFull] = useState(false);

  const bubbling = useRef(new Audio("volcano-bubbling.mp3"));
  let erupting = new Audio("volcano-erupting.wav");

  useEffect(() => {
    if (triggerPoint !== null) {
      setProgressUnit((15 - triggerPoint) / 2);
    }
  }, [triggerPoint]);

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

  function handleTriggerEnter() {
    setTriggerModalOpen(false);
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
    if (progress && 0 < progress && progress < 100) {
      bubbling.current.volume = progress * 0.01 * 0.2;
      bubbling.current.loop = true; // Loops bubbling audio
      bubbling.current.play();
    } else if (progress && progress >= 100) {
      bubbling.current.pause(); // Stops bubbling audio
      erupting.currentTime = 0; // Reset audio to beginning
      erupting.volume = 0.2;
      erupting.play();
      setVolcanoFull(true);
    }
  }, [progress]);

  return (
    <div id="volcano-app">
      {/* first we add the page header, and pass the page title as "Emotion Volcano" */}
      <AppBackground hideBackground />

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
            <div>
              <img
                src={volcanoStill}
                style={{
                  position: "absolute",
                  top: "33%",
                  left: "calc(50% - 200px)",
                  zIndex: 1,
                  width: "400px",
                }}
              />
              {volcanoFull && (
                <div
                  style={{
                    position: "absolute",
                    top: "33%",
                    left: "calc(50% - 200px)",
                    zIndex: 2,
                  }}
                >
                  <GifPlayer
                    gif={volcanoAnimation}
                    autoplay
                    style={{ width: "400px" }}
                  />
                </div>
              )}
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              position: "absolute",
              top: "70%",
              left: "calc(50% - 190px)",
            }}
          >
            <ProgressBar progress={progress} />
          </div>
        </div>

        <div className="col-sm-3 row">
          <div className="col-sm-8">
            <UsedEmotions emotions={selectedEmotions} />
          </div>
        </div>
      </div>

      {triggerModalOpen && (
        <Modal
          heading="How are you feeling today?"
          subheading="(1 = not very good, 10 = very good)"
          footer={
            <Button light onClick={handleTriggerEnter}>
              Enter
            </Button>
          }
          noClose
        >
          <Rating
            amount={10}
            selectedAmount={triggerPoint}
            setSelectedAmount={setTriggerPoint}
          />
        </Modal>
      )}

      {showModal && (
        <Modal
          heading="Rate Your Emotion"
          footer={
            <Button light onClick={handleSubmit} id="volcano-go-button">
              Go
            </Button>
          }
          noClose
        >
          <>
            <Rating
              amount={10}
              selectedAmount={emotionRating}
              setSelectedAmount={setEmotionRating}
            />
            <h2 style={{ fontSize: "18pt", marginTop: "5%" }}>
              If you would like to, you can explain why in the box below.
            </h2>
            <Textbox size="lg" labelledBy="Explain why you feel this way" />
          </>
        </Modal>
      )}
    </div>
  );
}

export default VolcanoApp;
