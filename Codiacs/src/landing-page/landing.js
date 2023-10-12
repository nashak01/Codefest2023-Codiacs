import "./landing.css";
function LandingPage(props) {
  return (
    <div className="container">
      <div className="profile"></div>

      <div>
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
                <p className="name">Memory Jar</p>
              </div>
            </div>
          </div>
        </div>
        <div className="Game col" onClick={() => props.setPageValue("canvas")}>
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
        <div className="Game col" onClick={() => props.setPageValue("volcano")}>
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
        <div className="Game col" onClick={() => props.setPageValue("monster")}>
          <div href="">
            <div className="content">
              <div className="image">
                <img
                  src="img/worry-eater-mouth-open.jpg"
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
  );
}
export default LandingPage;
