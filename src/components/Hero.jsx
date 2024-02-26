import React from "react";
import { useSelector } from "react-redux";
import { baseImgUrl } from "../constants";
import Loader from "./Loader";

const Hero = () => {
  //store da tutulan verilere eriş

  const store = useSelector((store) => store.movieReducer);

  //0-19 arasında rastgele sayı üret
  const i = Math.floor(Math.random() * 20);

  //rastgele üretilen sıradaki filme eriş
  const randomMovie = store.popularMovies[i];

  return (
    <div className="grid gap-7 grid-cols-1 md:grid-cols-2 md:max-h-[300px]">
      {!randomMovie ? (
        <Loader /> // buraya skeleton ekleyebilirsin
      ) : (
        <>
          <div className="flex flex-col gap-6 items-center justify-center">
            <h1 className="text-3xl font-bold">{randomMovie.title}</h1>
            <p className="flex text-center justify-center">
              {randomMovie.overview}{" "}
            </p>
            <p>
              <span>IMDB:</span>
              <span className=" text-yellow-400">
                {randomMovie.vote_average.toFixed(1)}{" "}
              </span>
            </p>
            <div className="flex gap-5">
              <button className=" p-2 bg-red-600 rounded hover:bg-red-800">
                Filmi İzle
              </button>
              <button className=" p-2 bg-blue-600 rounded hover:bg-blue-800">
                Listeye Ekle
              </button>
            </div>
          </div>
          <div className="flex justify-center">
            <img
              className=" my-4 img-fluid rounded hero-img max-h-[300px]"
              src={baseImgUrl.concat(randomMovie.backdrop_path)}
              alt={randomMovie.title}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Hero;
