import axios from "axios";
import { MOD_MOVIE } from "./type";

const modifyMovie = (oldMovie, newMovie) => dispatch => {
  console.log("mod");
  axios.put(`http://localhost:5000/api/movies/${newMovie._id}`, newMovie)
    .then(res => res.data)
    .then(res => {
      if (res.success) {
        dispatch({
          type: MOD_MOVIE,
          payload: {
            oldMovie,
            newMovie
          }
        });
      }
    })
}

export default modifyMovie;