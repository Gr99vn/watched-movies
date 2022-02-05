import React from "react";
import MovieForm from "./MovieForm";
import MovieList from "./MovieList";

class MovieContainer extends React.Component {
  render() {
    return (
      <React.Fragment>
        <MovieForm />
        <MovieList />
      </React.Fragment>
    );
  }
}

export default MovieContainer;