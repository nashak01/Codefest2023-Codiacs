import React from "react";
import "./Rating.css";
import RatingCircle from "./RatingCircle.tsx";

export interface RatingComponentProps {
  amount: number;
  selectedAmount: number;
  setSelectedAmount: Function;
}

function Rating({
  amount,
  selectedAmount,
  setSelectedAmount,
}: RatingComponentProps) {
  return (
    <div className="scale-container">
      {Array.from({ length: amount }, (v: undefined, index: number) => (
        <div key={index} className="rating-container">
          <RatingCircle
            filled={index < selectedAmount}
            setSelectedAmount={setSelectedAmount}
            index={index}
          />
          <h4>{index + 1}</h4>
        </div>
      ))}
    </div>
  );
}

export default Rating;
