import axios from "axios";
import { useEffect, useState } from "react";
import { baseImgUrl, options } from "../constants";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const MovieList = ({ genre }) => {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?with_genres=${genre.id}`,
        options
      )
      .then((res) => setMovies(res.data.results));
  }, []);

  return (
    <div className=" my-5">
      <h1 className=" text-3xl font-semibold">{genre.name}</h1>
      <Splide aria-label="Movies">
        {movies.map((movie) => (
          <SplideSlide>
            <img src={baseImgUrl + movie.poster_path} alt={movie.title} />
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default MovieList;
