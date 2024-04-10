import React from "react";
import SafewordButton from "./safe-word/SafewordButton";
import listetingEarLogoTop from "./images/LISTENING EAR ICON CMYK TOP.jpg";
import listetingEarLogoBottom from "./images/LISTENING_EAR_ICON_CMYK_BOTTOM.jpg";
import listetingEarLogoTopRight from "./images/LISTENING EAR MAIN.jpg.png";
import "./fontawesome-free-6.5.1-web/css/all.css";

function AppBackground(props) {
  return (
    <>
      <div class="background_branding">
        <div><img src={listetingEarLogoTop} class="top_branding" alt="Listening Ear Logo" aria-label="Listening Ear Logo"/></div>
        <div><img src={listetingEarLogoBottom} class="bottom_branding" alt="Listening Ear Logo" aria-label="Listening Ear Logo"/></div>
        <div><img src={listetingEarLogoTopRight} class="logo_top_right" alt="Listening Ear Logo" aria-label="Listening Ear Logo"/></div>
      </div>

      <div
        className="row"
        style={{
          marginLeft: "2%",
          marginTop: "2%",
        }}
      >
        <div className="circle col-2 text-center safeword">
          <SafewordButton />
        </div>
      </div>
    </>
  );
}

export default AppBackground;
