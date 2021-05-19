import React, { useContext } from "react";
import Movie from "./Movie";
import { MovieContext } from "./MovieContext";
const MovieList = () => {
  const [movies, setMovies] = useContext(MovieContext);
  return (
    <div>
      {movies.map((movie) => (
        <Movie key={movie.id} price={movie.price} name={movie.name} />
      ))}
    </div>
  );
};

export default MovieList;
