import "./SafewordButton.css";
function SafewordButton() {
  return (
    <button
      className="circle mb-1"
      onClick={() => alert("Safe Word button pressed. Please stop.")}
    >
      <b>Safe Word</b>
    </button>
  );
}

export default SafewordButton;
