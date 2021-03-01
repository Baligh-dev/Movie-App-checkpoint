import "./App.css";
import MovieApp from "./Components/MovieApp";
import Movie from "./Components/Movie/Movie";
import { Link, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={MovieApp} />
        <Route path="/Movie/:id" component={Movie} />
      </Switch>
    </div>
  );
}

export default App;
