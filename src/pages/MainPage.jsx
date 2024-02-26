import React, { useEffect } from "react";
import Hero from "../components/Hero";
import { useDispatch, useSelector } from "react-redux";
import { getPopular } from "../redux/actions/movieActions";
import { getGenres } from "../redux/actions/genreActions";
import MovieList from "../components/MovieList";
import Loader from "../components/Loader";

const MainPage = () => {
  const genreState = useSelector((store) => store.genreReducer);
  const dispatch = useDispatch();

  //apidan popüler filmleri al ve stora aktar
  useEffect(() => {
    dispatch(getPopular());
    dispatch(getGenres());
  }, []);

  return (
    <div>
      <Hero />

      {genreState.isLoading ? (
        <Loader />
      ) : genreState.isError ? (
        <p>{genreState.isError}</p>
      ) : (
        genreState.genres.map((genre) => (
          <MovieList key={genre.id} genre={genre} />
        ))
      )}
    </div>
  );
};

export default MainPage;
