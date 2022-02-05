import axios from "axios";
import { FETCH_MOVIES } from "./type";

const fetchMovies = () => dispatch => {
  axios.get("http://localhost:5000/api/movies")
    .then(res => res.data)
    .then(movies => dispatch({
      type: FETCH_MOVIES,
      payload: movies
    }));
}

export default fetchMovies;
