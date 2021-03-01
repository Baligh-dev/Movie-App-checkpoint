import React from "react";
import MovieCard from "../MovieCard/MovieCard";
import "./MovieList.css";
import { Link } from "react-router-dom";

const MovieList = ({ movies, inputSearch, rating, AddMovie }) => {
  return (
    <div className="movieList">
      {movies
        .filter(
          (movie) =>
            movie.title.toUpperCase().includes(inputSearch.toUpperCase()) &&
            movie.rating >= rating
        )
        .map((movie) => (
          <Link
            key={movie.id}
            to={{
              pathname: `/Movie/${movie.id}`,
            }}
          >
            <MovieCard movie={movie} key={movie.id} />
          </Link>
        ))}
      <MovieCard className="addMovieBtn" addCard={true} AddMovie={AddMovie} />
    </div>
  );
};

export default MovieList;
