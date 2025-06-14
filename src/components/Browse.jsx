import React from "react";
import { Header } from "./Header";
import UserHandler from "../utils/userHandler";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useUpcomingMovies();

  return (
    <>
      <UserHandler />
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </>
  );
};

export default Browse;
