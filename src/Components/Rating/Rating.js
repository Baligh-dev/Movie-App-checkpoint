import React from "react";
import { Rate } from "antd";
import "./Rating.css";

const desc = ["terrible", "bad", "normal", "good", "wonderful"];

const Rater = ({ filterRate, movieRating, rating, setRating }) => {
  const handleChange = (value) => {
    setRating(value);
  };

  return (
    <span className="ratingContent">
      {filterRate ? (
        <Rate tooltips={desc} onChange={handleChange} value={rating} />
      ) : (
        <Rate value={movieRating} disabled className="movieRating" />
      )}
    </span>
  );
};

export default Rater;
