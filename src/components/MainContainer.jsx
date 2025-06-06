import React from "react";
import VideoBg from "./VideoBg";
import VideoTitle from "./VideoTitle";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movies) return;
  const mainMovie = movies[0];
  const { original_title, overview, id } = mainMovie;
  return (
    <>
      <VideoTitle title={original_title} overview={overview} />
      <VideoBg movieId={id}/>
    </>
  );
};

export default MainContainer;
