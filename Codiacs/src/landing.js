import "./landing.css";
function LandingPage() {
  return (
    <div className="container">
      <div className="profile"></div>

      <div>
        <img src="img/LISTENING EAR CMYK.jpg" alt="Listening Ear logo" />
      </div>

      <div className="welcome_message">
        <h1>
          Welcome <span>Matt</span>
        </h1>
      </div>
      <div className="row">
        <div className="Game col">
          <div href="">
            <div className="content">
              <div className="image" id="Memory_Jar">
                <img src="img/MemoryJar2.png" alt="Memory Jar" />
              </div>

              <div className="text">
                <p className="name">Memory Jar</p>
              </div>
            </div>
          </div>
        </div>
        <div className="Game col">
          <div href="">
            <div className="content">
              <div className="image" id="Canvas">
                <img src="img/canvas.png" alt="Canvas" />
              </div>

              <div className="text">
                <p className="name">Canvas</p>
              </div>
            </div>
          </div>
        </div>
        <div className="Game col">
          <div href="">
            <div className="content">
              <div className="image volcano">
                <img src="img/volcano.png" alt="Volcano" />
              </div>

              <div className="text">
                <p className="name">Volcano</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default LandingPage;
