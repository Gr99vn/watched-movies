import { SELECT_MOVIE } from "./type";

const selectMovie = (movie) => dispatch => {
  dispatch({
    type: SELECT_MOVIE,
    payload: movie
  });
}

export default selectMovie;