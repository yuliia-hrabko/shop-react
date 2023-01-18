import React from "react";
import StarRating from "react-svg-star-rating";

export default function Star({rating}) {
  return (
    <StarRating size={20} isReadOnly initialRating={rating} unit="float" />
  );
}