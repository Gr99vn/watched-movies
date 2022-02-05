import { ADD_MOVIE, DEL_MOVIE, FETCH_MOVIES, MOD_MOVIE, SELECT_MOVIE, UNSELECT_MOVIE } from "../actions/type";

const initialState = {
  items: [],
  item: {}
}

export function movieReducer(state = initialState, { type, payload }) {
  switch (type) {
    case FETCH_MOVIES:
      return {
        ...state,
        items: payload
      };
    case ADD_MOVIE:
      return {
        ...state,
        items: [...state.items, payload]
      };
    case DEL_MOVIE:
      return {
        ...state,
        items: state.items.filter(item => item._id !== payload._id)
      };
    case SELECT_MOVIE:
      return {
        ...state,
        item: payload
      }
    case UNSELECT_MOVIE:
      return {
        ...state,
        item: {}
      }
    case MOD_MOVIE:
      console.log(payload);
      return {
        items: [...state.items.slice(0, state.items.indexOf(payload.oldMovie)), payload.newMovie, ...state.items.slice(state.items.indexOf(payload.oldMovie) + 1)],
        item: {}
      }
    default:
      return state;
  }
}