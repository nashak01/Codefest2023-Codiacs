import "./landing.css";
// import "./font_size.js";
function LandingPage(props) {
  return (
    <div className="container">
      <div className="profile">
        {/* <img className="butterfly_speech" src="img/butterfly_speech.jpg"></img> */}
        <div id="butterfly">
          <div className="wing wingl">
            <div id="leftwing">
              <div id="lwtop"></div>
              <div id="lwbottom"></div>
            </div>
          </div>

          <div className="wing wingr">
            <div id="rightwing" className="">
              <div id="rwtop"></div>
              <div id="rwbottom"></div>
            </div>
          </div>

          <div id="body"></div>

          <div id="leftant">
            <div className="ball"></div>
          </div>
          <div id="rightant">
            <div className="ball"></div>
          </div>
        </div>
        <div>
          <div id="profile_page" className="modal">
            <div className="modal-content">
              <span className="close">&times;</span>

              <div className="favourite_color">
                <h1>Pick Your Favourite Color</h1>
                <input type="color" id="fav_color"></input>
              </div>

              <div className="background_color">
                <h1>Background Color</h1>
                <input type="color" id="background_color"></input>
              </div>

              <div className="Font_Control">
                <h1>Font Color</h1>
                <input type="color" id="font_color"></input>
                <h1>Font Size</h1>
                <div className="font_size">
                  <button
                    role="button"
                    id="decreasetext"
                    // onClick={decreaseText}
                  >
                    {" "}
                    <span>smaller</span>
                  </button>
                  <button
                    role="button"
                    id="resettext"
                    // onClick={resetText}
                  >
                    <span>normal</span>
                  </button>
                  <button
                    role="button"
                    id="increasetext"
                    //  onClick={increaseText}
                  >
                    <span>bigger</span>
                  </button>
                </div>
              </div>
            </div>
          </div>{" "}
          <img
            src="img/LISTENING EAR CMYK.jpg"
            alt="Listening Ear logo"
            style={{ width: "100%" }}
            className="my-3"
          />
        </div>

        <div className="welcome_message">
          <h1>
            Welcome <span>Matt</span>
          </h1>
        </div>
        <div className="row">
          <div
            className="Game col"
            onClick={() => props.setPageValue("memory-jar")}
          >
            <div href="">
              <div className="content">
                <div className="image" id="Memory_Jar">
                  <img
                    src="img/MemoryJar2.png"
                    alt="Memory Jar"
                    style={{ minHeight: "100px" }}
                  />
                </div>

                <div className="text">
                  <p className="name" style={{ top: "93px" }}>
                    Memory Jar
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="Game col"
            id="canvas_load"
            onClick={() => props.setPageValue("canvas")}
          >
            <div href="">
              <div className="content">
                <div className="image" id="Canvas">
                  <img
                    src="img/canvas.png"
                    alt="Canvas"
                    style={{ minHeight: "100px" }}
                  />
                </div>

                <div className="text">
                  <p className="name">Canvas</p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="Game col"
            onClick={() => props.setPageValue("volcano")}
          >
            <div href="">
              <div className="content">
                <div className="image volcano">
                  <img
                    src="img/volcano.png"
                    alt="Volcano"
                    style={{ minHeight: "100px" }}
                  />
                </div>

                <div className="text">
                  <p className="name">Volcano</p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="Game col"
            onClick={() => props.setPageValue("monster")}
          >
            <div href="">
              <div className="content">
                <div className="image">
                  <img
                    src="img/monster_animated.jpg"
                    alt="worry monster"
                    style={{ maxHeight: "210px", maxWidth: "175px" }}
                  />
                </div>

                <div className="text">
                  <p className="name">Worry Monster</p>
                </div>
              </div>
            </div>
          </div>
          <div className="Game col" onClick={() => props.setPageValue("emdr")}>
            <div href="">
              <div className="content">
                <div className="image">
                  <img
                    src="img/emdr.png"
                    alt="emdr"
                    style={{ minHeight: "100px" }}
                  />
                </div>

                <div className="text">
                  <p className="name">EMDR</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default LandingPage;
