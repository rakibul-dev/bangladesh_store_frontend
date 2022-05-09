import React from "react";
import ReactStars from "react-rating-stars-component";

const ReviewCard = ({ review }) => {
  const { name, comment } = review;

  //   Rating Options
  const options = {
    size: "large",
    value: review.rating,
    readonly: true,
    precision: 0.5,
  };
  return (
    <div>
      <img src="" alt="User" />
      <p>{name}</p>
      <ReactStars {...options}></ReactStars>
      <span>{comment}</span>
    </div>
  );
};

export default ReviewCard;
