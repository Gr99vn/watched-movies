import axios from "axios";
import { DEL_MOVIE } from "./type";

const deleteMovie = (movie) => dispatch => {
  axios.delete(`http://localhost:5000/api/movies/${movie._id}`)
    .then(res => res.data) 
    .then(result => {
      if (result.success) {
        dispatch({
          type: DEL_MOVIE,
          payload: movie
        });
      }
    });
}

export default deleteMovie;