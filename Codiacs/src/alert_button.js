import "./landing-page/landing.css";
function alertButton() {
  return (
    <div>

        <div className="alert_button">
            <button><span>Safe Word</span></button>
        </div>
        
        <div id="alert_modal" class="modal">
            <div class="modal-content">
                <span class="close">&times;</span>
                <h4>Alert Pressed</h4>
                <div id="progressBar">
                    <div class="bar"></div>
                </div>
            </div>
        </div>
    </div>

  )
}


export default alertButton;