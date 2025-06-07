import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="flex-none">
      <img src={IMG_CDN_URL + posterPath} alt="Movie Card" className="w-20 md:w-40" />
    </div>
  );
};

export default MovieCard;
