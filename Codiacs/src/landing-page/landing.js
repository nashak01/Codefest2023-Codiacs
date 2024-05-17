import { useNavigate } from "react-router-dom";
import "./landing.css";
import AppBackground from "../AppBackground";

function LandingPage(props) {
  const navigate = useNavigate();

  return (
    <>
      <AppBackground />
      {/* <div className="background_branding">
        <div><img src={listetingEarLogoTop} className="top_branding" alt="Listening Ear Logo" aria-label="Listening Ear Logo"/></div>
        <div><img src={listetingEarLogoBottom} className="bottom_branding" alt="Listening Ear Logo" aria-label="Listening Ear Logo"/></div>
        <div><img src={listetingEarLogoTopRight} className="logo_top_right" alt="Listening Ear Logo" aria-label="Listening Ear Logo"/></div>
      </div> */}

      <div className="menu">
        <div>
          <h2>
            {"Welcome " +
              (props.usersName || "to the Digital Therapy Room") +
              "!"}
          </h2>
        </div>
        <div className="menu_row">
          <div className="col">
            <button onClick={() => navigate("memory-jar")}>
              <div className="game_card memory_jar">
                <div className="card_contents">
                  <h3>Memory Jar</h3>
                  <p>
                    Create your own memory jar filled with memories, thoughts
                    and feelings for the person who has died. Choose individual
                    colours to represent the memory, thought or feeling that you
                    would like to see within your jar.{" "}
                  </p>
                </div>
              </div>
              <h3
                className={
                  ["light", "white"].includes(props.theme || "light")
                    ? "text-dark"
                    : "text-light"
                }
              >
                Memory Jar
              </h3>
            </button>
          </div>
          <div className="col">
            <button onClick={() => navigate("canvas")}>
              <div className="game_card canvas">
                <div className="card_contents">
                  <h3>Canvas</h3>
                  <p>
                    Use this blank canvas to express your thoughts, feelings and
                    emotions
                  </p>
                </div>
              </div>
              <h3
                className={
                  ["light", "white"].includes(props.theme || "light")
                    ? "text-dark"
                    : "text-light"
                }
              >
                Canvas
              </h3>
            </button>
          </div>
          <div className="col">
            <button onClick={() => navigate("emotion-volcano")}>
              <div className="game_card volcano">
                <div className="card_contents">
                  <h3>Volcano</h3>
                  <p>
                    We all have thoughts and feelings and sometimes they can
                    feel like they are bubbling away like a volcano. Use the
                    volcano to try and name the feelings and thoughts that you
                    have.
                  </p>
                </div>
              </div>
              <h3
                className={
                  ["light", "white"].includes(props.theme || "light")
                    ? "text-dark"
                    : "text-light"
                }
              >
                Volcano
              </h3>
            </button>
          </div>
          <div className="col">
            <button onClick={() => navigate("worry-monster")}>
              <div className="game_card worry_monster">
                <div className="card_contents">
                  <h3>Worry Monster</h3>
                  <p>
                    Sometimes it's hard to talk about our worries and it can
                    help to write them down or draw them instead. You can use
                    our Worry Monster to put your worries inside. It can help to
                    think about who you can talk to about your worries and who
                    else you feel safe sharing them with.
                  </p>
                </div>
              </div>
              <h3
                className={
                  ["light", "white"].includes(props.theme || "light")
                    ? "text-dark"
                    : "text-light"
                }
              >
                Worry Monster
              </h3>
            </button>
          </div>
          <div className="col">
            <button onClick={() => navigate("emdr")}>
              <div className="game_card emdr">
                <div className="card_contents">
                  <h3>EMDR</h3>
                  <p>
                    This involves moving your eyes a specific way while you
                    process traumatic memories. EMDR's goal is to help you heal
                    from trauma or other distressing life experiences.
                  </p>
                </div>
              </div>
              <h3
                className={
                  ["light", "white"].includes(props.theme || "light")
                    ? "text-dark"
                    : "text-light"
                }
              >
                EMDR
              </h3>
            </button>
          </div>
        </div>
        {/* <div className="back_button_container">
          <button className="sign_out_button" onClick={() => navigate("login")}>
            <i
              className="fas_back_arrow fa-solid fa-arrow-left"
              alt="back button"
            ></i>
            <p>Log out</p>
          </button>
        </div> */}
      </div>
    </>
  );
}
export default LandingPage;
