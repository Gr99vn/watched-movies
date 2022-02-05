import axios from "axios";
import { ADD_MOVIE } from "./type";

const addMovie = (newMovie) => dispatch => {
  axios.post("http://localhost:5000/api/movies", newMovie)
    .then(res => res.data)
    .then(result => {
      if (result.success) {
        dispatch({
          type: ADD_MOVIE,
          payload: result.movie
        });
      }
    });
}

export default addMovie;