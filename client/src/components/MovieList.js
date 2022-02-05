import React from "react";
import MovieItem from "./MovieItem";
import { connect } from "react-redux";
import fetchMovies from "../store/actions/fetchMovies";
import deleteMovie from "../store/actions/deleteMovie";
import selectMovie from "../store/actions/selectMovie";
import PropTypes from "prop-types";

class MovieList extends React.Component {
  componentDidMount() {
    this.props.fetchMovies();
  }

  render() {
    return (
      <div className="movies mt-3 mx-auto w-1/2">
        {this.props.movies.map(movie => <MovieItem key={movie._id} movie={movie} selectMovie={this.props.selectMovie} deleteMovie={this.props.deleteMovie} />)}
      </div>
    );
  }
}

MovieList.propTypes = {
  fetchMovies: PropTypes.func.isRequired,
  deleteMovie: PropTypes.func.isRequired,
  selectMovie: PropTypes.func.isRequired,
  movies: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  movies: state.movies.items
});

export default connect(mapStateToProps, { fetchMovies, deleteMovie, selectMovie })(MovieList);