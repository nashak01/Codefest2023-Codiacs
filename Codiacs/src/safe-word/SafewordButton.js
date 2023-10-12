import "./SafewordButton.css";
function SafewordButton() {
  return (
    <div
      className="circle mb-1"
      onClick={() => alert("Safe Word button pressed. Please stop.")}
    >
      <b>Safe Word</b>
    </div>
  );
}

export default SafewordButton;
