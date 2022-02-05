import { UNSELECT_MOVIE } from "./type";

const unselectMovie = (movie) => dispatch => {
  dispatch({
    type: UNSELECT_MOVIE,
    payload: movie
  });
}

export default unselectMovie;