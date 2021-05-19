import React, { useContext } from "react";
import { MovieContext } from "./MovieContext";

const Nav = () => {
  const [movies, setMovies] = useContext(MovieContext);
  return (
    <div>
      <h3>Movies</h3>
      <p>No of Movies: {movies.length}</p>
    </div>
  );
};

export default Nav;
