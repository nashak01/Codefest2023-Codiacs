import React from "react";
import "./RatingCircle.css";

export interface RatingCircleComponentProps {
  filled: Boolean;
  setSelectedAmount: Function;
  index: number;
}

function RatingCircle({
  filled,
  setSelectedAmount,
  index,
}: RatingCircleComponentProps) {
  var circleClass = "rating-circle";
  if (filled) {
    circleClass += " filled";
  }

  return (
    <div className="circle-container">
      <input
        type="button"
        data-testid={"rating-" + (index+1)}
        className={circleClass}
        onMouseEnter={() => setSelectedAmount(index + 1)}
        onClick={() => setSelectedAmount(index + 1)}
      />
    </div>
  );
}

export default RatingCircle;
