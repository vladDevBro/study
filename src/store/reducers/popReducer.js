import {
  FETCH_POPULAR_MOVIES,
  FETCH_POPULAR_MOVIES_FAILURE,
  FETCH_POPULAR_MOVIES_SUCCESS,
  SWITCH_VIEW,
} from "../types/types";

const initial = {
  popmovies: [],
  loading: false,
  error: null,
  list: false,
};

export const popReducer = (state = initial, action) => {
  switch (action.type) {
    case FETCH_POPULAR_MOVIES:
      return { loading: true, error: null, popmovies: [], list: false };

    case FETCH_POPULAR_MOVIES_SUCCESS:
      return {
        loading: false,
        error: null,
        popmovies: action.payload,
        list: false,
      };

    case FETCH_POPULAR_MOVIES_FAILURE:
      return {
        loading: false,
        error: action.payload,
        popmovies: [],
        list: false,
      };

    case SWITCH_VIEW:
      return { ...state, list: !state.list };

    default:
      return state;
  }
};
