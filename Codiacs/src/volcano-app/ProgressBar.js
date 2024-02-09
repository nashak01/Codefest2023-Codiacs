import { useEffect } from "react";
import "./ProgressBar.css";

function ProgressBar(props) {
  const progressValue = props.progress;
  const progress = progressValue.toString() + "%";

  const progressBar = document.getElementById("progressBar");

  useEffect(() => {
    if (progressBar) {
      if (progressValue <= 30) {
        progressBar.className =
          "progress-bar progress-bar-striped progress-bar-animated bg-success";
      } else if (progressValue <= 75) {
        progressBar.className =
          "progress-bar progress-bar-striped progress-bar-animated bg-warning";
      } else {
        progressBar.className =
          "progress-bar progress-bar-striped progress-bar-animated bg-danger";
      }
    }
  }, [progressValue, progressBar]);

  return (
    <div data-testid="progress" className="progress">
      <div
        id="progressBar"
        className="progress-bar progress-bar-striped progress-bar-animated"
        role="progress-bar"
        style={{ width: progress }}
        aria-valuenow="25"
        aria-valuemin="0"
        aria-valuemax="100"
      ></div>
    </div>
  );
}

export default ProgressBar;
