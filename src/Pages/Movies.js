import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import Movie from "./Movie";
import MoviesDetails from "./MoviesDetails";

const Movies = ({ match }) => {
  //MoviesDetails.forEach((Movie) => {
  return (
    <div>
      {MoviesDetails.map((Movie) => {
        <li>
          <Link to={`${match.url}/${Movie.id}`}>
            {Movie.name}
            {Movie.Description}
            {Movie.Trailer}
          </Link>
        </li>;
      })}
      <div>
        <Route
          path={`${match.url}/:MovieId`}
          render={(props) => <Movie data={MoviesDetails} {...props} />}
        />
        <Route
          exact
          path={match.url}
          render={() => <div>Please select a Movie.</div>}
        />
      </div>
    </div>
  );
  //});
};

export default Movies;
