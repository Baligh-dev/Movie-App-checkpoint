import React, { useState } from "react";
import moviesData from "../MoviesData";
import { Link } from "react-router-dom";
import "./Movie.css";

const Movie = ({ match }) => {
  const [movies, setMovies] = useState(moviesData);
  const Movie = movies.find((p) => p.id == match.params.id);

  if (Movie)
    return (
      <div className="movieDetails">
        <Link to="/">
          <p>back</p>
        </Link>
        <h3 className="movieTitle"> {Movie.title} </h3>
        <p className="desc">{Movie.description}</p>
        <a href={Movie.trailer} target="_blank" className="trail">
          Watch it now!
        </a>
      </div>
    );
  else
    return (
      <div>
        <div>
          <h2> Sorry. Movie doesnt exist </h2>
        </div>
      </div>
    );
};
export default Movie;
